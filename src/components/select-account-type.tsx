import Link from "next/link";

import { Separator } from "./ui/separator";
import { SelectAccountTypeOptions } from "./select-account-type-options";

export function SelectAccountType() {
  return (
    <>
      <SelectAccountTypeOptions />
      <Separator className="w-full h-px bg-app-gray-200 mt-5 mb-6" />
      <p className="text-sm text-center text-app-gray-500">
        Já tem uma conta?{" "}
        <Link href="/entrar" className="text-app-blue-400 hover:underline">
          Entre agora
        </Link>
      </p>
    </>
  );
}
