import Link from "next/link";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormControl } from "@/components/ui/form";
import { useFetchOccupations } from "@/hooks/use-fetch-occupations";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { ControllerRenderProps, useFormContext } from "react-hook-form";

interface SelectSectorProps {
  field: ControllerRenderProps<
    { zipCode: string; about: string; sector: string; occupation: string },
    "occupation"
  >;
}

export function SelectOccupation({ field }: SelectSectorProps) {
  const form = useFormContext();
  const { occupations, isFetchOccupationsPending } = useFetchOccupations({
    sectorId: form.watch("sector"),
  });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            disabled={!occupations.length}
            variant="secondary"
            role="combobox"
            className={cn(
              "border justify-between bg-white",
              !field.value && "text-muted-foreground"
            )}
          >
            {field.value
              ? occupations.find((occupation) => occupation.id === field.value)
                  ?.title
              : "Selecione sua profissão"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput placeholder="Pesquisar..." />
          <CommandList>
            <CommandEmpty>
              Profissão não encontrada.
              <Button className="mt-2" asChild>
                <Link href="">
                  <WhatsappIcon className="size-4" />
                  Fale com o suporte
                </Link>
              </Button>
            </CommandEmpty>
            <CommandGroup>
              {occupations.map((occupation) => (
                <CommandItem
                  value={occupation.title}
                  key={occupation.id}
                  onSelect={() => {
                    form.setValue("occupation", occupation.id);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4 text-app-blue-400",
                      occupation.id === field.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {occupation.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
