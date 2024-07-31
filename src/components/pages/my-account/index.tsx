import { MyAccountItem } from "./my-account-item";

export function MyAccount() {
  return (
    <section className="w-full max-w-lg mx-auto px-4 mt-8">
      <h1 className="font-semibold text-2xl md:text-3xl">Minha conta</h1>
      <ul className="flex flex-col mt-6">
        {ITEMS.map((item) => (
          <MyAccountItem
            key={item.title}
            title={item.title}
            description={item.decription}
            link={item.link}
          />
        ))}
      </ul>
    </section>
  );
}

const ITEMS = [
  {
    title: "Informações de cadastro",
    decription: "Nome, e-mail e telefone",
    link: "/minha-conta/informacoes-de-cadastro",
  },
  {
    title: "Enviar um feedback sobre a plataforma",
    decription: "Dúvida, sugestão, elogio, reclamação..",
    link: "https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20gostaria%20de%20enviar%20um%20feedback%20sobre%20a%20plataforma",
  },
  {
    title: "Está com alguma dificuldade?",
    decription: "Fale com o nosso suporte",
    link: "https://api.whatsapp.com/send?phone=+5511950537096&text=Olá,%20estou%20com%20algumas%20dificuldades,%20pode%20me%20ajudar?",
  },
  {
    title: "Precisamos da sua ajuda",
    decription: "Ajude-nos a manter este projeto no ar",
    link: "/ajuda",
  },
];
