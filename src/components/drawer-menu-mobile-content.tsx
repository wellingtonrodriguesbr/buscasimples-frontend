import Link from "next/link";

import { DrawerContent } from "@/components/ui/drawer";
import { DrawerMenuMobileContentItem } from "./drawer-menu-mobile-content-item";
import { ArrowUpRight } from "lucide-react";

export function DrawerMenuMobileContent() {
  return (
    <DrawerContent className="h-[52vh] px-4">
      <ul className="grid grid-cols-2 gap-1 mt-4">
        <li className="relative col-span-full p-2 rounded-lg bg-app-blue-400/5 border border-app-blue-400/10 mb-0.5">
          <Link
            href="/ajuda"
            className="flex flex-col text-lg font-semibold py-4 px-2 text-app-blue-700"
          >
            Apoie este projeto
            <span className="text-xs mt-1 font-normal">
              Precisamos da sua ajuda para manter este projeto no ar
            </span>
          </Link>
          <ArrowUpRight className="absolute top-2 right-2 size-4 text-app-blue-400" />
        </li>

        {ITEMS.map((item) => (
          <DrawerMenuMobileContentItem
            key={item.title}
            title={item.title}
            link={item.link}
          />
        ))}
      </ul>
    </DrawerContent>
  );
}

const ITEMS = [
  {
    title: "Criar conta gratuitamente",
    link: "/cadastro/tipo-de-conta",
  },
  {
    title: "Acessar minha conta",
    link: "/entrar",
  },
  {
    title: "Quero tirar algumas dúvidas",
    link: "https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20estou%20com%20algumas%20dúvidas,%20pode%20me%20ajudar?",
  },
  {
    title: "Gostaria de dar um feedback",
    link: "https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20gostaria%20de%20dar%20um%20feedback",
  },
];
