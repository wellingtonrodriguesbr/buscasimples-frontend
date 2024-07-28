"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ChevronRight, Handshake, Search } from "lucide-react";
import { Button } from "./ui/button";

export function SelectAccountTypeOptions() {
  const router = useRouter();
  const [type, setType] = useState<"CUSTOMER" | "PROFESSIONAL" | undefined>(
    undefined
  );

  function handleNavigate() {
    router.push(type === "CUSTOMER" ? "/cadastro" : "/cadastro/profissional");
  }

  return (
    <div>
      <div className="flex flex-col gap-2 mt-3">
        <Button
          variant="secondary"
          data-select={type === "CUSTOMER"}
          onClick={() => setType("CUSTOMER")}
          className="h-full justify-start gap-4 py-3 border border-transparent hover:border-app-gray-200 data-[select=true]:border-app-gray-200"
        >
          <div className="flex justify-center items-center size-10 rounded-sm bg-app-green-500">
            <Search className="text-white" />
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-base leading-none">Quero contratar</span>
            <span className="text-app-gray-500 font-normal">Cliente</span>
          </div>
          {type === "CUSTOMER" ? (
            <Check className="size-4 text-app-green-500 ml-auto" />
          ) : (
            <ChevronRight className="size-4 ml-auto" />
          )}
        </Button>
        <Button
          variant="secondary"
          data-select={type === "PROFESSIONAL"}
          onClick={() => setType("PROFESSIONAL")}
          className="h-full justify-start gap-4 py-3 border border-transparent hover:border-app-gray-200 data-[select=true]:border-app-gray-200"
        >
          <div className="flex justify-center items-center size-10 rounded-sm bg-app-blue-500">
            <Handshake className="text-white" />
          </div>
          <div className="flex flex-col items-start gap-1">
            <span className="text-base leading-none">Quero ser contratado</span>
            <span className="text-app-gray-500 font-normal">Profissional</span>
          </div>
          {type === "PROFESSIONAL" ? (
            <Check className="size-4 text-app-green-500 ml-auto" />
          ) : (
            <ChevronRight className="size-4 ml-auto" />
          )}
        </Button>
      </div>
      <Button
        disabled={type === undefined}
        onClick={handleNavigate}
        className="w-full mt-5"
      >
        Continuar
      </Button>
    </div>
  );
}
