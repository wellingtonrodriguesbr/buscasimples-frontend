"use client";

import Link from "next/link";

import { Home, Loader2, Search, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { DrawerMenuMobile } from "./drawer-menu-mobile";
import { useUserAuthenticate } from "@/hooks/use-user-authenticate";

export function MenuMobile() {
  const path = usePathname();
  const { authenticate, isPending } = useUserAuthenticate();

  return (
    <section
      data-hidden={path.includes("/cadastro") || path.includes("/entrar")}
      className="flex md:hidden data-[hidden=true]:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t items-center justify-between px-8 z-50"
    >
      <Link
        data-active={path === "/"}
        href="/"
        className="flex flex-col gap-1 items-center text-xs font-medium font-display text-app-gray-500 data-[active=true]:text-app-gray-700 group transition-colors"
      >
        <Home className="size-4 text-app-gray-500 group-data-[active=true]:text-app-blue-400  transition-colors" />
        Início
      </Link>

      <Link
        data-active={path === "/profissionais"}
        href="/profissionais"
        className="flex flex-col gap-1 items-center text-xs font-medium font-display text-app-gray-500 data-[active=true]:text-app-gray-700 group transition-colors"
      >
        <Search className="size-4 text-app-gray-500 group-data-[active=true]:text-app-blue-400  transition-colors" />
        Buscar
      </Link>

      <Link
        href="https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20quero%20tirar%20algumas%20dúvidas,%20pode%20me%20ajudar?"
        className="flex flex-col gap-1 items-center text-xs font-medium font-display text-app-gray-500 data-[active=true]:text-app-gray-700 group transition-colors"
      >
        <WhatsappIcon className="size-4 fill-app-gray-500 group-data-[active=true]:fill-app-blue-400 transition-colors" />
        Dúvidas
      </Link>
      {isPending ? (
        <Loader2 className="size-4 animate-spin text-app-blue-400" />
      ) : null}

      {authenticate && !isPending ? (
        <Link
          href="/minha-conta"
          data-active={path.includes("/minha-conta")}
          className="flex flex-col gap-1 items-center text-xs font-medium font-display text-app-gray-500 data-[active=true]:text-app-gray-700 group transition-colors"
        >
          <User className="size-4 text-app-gray-500 group-data-[active=true]:text-app-blue-400 transition-colors" />
          Perfil
        </Link>
      ) : null}

      {!authenticate && !isPending ? <DrawerMenuMobile /> : null}
    </section>
  );
}
