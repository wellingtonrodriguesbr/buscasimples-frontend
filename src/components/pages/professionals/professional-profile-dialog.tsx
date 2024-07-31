"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function ProfessionalProfileDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          className="bg-transparent hover:bg-transparent p-0 flex items-center text-app-blue-400 hover:text-app-blue-500 text-xs group"
        >
          Ver perfil completo
          <ChevronRight className="text-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[350px] md:max-w-lg rounded-md">
        <DialogHeader className="items-start">
          <DialogTitle className="text-2xl text-app-black">
            Perfil do profissa
          </DialogTitle>
          <DialogDescription className="text-left">
            Aqui está com mais detalhes as informações deste profissa
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
