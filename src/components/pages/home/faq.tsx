import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowUpRight } from "lucide-react";

export function Faq() {
  return (
    <section className="w-full max-w-screen-xl px-4 mx-auto pt-12 md:pt-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div className="flex flex-col gap-3">
          <h4 className="text-2xl md:text-3xl font-semibold">
            Dúvidas frequentes
          </h4>
          <p className="text-sm text-app-gray-600 max-w-md">
            Se ficou com alguma dúvida, entre em contato através do nosso e-mail
            ou Whatsapp:
          </p>

          <div className="w-12 h-[1px] bg-app-gray-300"></div>

          <div className="flex flex-col gap-4 mt-2">
            <Link
              href="mailto:contato@buscasimples.app"
              className="w-fit underline text-sm text-app-gray-700 font-medium flex items-center gap-2 group"
            >
              contato@buscasimples.app
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20quero%20tirar%20algumas%20dúvidas,%20pode%20me%20ajudar?"
              className="w-fit underline text-sm text-app-green-700 font-medium flex items-center gap-2 group"
            >
              Chamar no Whatsapp
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="underline-0 hover:no-underline">
              Como irá funcionar?
            </AccordionTrigger>
            <AccordionContent>
              Nossa missão aqui é ser uma vitrine para profissionais, onde os
              profissionais podem divulgar seus serviços e encontrar novos
              clientes.{" "}
              <Link
                href="/como-funciona"
                className="text-app-blue-500 hover:text-app-blue-600 hover:underline"
              >
                Aqui você verá com mais detalhes
              </Link>
              .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="underline-0 hover:no-underline">
              O que é um(a) profissa?
            </AccordionTrigger>
            <AccordionContent>
              Todo profissional aqui da plataforma nós apelidamos carinhosamente
              de profissa. É um termo popular para se referir a uma pessoa que
              realiza algum trabalho ou serviço.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="underline-0 hover:no-underline">
              Quem poderá entrar como profissa?
            </AccordionTrigger>
            <AccordionContent>
              Qualquer pessoa que seja capaz de desenvolver um trabalho ou
              serviço.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left mr-2 no-underline hover:no-underline">
              A plataforma garante que o serviço seja cumprido pelo
              profissional?
            </AccordionTrigger>
            <AccordionContent>
              Não! Não interferimos na negociação entre profissionais e
              clientes, tudo acontece diretamente entre eles.{" "}
              <Link
                href="/como-funciona"
                className="text-app-blue-500 hover:text-app-blue-600 hover:underline"
              >
                Aqui você verá com mais detalhes e com dicas de como contratar
                com segurança
              </Link>
              .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left mr-2 underline-0 hover:no-underline">
              Quero contratar um profissa, preciso pagar alguma coisa?
            </AccordionTrigger>
            <AccordionContent>
              Não! Nossa missão é conectar você a um profissional capacitado de
              forma simples, prática e gratuita. Porém, a negociação dos valores
              do serviço que ele irá prestar a você, será feita diretamente com
              o profissional.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="underline-0 hover:no-underline">
              Quero ser um profissa, preciso pagar alguma coisa?
            </AccordionTrigger>
            <AccordionContent>
              Não! A plataforma é totalmente gratuita para todos os
              profissionais que queiram se cadastrar e começar a ser encontrado
              por clientes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
