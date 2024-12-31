/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function ForThoseWhoWantToHire() {
  return (
    <section className="flex flex-col gap-6">
      <div className="space-y-2">
        <h1 className="font-semibold text-2xl md:text-3xl">
          Para quem quer contratar
        </h1>
        <p className="text-app-gray-600 text-sm md:text-base">
          Bem-vindo(a) à plataforma do Busca Simples, o lugar perfeito para você
          encontrar o profissional que precisa, de forma rápida, prática e
          totalmente gratuita. Aqui, você tem acesso a uma ampla vitrine de
          especialistas em diversas áreas, prontos para atender às suas
          necessidades. Seja para reformas, serviços domésticos, saúde, beleza,
          tecnologia ou qualquer outra área, estamos aqui para conectar você ao
          profissional ideal.
        </p>
      </div>

      <div className="mt-2">
        <h2 className="font-medium text-xl mb-4">Como funciona?</h2>
        <ol className="space-y-4">
          <li className="text-sm md:text-base">
            <strong>1. Explore a vitrine de profissionais:</strong> Nossa
            plataforma exibe uma lista organizada de profissionais. Você pode
            pesquisar pelo tipo de serviço que procura, como "eletricista",
            "designer gráfico" ou "personal trainer". Use nossos filtros para
            refinar a busca por localização, especialização ou avaliações de
            outros clientes.
          </li>
          <li className="text-sm md:text-base">
            <strong>2. Veja os detalhes:</strong> Cada profissional tem uma
            página de perfil onde você encontra informações importantes.
          </li>
          <li className="text-sm md:text-base">
            <strong>3. Entre em contato direto:</strong> Nossa plataforma não
            interfere na comunicação e nem na negociação entre você e o
            profissional. Entre em contato através do WhatsApp, ligação, e-mail
            ou outros meios preferidos: Deixe a negociação mais confortável para
            você!
          </li>
          <li className="text-sm md:text-base">
            <strong>4. Negocie e contrate com liberdade:</strong> Depois de
            conversar com o profissional, você pode combinar o serviço, os
            valores e o prazo de execução. Não cobramos taxas nem interferimos
            nos acordos — tudo é decidido diretamente entre você e o
            profissional.
          </li>
        </ol>
      </div>

      <Separator />

      <div>
        <h3 className="font-medium text-xl mb-4">
          Por que escolher nossa plataforma?
        </h3>
        <ol className="space-y-4">
          <li className="text-sm md:text-base">
            <strong>1. 100% Gratuita:</strong> Não há custos para acessar ou
            entrar em contato com os profissionais.
          </li>
          <li className="text-sm md:text-base">
            <strong>2. Variedade de opções:</strong> Encontre desde serviços
            simples até especialistas de alto nível, tudo em um só lugar.
          </li>
          <li className="text-sm md:text-base">
            <strong>3. Acesso rápido e simples:</strong> Sem necessidade de
            preencher formulários enormes ou processos complicados.
          </li>
          <li className="text-sm md:text-base">
            <strong>4. Confiança e transparência:</strong> Confira avaliações de
            outros clientes para tomar a melhor decisão.
          </li>
        </ol>
      </div>

      <Separator />

      <div>
        <h4 className="font-medium text-xl mb-4">
          Dicas para contratar com segurança
        </h4>
        <ol className="space-y-4">
          <li className="text-sm md:text-base">
            <strong>1. Pesquise avaliações:</strong> Leia os depoimentos de
            outros clientes para entender a qualidade do serviço oferecido.
          </li>
          <li className="text-sm md:text-base">
            <strong>2. Combine detalhes com clareza:</strong> Certifique-se de
            discutir todos os detalhes, como preço, prazo e expectativas.
          </li>
          <li className="text-sm md:text-base">
            <strong>3. Prefira Meios Seguros de Pagamento:</strong> Combine
            previamente a forma de pagamento que garanta segurança para ambas as
            partes.
          </li>
          <li className="text-sm md:text-base">
            <strong>4. Confiança e transparência:</strong> Confira avaliações de
            outros clientes para tomar a melhor decisão.
          </li>
        </ol>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-2 mt-4">
        <Button className="w-full md:w-fit group" asChild>
          <Link href="/profissionais">
            Procurar o profissional ideal{" "}
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </Button>
        <Button variant="outline" className="w-full md:w-fit group" asChild>
          <Link href="https://api.whatsapp.com/send?phone=+5511950537096&text=Ol%C3%A1,%20quero%20tirar%20algumas%20d%C3%BAvidas,%20pode%20me%20ajudar?">
            <WhatsappIcon className="size-4 fill-app-blue-400 group-hover:fill-app-blue-700" />
            Ainda estou com dúvidas
          </Link>
        </Button>
      </div>
    </section>
  );
}
