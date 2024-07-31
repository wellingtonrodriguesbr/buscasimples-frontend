import { Building, MapPin, Star } from "lucide-react";
import { ProfessionalOfficeHour } from "./professional-office-hour";

export function ProfessionalInformation() {
  return (
    <div className="space-y-4 text-xs text-app-gray-600">
      <p className="line-clamp-3 text-ellipsis overflow-hidden">
        Hoje, com dois anos de experiência, continuo minha jornada de
        aprendizado e crescimento como programador de software. Estou sempre
        buscando novas maneiras de aprimorar minhas habilidades e acompanhar as
        tendências tecnológicas em constante evolução. Estou ansioso para ver o
        que o futuro reserva e estou determinado a continuar me destacando neste
        campo que tanto amo.
      </p>
      <p className="flex items-center gap-1">
        <Star className="size-4 fill-amber-400 stroke-transparent" />
        Nota 4,9 <span className="text-[10px]">(50 avaliações)</span>
      </p>
      <p className="flex items-center gap-1">
        <MapPin className="size-4" />
        Tatuí-SP
      </p>
      <p className="flex items-center gap-1">
        <Building className="size-4" />
        Tecnologia
      </p>

      <ProfessionalOfficeHour />
    </div>
  );
}
