"use client";

import { useAuth } from "@/hooks/use-auth";
import { CircleCheckBig, Loader2, X } from "lucide-react";

export function Auth() {
  const { status, isAuthPending } = useAuth();

  return (
    <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="w-full px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        {!isAuthPending && status === "success" ? (
          <>
            <CircleCheckBig className="size-8 md:size-10 text-app-blue-400" />
            <h1 className="text-base md:text-xl text-center">
              Validado com sucesso, estamos te redirecionando..
            </h1>
          </>
        ) : null}

        {isAuthPending && status === "pending" ? (
          <>
            <Loader2 className="size-8 md:size-10 animate-spin text-app-blue-400" />
            <h1 className="text-base md:text-xl text-center">
              Validando seu código de acesso...
            </h1>
          </>
        ) : null}

        {!isAuthPending && status === "error" ? (
          <>
            <X className="size-8 md:size-10 text-rose-400" />
            <h1 className="text-base md:text-xl">Código inválido</h1>
          </>
        ) : null}
      </div>
    </section>
  );
}
