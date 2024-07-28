import Link from "next/link";

import { DrawerContent } from "@/components/ui/drawer";
import { ArrowUpRight } from "lucide-react";

export function DrawerMenuMobileContent() {
  return (
    <DrawerContent className="h-[40vh] px-4">
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
            Quero tirar algumas dúvidas
          </Link>
          <ArrowUpRight className="absolute top-2 right-2 size-4 text-app-blue-400" />
        </li>
        <li className="relative p-2 rounded-lg bg-app-gray-100">
          <Link
            href="https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20gostaria%20de%20dar%20um%20feedback"
            className="flex items-center justify-between py-4 px-2"
          >
            Gostaria de dar um feedback
          </Link>
          <ArrowUpRight className="absolute top-2 right-2 size-4 text-app-blue-400" />
        </li>
      </ul>
    </DrawerContent>
  );
}
