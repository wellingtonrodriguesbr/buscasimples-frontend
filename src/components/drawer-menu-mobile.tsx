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
import { ArrowRight, Menu } from "lucide-react";

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
      <DrawerContent className="h-[50vh]">
        <ul className="flex flex-col px-4 mt-8">
          <li className="border-b">
            <Link
              href="/cadastro/tipo-de-conta"
              className="flex items-center justify-between py-4 px-2"
            >
              Criar conta gratuitamente
              <ArrowRight className="size-4" />
            </Link>
          </li>
          <li className="border-b">
            <Link
              href="/entrar"
              className="flex items-center justify-between py-4 px-2"
            >
              Acessar minha conta
              <ArrowRight className="size-4" />
            </Link>
          </li>
          <li className="border-b">
            <Link
              href="https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20quero%20tirar%20algumas%20dúvidas,%20pode%20me%20ajudar?"
              className="flex items-center justify-between py-4 px-2"
            >
              Tirar dúvidas
              <ArrowRight className="size-4" />
            </Link>
          </li>
          <li className="border-b">
            <Link
              href="https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20gostaria%20de%20dar%20um%20feedback"
              className="flex items-center justify-between py-4 px-2"
            >
              Dar feedback
              <ArrowRight className="size-4" />
            </Link>
          </li>
        </ul>
      </DrawerContent>
    </Drawer>
  );
}
