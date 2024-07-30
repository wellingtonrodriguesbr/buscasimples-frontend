"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import { TypeWriter } from "./typewriter";
import { WhatsappIcon } from "./icons/whatsapp";
import { useUserAuthenticate } from "@/hooks/use-user-authenticate";

export function Hero() {
  const { authenticate } = useUserAuthenticate();

  return (
    <section
      data-authenticate={authenticate}
      className="w-full max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 place-content-center gap-12 mt-12 md:mt-48 xl:mt-72 data-[authenticate=true]:hidden"
    >
      <div className="mt-0 md:-mt-32">
        <TypeWriter words={["Buscou, achou, contratou. Simples assim!"]} />

        <h1 className="text-4xl xl:text-5xl leading-tight xl:leading-tight font-semibold">
          Conectando clientes e profissionais de um jeito simples, rápido e
          eficaz.
        </h1>
        <p className="text-sm md:text-base mt-6 text-app-gray-600">
          Simplificamos a maneira como profissionais e clientes se conectam.
          Encontre especialistas em diversas áreas prontos para te atender.
          Encontre clientes que estão procurando seus serviços. Simples assim!
        </p>

        <div className="flex flex-col md:flex-row items-center gap-3 mt-8">
          <Button className="w-full" asChild>
            <Link href="/cadastro/tipo-de-conta">
              Crie uma conta gratuitamente
            </Link>
          </Button>
          <Button variant="secondary" className="w-full md:w-fit" asChild>
            <Link
              href="https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20a%20plataforma,%20pode%20me%20ajudar?"
              className="gap-2"
            >
              <WhatsappIcon className="fill-app-black size-4" />
              Mais informações
            </Link>
          </Button>
        </div>
      </div>

      <div className="w-full h-52 xl:h-80 bg-app-gray-100 rounded-md relative mt-48 md:mt-6 xl:mt-0">
        <Image
          src="/hero-img.svg"
          className="w-[300px] xl:w-[450px] absolute bottom-0 left-1/2 -translate-x-1/2"
          alt=""
          width={800}
          height={800}
          quality={100}
          placeholder="blur"
          blurDataURL="/hero-img.svg"
        />
      </div>
    </section>
  );
}
