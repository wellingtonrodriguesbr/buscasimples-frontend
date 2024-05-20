import { Filters } from "./filters";
import { ProfessionalsList } from "./professionals-list";

export function Professionals() {
  return (
    <section className="w-full max-w-screen-xl px-4 mx-auto pt-12 md:pt-16">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-semibold text-app-black md:leading-tight">
          Buscou, achou, contratou! Simples assim.
        </h1>
        <Filters />
      </div>
      <ProfessionalsList />
    </section>
  );
}
