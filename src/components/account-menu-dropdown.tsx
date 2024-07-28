"use client";

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
import { Loader2, User } from "lucide-react";

export function AccountMenuDropdown() {
  const { user, isGetUserProfilePending } = useGetUserProfile();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="hidden md:flex">
          {isGetUserProfilePending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <>
              <User className="size-4" />
              {user?.name}
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
