"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { Heart } from "lucide-react";

export function NavMenu() {
  const path = usePathname();

  return (
    <NavigationMenu className="hidden xl:block">
      <NavigationMenuList className="text-app-gray-700">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              data-active={path === "/"}
              className={navigationMenuTriggerStyle()}
            >
              Início
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/profissionais" legacyBehavior passHref>
            <NavigationMenuLink
              data-active={path === "/profissionais"}
              className={navigationMenuTriggerStyle()}
            >
              Profissionais
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/ajuda" legacyBehavior passHref>
            <NavigationMenuLink
              data-active={path === "/ajuda"}
              className={navigationMenuTriggerStyle()}
            >
              <Heart className="size-4 mr-2 group-data-[active=true]:fill-app-blue-400 group-data-[active=true]:stroke-none" />
              Apoie este projeto
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
