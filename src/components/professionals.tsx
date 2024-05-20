import { ProfessionalsList } from "./professionals-list";

export function Professionals() {
  return (
    <section className="w-full max-w-screen-xl px-4 mx-auto pt-12 md:pt-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-app-black md:leading-tight">
        Buscou, achou, contratou! Simples assim.
      </h1>
      <ProfessionalsList />
    </section>
  );
}
