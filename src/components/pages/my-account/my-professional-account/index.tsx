import Link from "next/link";

import { MyProfessionalAccountForm } from "./my-professional-account-form";
import { ArrowLeft } from "lucide-react";

export function MyProfessionalAccount() {
  return (
    <section className="w-full max-w-screen-sm mx-auto px-4 mt-8">
      <Link href="/minha-conta" className="w-fit flex items-center gap-2 mb-8">
        <ArrowLeft className="size-4" />
        Voltar
      </Link>
      <h1 className="font-semibold text-2xl md:text-3xl">
        Informações profissionais
      </h1>
      <div className="mt-12">
        <MyProfessionalAccountForm />
      </div>
    </section>
  );
}
