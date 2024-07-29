import Link from "next/link";

import { ChevronRight } from "lucide-react";

export function MyData() {
  return (
    <section className="w-full max-w-lg mx-auto px-4 mt-12">
      <h1 className="font-semibold text-3xl">Meus dados</h1>
      <ul className="flex flex-col mt-6">
        <li className="border-b">
          <Link
            href="/"
            className="w-full flex items-center justify-between py-6 group"
          >
            <div className="flex flex-col gap-1">
              <span className="text-lg font-medium text-app-gray-700">
                Minhas informações
              </span>
              <span className="text-sm text-app-gray-500">
                Nome, e-mail e celular
              </span>
            </div>
            <ChevronRight className="size-4 ml-auto text-app-blue-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </li>
      </ul>
    </section>
  );
}
