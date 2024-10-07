"use client";

import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetUserProfile } from "@/hooks/use-get-user-profile";
import { Button } from "./ui/button";
import { Loader2, LogOut, Settings, User } from "lucide-react";
import { useSignOut } from "@/hooks/use-sign-out";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Skeleton } from "./ui/skeleton";

export function AccountMenuDropdown() {
  const { user, isGetUserProfilePending } = useGetUserProfile();
  const { signOut, isSignOutPending } = useSignOut();

  async function handleSignOut() {
    try {
      await signOut();
      window.location.href = `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN_URL}/entrar`
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="sm" className="hidden md:flex">
          {isGetUserProfilePending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <>
              <User className="size-4" />
              {user && user.name}
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-full">
        <DropdownMenuLabel className="flex items-center gap-2">
          {isGetUserProfilePending ? (
            <Skeleton className="size-10 rounded-full" />
          ) : (
            <Avatar>
              <AvatarImage />
              <AvatarFallback className="uppercase text-xs">
                {user?.name.split(" ")[0].at(0)}
                {user?.name.split(" ")[1].at(0)}
              </AvatarFallback>
            </Avatar>
          )}

          <div className="flex flex-col gap-1">
            {isGetUserProfilePending ? (
              <>
                <Skeleton className="w-36 h-4" />
                <Skeleton className="w-32 h-4" />
              </>
            ) : (
              <>
                <span className="leading-none">{user?.name}</span>
                <span className="font-normal text-xs">{user?.email}</span>
              </>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href="/minha-conta"
            className="w-full flex items-center gap-2 cursor-pointer"
          >
            <Settings className="size-4" />
            Minha conta
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/minha-conta/profissional"
            className="w-full flex items-center gap-2 cursor-pointer"
          >
            <User className="size-4" />
            Quero ser um profissa
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-rose-500 cursor-pointer hover:text-rose-500 focus:text-rose-500 hover:bg-rose-50 focus:bg-rose-50"
          asChild
        >
          <button
            disabled={isSignOutPending}
            onClick={handleSignOut}
            className="w-full flex items-center gap-2"
          >
            {isSignOutPending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <>
                <LogOut className="size-4" />
                Sair da plataforma
              </>
            )}
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
