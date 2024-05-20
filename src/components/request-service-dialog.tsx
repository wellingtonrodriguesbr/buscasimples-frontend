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
import { RequestServiceForm } from "./request-service-form";

interface RequestServiceDialogProps {
  workerName?: string;
}

export function RequestServiceDialog({
  workerName,
}: RequestServiceDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="justify-between w-full font-medium text-xs">
          Contratar {workerName ? workerName : "este profissional"}{" "}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[350px] md:max-w-lg rounded-md">
        <DialogHeader className="items-start">
          <DialogTitle className="text-2xl text-app-black">
            Nova solicitação
          </DialogTitle>
          <DialogDescription className="text-left">
            Preencha as informações abaixo
          </DialogDescription>
        </DialogHeader>
        <RequestServiceForm />
      </DialogContent>
    </Dialog>
  );
}
