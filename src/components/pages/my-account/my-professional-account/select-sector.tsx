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
import { useFetchSectors } from "@/hooks/use-fetch-sectors";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/icons/whatsapp";
import { Check, ChevronsUpDown } from "lucide-react";
import { ControllerRenderProps, useFormContext } from "react-hook-form";

interface SelectSectorProps {
  field: ControllerRenderProps<
    { zipCode: string; about: string; sector: string; occupation: string },
    "sector"
  >;
}

export function SelectSector({ field }: SelectSectorProps) {
  const form = useFormContext();
  const { sectors, isFetchSectorsPending } = useFetchSectors();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="secondary"
            role="combobox"
            className={cn(
              "border justify-between bg-white",
              !field.value && "text-muted-foreground"
            )}
          >
            {field.value
              ? sectors.find((sector) => sector.id === field.value)?.title
              : "Selecione a sua área de atuação"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput placeholder="Pesquisar..." />
          <CommandList>
            <CommandEmpty>
              Setor não encontrado.
              <Button className="mt-2" asChild>
                <Link href="">
                  <WhatsappIcon className="size-4" />
                  Fale com o suporte
                </Link>
              </Button>
            </CommandEmpty>
            <CommandGroup>
              {sectors && !isFetchSectorsPending
                ? sectors.map((sector) => (
                    <CommandItem
                      value={sector.title}
                      key={sector.id}
                      onSelect={() => {
                        form.setValue("sector", sector.id);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4 text-app-blue-400",
                          sector.id === field.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {sector.title}
                    </CommandItem>
                  ))
                : null}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
