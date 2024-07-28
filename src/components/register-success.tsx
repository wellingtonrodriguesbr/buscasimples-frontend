import { CircleCheckBig } from "lucide-react";

export function RegisterSuccess() {
  return (
    <section className="flex flex-col items-center justify-center">
      <CircleCheckBig className="size-12 text-app-green-500" />
      <h1 className="text-2xl font-semibold mt-6 mb-3">
        Cadastro realizado com sucesso!
      </h1>
      <p className="text-center">
        Enviamos um e-mail para você com o link de acesso a plataforma.
      </p>
    </section>
  );
}
