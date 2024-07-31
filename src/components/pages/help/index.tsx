"use client";

import { useRouter } from "next/navigation";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HelpCostTable } from "./help-cost-table";
import { QRCode } from "./qrcode";
import { CopyPixCodeButton } from "./copy-pix-code-button";

export function Help() {
  const router = useRouter();

  return (
    <section className="w-full mt-8 max-w-screen-xl px-4 mx-auto pb-24">
      <Button
        variant="link"
        onClick={() => router.back()}
        className="mb-4 md:mb-8 px-0"
      >
        <ArrowLeft className="size-4" />
        Voltar
      </Button>
      <header className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-14">
        <div className="flex-1">
          <h1 className="font-semibold text-2xl md:text-3xl">
            Precisamos da sua ajuda para manter este projeto no ar
          </h1>
          <p className="text-sm md:text-base mt-6">
            Este é um projeto 100% independente, criado com a intenção de
            resolver problemas de outras plataformas que mais lesam os
            profissionais e os clientes, do que os ajudam. Apesar de a
            plataforma ser gratuita para todos, existem custos para mantê-la no
            ar. Atualmente, estou arcando com esses custos sozinho, mas conforme
            a plataforma cresce, os custos também aumentam. Para que este
            projeto continue funcionando, trazendo novas funcionalidades e te
            ajudando de alguma forma, peço encarecidamente que considere nos
            apoiar com qualquer quantia. Abaixo, estou deixando uma tabela com
            todas as ferramentas que utilizamos para manter este projeto online,
            trazendo transparência e clareza para você que irá contribuir
            conosco.
          </p>
        </div>
        <QRCode />
        <CopyPixCodeButton />
      </header>

      <div className="overflow-x-auto mt-8 md:mt-12">
        <HelpCostTable />
      </div>
    </section>
  );
}
