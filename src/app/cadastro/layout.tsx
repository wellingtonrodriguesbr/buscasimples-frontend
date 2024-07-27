import Image from "next/image";
import Link from "next/link";

import { FooterSocialMedia } from "@/components/footer-social-media";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="h-screen w-full grid grid-cols-[456px_auto]">
      <article className="h-full flex flex-col bg-white p-12">
        <header className="mb-12">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Busca Simples"
              width={150}
              height={150}
            />
          </Link>
        </header>
        <h1 className="font-semibold text-2xl">Faça seu cadastro é simples.</h1>
        {children}

        <footer className="flex flex-1 items-end justify-between">
          <FooterSocialMedia />
          <span className="text-app-gray-500 text-xs">
            © Busca Simples 2024
          </span>
        </footer>
      </article>
      <div className="h-full bg-app-gray-200"></div>
    </section>
  );
}
