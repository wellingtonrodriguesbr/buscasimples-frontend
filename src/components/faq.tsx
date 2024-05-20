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
          <h3 className="text-2xl md:text-3xl font-semibold">
            Dúvidas frequentes
          </h3>
          <p className="text-sm text-app-gray-600 max-w-md">
            Se ficou com alguma dúvida, entre em contato através do nosso e-mail
            ou Whatsapp:
          </p>

          <div className="w-12 h-[1px] bg-app-gray-300"></div>

          <div className="flex flex-col gap-4 mt-2">
            <Link
              href="mailto:contato@buscasimples.app"
              className="underline text-sm text-app-gray-700 font-medium flex items-center gap-2 group"
            >
              contato@buscasimples.app
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20quero%20tirar%20algumas%20dúvidas,%20pode%20me%20ajudar?"
              className="underline text-sm text-app-gray-700 font-medium flex items-center gap-2 group"
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
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="underline-0 hover:no-underline">
              É uma assinatura?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="no-underline hover:no-underline">
              Quais benefícios eu terei?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="underline-0 hover:no-underline">
              Quem poderá entrar como profissa?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="underline-0 hover:no-underline">
              O que é um(a) profissa?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
