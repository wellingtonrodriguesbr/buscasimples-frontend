import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, Clock } from "lucide-react";

export function ProfessionalOfficeHour() {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-2">
        <Clock className="size-4" />
        Horário de atendimento
        <ChevronDown className="size-3" />
      </PopoverTrigger>
      <PopoverContent align="start">
        <div className="flex flex-col gap-6">
          {hours.map((item) => (
            <div key={item.day} className="flex justify-between items-center">
              <span className="font-medium text-xs md:text-sm text-app-black">
                {item.day}
              </span>
              <span className="text-xs md:text-sm text-app-gray-600">
                {item.hour}
              </span>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

const hours = [
  {
    day: "Segunda-feira",
    hour: "12:00 às 19:00",
  },
  {
    day: "Terça-feira",
    hour: "12:00 às 19:00",
  },
  {
    day: "Quarta-feira",
    hour: "12:00 às 19:00",
  },
  {
    day: "Quinta-feira",
    hour: "12:00 às 19:00",
  },
  {
    day: "Sexta-feira",
    hour: "12:00 às 19:00",
  },
  {
    day: "Sábado",
    hour: "12:00 às 19:00",
  },
  {
    day: "Domingo",
    hour: "Fechado",
  },
];
