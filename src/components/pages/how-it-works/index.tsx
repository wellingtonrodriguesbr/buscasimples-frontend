import Link from "next/link";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons/whatsapp";

export function HowItWorks() {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 mt-8">
      <Button variant="link" className="w-fit px-0" asChild>
        <Link href="/" className="mb-4 px-0">
          <ArrowLeft className="size-4" />
          Voltar
        </Link>
      </Button>

      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-2xl md:text-3xl">
          Para quem quer contratar
        </h1>
        <p className="text-app-gray-600 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
        </p>
        <p className="text-app-gray-600 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-2">
          <Button asChild>
            <Link href="/profissionais">
              Procurar o profissional ideal <ArrowUpRight className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" className="w-full md:w-fit group" asChild>
            <Link href="https://api.whatsapp.com/send?phone=+5511950537096&text=Ol%C3%A1,%20quero%20tirar%20algumas%20d%C3%BAvidas,%20pode%20me%20ajudar?">
              <WhatsappIcon className="size-4 fill-app-blue-400 group-hover:fill-app-blue-600" />
              Ainda estou com dúvidas
            </Link>
          </Button>
        </div>
      </div>
      <Separator className="my-12" />
      <div className="flex flex-col gap-6">
        <h2 className="font-semibold text-2xl md:text-3xl">
          Para quem quer prestar serviços
        </h2>
        <p className="text-app-gray-600 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
        </p>
        <p className="text-app-gray-600 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet animi
          facilis cupiditate, ut aliquam blanditiis quae eum veniam omnis. Odit
          voluptate dolorem autem ratione ipsa quo doloremque rem eum vitae.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <Button asChild>
            <Link href="/cadastro/profissional">
              Quero me cadastrar na plataforma
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button variant="outline" className="w-full md:w-fit group" asChild>
            <Link href="https://api.whatsapp.com/send?phone=+5511950537096&text=Ol%C3%A1,%20quero%20tirar%20algumas%20d%C3%BAvidas,%20pode%20me%20ajudar?">
              <WhatsappIcon className="size-4 fill-app-blue-400 group-hover:fill-app-blue-600" />
              Ainda estou com dúvidas
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
