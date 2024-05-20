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

        {/* <NavigationMenuItem>
          <Link href="/como-funciona" legacyBehavior passHref>
            <NavigationMenuLink
              data-active={path === "/como-funciona"}
              className={navigationMenuTriggerStyle()}
            >
              Como funciona
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
