import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { MapPin } from "lucide-react";

export function UserLocationDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2" variant="secondary">
          <MapPin className="size-4" />
          Adicionar localização
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar sua localização</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" className="w-full">
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
