import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import {
  Drawer,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { DrawerMenuMobileContent } from "./drawer-menu-mobile-content";

export function DrawerMenuMobile() {
  const path = usePathname();
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    setOpenDrawer(false);
  }, [path]);

  return (
    <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
      <DrawerTrigger asChild>
        <button className="flex flex-col gap-1 items-center text-xs text-app-gray-500">
          <Menu className="size-4" />
          Menu
        </button>
      </DrawerTrigger>
      <DrawerHeader className="sr-only">
        <DrawerTitle>Menu de opções</DrawerTitle>
        <DrawerDescription></DrawerDescription>
      </DrawerHeader>
      <DrawerMenuMobileContent />
    </Drawer>
  );
}
