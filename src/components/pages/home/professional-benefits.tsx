import Link from "next/link";

import {
  Award,
  BadgeCheck,
  ChevronRight,
  DollarSign,
  Handshake,
  Percent,
  Plus,
  Rss,
  UnfoldHorizontal,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProfessionalBenefits() {
  return (
    <section className="w-full max-w-screen-xl px-4 mx-auto mt-16 md:mt-36">
      <div className="flex flex-col md:flex-row items-start gap-6 justify-between md:sticky xl:relative top-20 xl:top-0 bg-app-gray-50 pt-6 z-10 xl:z-auto">
        <h3 className="text-2xl xl:text-3xl font-medium max-w-xl leading-tight md:leading-tight">
          Veja ao que você terá acesso sendo um Profissa na nossa plataforma
        </h3>
        <p className="text-sm max-w-md text-app-gray-600">
          O boca a boca é valioso, mas por que se limitar quando o mundo precisa
          do que você faz? Imagine centenas de clientes procurando exatamente o
          seu talento e não sabendo onde te encontrar. É hora de mudar isso!
          Torne-se um verdadeiro profissional de destaque no Busca Simples,
          conecte-se com mais pessoas e transforme sua paixão em oportunidade —
          e o melhor, sem pagar nada por isso!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-3 mt-12">
        <div className="flex flex-col justify-end gap-2 h-[380px] xl:min-h-48 xl:h-full bg-professional bg-cover bg-center p-4 rounded-md relative md:sticky xl:relative md:top-60 xl:top-0">
          <Button className="w-full" asChild>
            <Link
              href="/cadastro/profissional"
              className="justify-between group"
            >
              Quero ser um profissa
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
          <BadgeCheck className="w-12 h-12 absolute -top-4 -right-4 fill-app-blue-400 stroke-white" />
        </div>

        <div className="col-span-1 xl:col-span-2 grid grid-cols-2 xl:grid-cols-4 gap-2 md:gap-3 md:sticky md:top-0">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="p-4 flex flex-col gap-4 w-full min-h-48 md:h-full bg-app-blue-400/5 rounded-md"
            >
              <div className="w-fit flex items-center justify-center p-2 text-white rounded-full bg-app-blue-400">
                {item.icon}
              </div>
              <span className="text-sm md:text-base text-app-blue-500 font-medium">
                {item.title}
              </span>

              <span className="text-xs text-app-gray-600">
                {item.description}
              </span>
            </div>
          ))}
          <Button className="flex items-center justify-center w-full h-full bg-app-green-500 hover:bg-app-green-600 transition-colors rounded-md relative group">
            <span className="text-white font-medium text-lg md:text-xl px-3 text-center">
              E muito mais...
            </span>
            <Plus className="w-6 h-6 absolute top-4 right-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: <DollarSign className="w-4 h-4" />,
    title: "100% gratuito e sempre será",
    description:
      "Utilize todas as funcionalidades sem pagar nada, garantindo acesso completo sem custos ocultos.",
  },
  {
    icon: <User className="w-4 h-4" />,
    title: "Tenha um perfil exclusivo",
    description:
      "Destaque-se com um perfil personalizado e acompanhe seus resultados em uma plataforma prática e fácil de usar.",
  },
  {
    icon: <Handshake className="w-4 h-4" />,
    title: "Alcance mais clientes",
    description:
      "Amplie sua base de clientes com ferramentas que aumentam sua visibilidade e engajamento.",
  },
  {
    icon: <Percent className="w-4 h-4" />,
    title: "Encontre o cliente ideal",
    description:
      "Destaque-se no mercado e conquiste a preferência dos seus clientes.",
  },
  {
    icon: <Award className="w-4 h-4" />,
    title: "Acumule pontos e seja recomendado",
    description:
      "Conquiste destaque e confiança ao acumular pontos e obter indicações para novos clientes.",
  },

  {
    icon: <Rss className="w-4 h-4" />,
    title: "Seja digital, na era digital",
    description:
      "Transforme seu negócio com ferramentas digitais feitas para o presente e o futuro.",
  },
  {
    icon: <UnfoldHorizontal className="w-4 h-4" />,
    title: "Expanda seus horizontes",
    description:
      "Explore novas oportunidades e alcance novos mercados com facilidade.",
  },
];
