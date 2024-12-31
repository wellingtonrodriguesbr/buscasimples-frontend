/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function ForThoseWhoWantToProvideServices() {
  return (
    <section className="flex flex-col gap-6">
      <h1 className="font-semibold text-2xl md:text-3xl">
          Para quem quer prestar serviços
        </h1>
        <p className="text-app-gray-600 text-sm md:text-base">
          Bem-vindo(a) à plataforma do Busca Simples, o espaço ideal para profissionais que desejam alcançar mais clientes e expandir seus negócios. Criamos uma vitrine totalmente gratuita para você exibir seus serviços, conectar-se diretamente com clientes e transformar oportunidades em sucesso. Seja você um autônomo, microempreendedor ou profissional experiente, aqui você tem a chance de mostrar todo o seu potencial.
        </p>

        <div>
          <h2 className="font-medium text-xl mb-4">Como funciona?</h2>
          <ol className="space-y-4">
            <li className="text-sm md:text-base"><strong>1. Crie seu perfil profissional:</strong> Cadastre-se de forma simples e rápida, e crie uma página que representa você e seus serviços. Este é o seu espaço para atrair clientes, então capriche nos detalhes.</li>
            <li className="text-sm md:text-base"><strong>2. Seja encontrado por clientes:</strong> Assim que seu perfil estiver ativo, ele será exibido na nossa vitrine. Clientes poderão encontrá-lo pesquisando pela sua área de atuação, localização ou avaliações.</li>
            <li className="text-sm md:text-base"><strong>3. Receba contatos diretos:</strong> Os clientes interessados nos seus serviços entrarão em contato diretamente com você. Não há intermediários, para isso você precisará ter aceito nossos <Link href="/termos-e-condicoes-de-uso" className="font-medium underline text-app-blue-500">termos e condições de uso</Link>.</li>
            <li className="text-sm md:text-base"><strong>4. Negocie e feche contratos:</strong> A negociação é 100% entre você e o cliente. Combine os valores, prazos e demais detalhes de forma livre, sem taxas ou intermediações da plataforma.</li>
          </ol>
        </div>

        <Separator className="my-4" />

        <div>
          <h3 className="font-medium text-xl mb-4">Por que se inscrever na nossa plataforma?</h3>
          <ol className="space-y-4">
            <li className="text-sm md:text-base"><strong>1. 100% Gratuita:</strong> Não cobramos nada para você criar seu perfil ou receber contatos.</li>
            <li className="text-sm md:text-base"><strong>2. Maior visibilidade:</strong> Apareça para centenas de clientes que estão procurando exatamente o que você oferece.</li>
            <li className="text-sm md:text-base"><strong>3. Perfil personalizado:</strong> Destaque seus diferenciais, como experiências, certificações e fotos de trabalhos realizados.</li>
            <li className="text-sm md:text-base"><strong>4. Contato direto com clientes:</strong> Facilite a comunicação e a negociação, sem barreiras.</li>
          </ol>
        </div>

        <Separator className="my-4" />

        <div>
          <h4 className="font-medium text-xl mb-4">Dicas para atrair mais clientes</h4>
          <ol className="space-y-4">
            <li className="text-sm md:text-base"><strong>1. Capriche no perfil:</strong> Insira informações detalhadas e fotos de qualidade para causar uma boa impressão.</li>
            <li className="text-sm md:text-base"><strong>2. Responda rápido:</strong> Mostre profissionalismo respondendo às mensagens e ligações o quanto antes.</li>
            <li className="text-sm md:text-base"><strong>3. Construa uma boa reputação:</strong> Peça aos clientes para deixarem avaliações após o serviço, fortalecendo sua credibilidade.</li>
            <li className="text-sm md:text-base"><strong>4. Seja claro e objetivo:</strong> Durante as negociações, defina preços e prazos de maneira transparente para evitar mal-entendidos.</li>
          </ol>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 mt-4">
          <Button className="w-full md:w-fit group" asChild>
            <Link href="/cadastro/profissional">
              Quero me cadastrar na plataforma
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Button>
          <Button variant="outline" className="w-full md:w-fit group" asChild>
            <Link href="https://api.whatsapp.com/send?phone=+5511950537096&text=Ol%C3%A1,%20quero%20tirar%20algumas%20d%C3%BAvidas,%20pode%20me%20ajudar?">
              <WhatsappIcon className="size-4 fill-app-blue-400 group-hover:fill-app-blue-600" />
              Ainda estou com dúvidas
            </Link>
          </Button>
        </div>
    </section>
  );
}