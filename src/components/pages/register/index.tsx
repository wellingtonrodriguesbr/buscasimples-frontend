import Link from "next/link";

import { RegisterForm } from "./register-form";
import { Separator } from "@/components/ui/separator";

export function Register() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-semibold text-2xl mb-6">
        Faça seu cadastro, é simples.
      </h1>
      <h2 className="font-medium">Dados de cadastro</h2>
      <RegisterForm />
      <p className="text-center text-app-gray-500 text-sm mt-5">
        Ao criar uma conta, você concorda com os nossos{" "}
        <Link href="" className="underline">
          Termos e condições de uso
        </Link>
      </p>
      <Separator className="w-full h-px bg-app-gray-200 mt-5 mb-6" />
      <p className="text-sm text-center text-app-gray-500">
        Já tem uma conta?{" "}
        <Link href="/entrar" className="text-app-blue-400 hover:underline">
          Entre agora
        </Link>
      </p>
    </div>
  );
}
