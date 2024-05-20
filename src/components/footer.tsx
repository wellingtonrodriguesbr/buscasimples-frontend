import Image from "next/image";
import Link from "next/link";

import { ScrollToTopButton } from "./scroll-to-top-button";
import { FooterItems } from "./footer-items";
import { FooterSocialMedia } from "./footer-social-media";

export function Footer() {
  return (
    <footer className="w-full max-w-screen-xl px-4 mx-auto mt-36 pb-12 xl:pb-10">
      <div className="flex flex-col md:flex-row items-start justify-between gap-16 py-4 md:pb-1 border-t pt-16 md:pt-20">
        <div className="grid grid-cols-2 xl:grid-cols-3 w-full gap-12 -mt-8">
          <div>
            <h4 className="font-semibold mb-5 text-xl">Busca Simples</h4>
            <FooterItems items={column1} />
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-xl">Aqui tem</h4>
            <FooterItems items={column2} />
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-xl">Redes Sociais</h4>
            <FooterSocialMedia />
          </div>
        </div>

        <div className="w-full max-w-full md:max-w-[300px] h-[300px] mt-12 md:mt-0 bg-gradient-to-b from-app-blue-400 to-app-blue-500 rounded-md relative z-10">
          <Image
            src="/footer-img.png"
            alt="Homem segurando um celular"
            className="absolute left-1/2 -translate-x-1/2 bottom-0"
            width={300}
            height={300}
            quality={100}
          />
        </div>
      </div>

      <div className="w-full flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8 md:gap-12 border-t pt-8 mt-6">
        <div className="w-full xl:w-fit flex flex-row-reverse xl:flex-row xl:justify-start justify-between items-center gap-8">
          <ScrollToTopButton />
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="busca simples.app"
              className="w-[110px]"
              width={110}
              height={110}
              quality={100}
            />
          </Link>
        </div>
        <div className="flex flex-col gap-4 md:gap-2">
          <span className="text-xs text-app-gray-600">
            © Copyright 2024 - Busca Simples - Todos os direitos reservados
          </span>
        </div>

        <div className="flex items-center gap-8 justify-between xl:justify-end w-full flex-1">
          <Link
            href="/termos-e-condicoes-de-uso"
            className="text-xs text-app-gray-600 underline hover:text-app-gray-800"
          >
            Termos e condições de uso
          </Link>

          <Link
            href="/politica-de-privacidade"
            className="text-xs text-app-gray-600 underline hover:text-app-gray-800"
          >
            Política de privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}

const column1 = [
  {
    title: "Como funciona",
    url: "/",
  },
  {
    title: "Sugestões",
    url: "/",
  },
  {
    title: "Dúvidas",
    url: "https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20quero%20tirar%20algumas%20dúvidas,%20pode%20me%20ajudar?",
  },
];

const column2 = [
  {
    title: "Profissionais de A a Z",
    url: "/profissionais",
  },
];
