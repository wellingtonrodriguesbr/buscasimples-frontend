import { MyDataItem } from "./my-data-item";

export function MyData() {
  return (
    <section className="w-full max-w-lg mx-auto px-4 mt-8">
      <h1 className="font-semibold text-2xl md:text-3xl">Meus dados</h1>
      <ul className="flex flex-col mt-6">
        {ITEMS.map((item) => (
          <MyDataItem
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
    title: "Minhas informações",
    decription: "Nome, e-mail e telefone",
    link: "/",
  },
  {
    title: "Enviar um feedback sobre a plataforma",
    decription: "Dúvida, sugestão, elogio, reclamação..",
    link: "/",
  },
  {
    title: "Está com alguma dificuldade?",
    decription: "Fale com o nosso suporte",
    link: "/",
  },
];
