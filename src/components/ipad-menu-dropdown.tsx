import Link from "next/link";
import Image from "next/image";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";

export function IpadMenuDropdown() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" className="hidden md:flex xl:hidden">
          <Menu className="size-4" />
          Menu
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Busca Simples"
                className="w-28"
                width={144}
                height={144}
                quality={100}
              />
            </Link>
          </SheetTitle>
        </SheetHeader>

        <ul className="mt-6">
          {ITEMS.map((item) => (
            <li key={item.title}>
              <Link
                href={item.link}
                className="w-full flex items-center justify-between border-b py-4"
              >
                {item.title}
                <ArrowRight className="size-4 text-app-gray-500" />
              </Link>
            </li>
          ))}
        </ul>

        <SheetFooter className="mt-5">
          <Button className="w-full" asChild>
            <Link href="/cadastro/tipo-de-conta">
              Criar conta gratuitamente
            </Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

const ITEMS = [
  {
    title: "Início",
    link: "/",
  },
  {
    title: "Profissionais",
    link: "/profissionais",
  },
  {
    title: "Apoie este projeto",
    link: "/ajuda",
  },
  {
    title: "Como funciona",
    link: "/como-funciona",
  },
  {
    title: "Acessar minha conta",
    link: "/entrar",
  },
];
