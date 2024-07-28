import Link from "next/link";

import { Separator } from "./ui/separator";
import { SignInForm } from "./sign-in-form";

export function SignIn() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-2xl mb-6">
        Estamos felizes em ter você aqui
      </h1>
      <h2 className="font-medium">Acessar minha conta</h2>
      <SignInForm />

      <Separator className="w-full h-px bg-app-gray-200 mt-5 mb-6" />
      <p className="text-sm text-center text-app-gray-500">
        Ainda não tem uma conta?{" "}
        <Link
          href="/cadastro/tipo-de-conta"
          className="text-app-blue-400 hover:underline"
        >
          Crie uma agora
        </Link>
      </p>
    </div>
  );
}
