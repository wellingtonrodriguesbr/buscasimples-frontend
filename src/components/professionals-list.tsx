import { ProfessionalCard } from "./professional-card";

export function ProfessionalsList() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-3 mt-12">
      {Array.from({ length: 32 }).map((_, index) => (
        <ProfessionalCard key={index} />
      ))}
    </section>
  );
}
