import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ArrowUpRight, Menu } from "lucide-react";

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
      <DrawerContent className="h-[45vh] px-4">
        <h3 className="mt-8 text-lg text-center">Como podemos te ajudar?</h3>
        <ul className="grid grid-cols-2 gap-1 mt-4">
          <li className="relative p-2 rounded-lg bg-app-gray-100">
            <Link
              href="/cadastro/tipo-de-conta"
              className="flex items-center justify-between py-4 px-2"
            >
              Criar conta gratuitamente
            </Link>
            <ArrowUpRight className="absolute top-2 right-2 size-4 text-app-blue-400" />
          </li>
          <li className="relative p-2 rounded-lg bg-app-gray-100">
            <Link
              href="/entrar"
              className="flex items-center justify-between py-4 px-2"
            >
              Acessar minha conta
            </Link>
            <ArrowUpRight className="absolute top-2 right-2 size-4 text-app-blue-400" />
          </li>
          <li className="relative p-2 rounded-lg bg-app-gray-100">
            <Link
              href="https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20quero%20tirar%20algumas%20dúvidas,%20pode%20me%20ajudar?"
              className="flex items-center justify-between py-4 px-2"
            >
              Tirar dúvidas
            </Link>
            <ArrowUpRight className="absolute top-2 right-2 size-4 text-app-blue-400" />
          </li>
          <li className="relative p-2 rounded-lg bg-app-gray-100">
            <Link
              href="https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20gostaria%20de%20dar%20um%20feedback"
              className="flex items-center justify-between py-4 px-2"
            >
              Dar feedback
            </Link>
            <ArrowUpRight className="absolute top-2 right-2 size-4 text-app-blue-400" />
          </li>
        </ul>
      </DrawerContent>
    </Drawer>
  );
}
