import Link from "next/link";

import { Separator } from "./ui/separator";
import { SignInForm } from "./sign-in-form";

export function SignIn() {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <h1 className="font-medium">Acessar minha conta</h1>
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
