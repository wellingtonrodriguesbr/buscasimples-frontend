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

export function AccountMenuDropdown() {
  const { user, isGetUserProfilePending } = useGetUserProfile();
  const { signOut, isSignOutPending } = useSignOut();

  async function handleSignOut() {
    try {
      await signOut();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="hidden md:flex">
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
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href="/meus-dados"
            className="flex items-center gap-2 cursor-pointer"
          >
            <Settings className="size-4" />
            Meus dados
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <button
            disabled={isSignOutPending}
            onClick={handleSignOut}
            className="flex items-center gap-2 text-rose-500 cursor-pointer hover:text-rose-500 focus:text-rose-500 hover:bg-rose-50 focus:bg-rose-50"
          >
            {isSignOutPending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <>
                <LogOut className="size-4" />
                Sair da minha conta
              </>
            )}
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
