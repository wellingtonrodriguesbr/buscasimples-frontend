import Link from "next/link";

import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  BarChart2,
  ChevronRight,
  DollarSign,
  Handshake,
  Percent,
  Rss,
  UnfoldHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProfessionalBenefits() {
  return (
    <section className="w-full max-w-screen-xl px-4 mx-auto mt-16 md:mt-36">
      <div className="flex flex-col md:flex-row items-start gap-6 justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold">
          O que está esperando para aumentar seus ganhos?
        </h2>
        <p className="text-xs md:text-sm max-w-md text-app-gray-600">
          O boca a boca tem seu valor, mas aqui você não se limita, muitos
          clientes precisam do seu trabalho e não te conhecem. Torne-se um
          profissa do Busca Simples.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 md:gap-3 mt-12">
        <div className="flex flex-col justify-end gap-2 h-[380px] xl:min-h-48 xl:h-full row-span-full bg-professional bg-cover bg-center p-4 rounded-md relative">
          <Button asChild>
            <Link
              href="/profissional/cadastro"
              className="justify-between pointer-events-none"
            >
              Quero ser um profissa (em breve)
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
          <BadgeCheck className="w-12 h-12 absolute -top-4 -right-4 fill-app-blue-400 stroke-white" />
        </div>

        <div className="col-span-1 md:col-span-2 grid grid-cols-2 xl:grid-cols-4 gap-2 md:gap-3">
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
          <Link
            href="/como-funciona"
            className="flex items-center justify-center w-full h-48 md:h-full bg-app-green-500 hover:bg-app-green-600 transition-colors rounded-md relative group"
          >
            <span className="text-white font-medium text-lg md:text-xl px-3 text-center">
              Ver mais detalhes
            </span>
            <ArrowUpRight className="w-6 h-6 absolute top-4 right-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    icon: <DollarSign className="w-4 h-4" />,
    title: "Não pague nada agora",
    description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    icon: <BarChart2 className="w-4 h-4" />,
    title: "Tenha um painel profissional",
    description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    icon: <Handshake className="w-4 h-4" />,
    title: "Alcance mais clientes",
    description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    icon: <Percent className="w-4 h-4" />,
    title: "Seja mais valorizado",
    description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    icon: <Award className="w-4 h-4" />,
    title: "Acumule pontos e troque por brindes",
    description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    icon: <Rss className="w-4 h-4" />,
    title: "Seja digital, na era digital",
    description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    icon: <UnfoldHorizontal className="w-4 h-4" />,
    title: "Expanda seus horizontes",
    description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
];