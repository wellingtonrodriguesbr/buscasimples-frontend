import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";

import { ReactQueryProvider } from "@/providers/react-query-provider";
import { MenuMobile } from "@/components/menu-mobile";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import "./globals.css";

const display = Urbanist({ subsets: ["latin"], variable: "--font-display" });
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Busca Simples | Conectando quem demanda com quem resolve",
  description:
    "Somos uma plataforma de marketplace de prestadores de serviços. Acreditamos que a tecnologia deva impulsionar todos os profissionais, de todas as áreas, ajudando-os a encontrar clientes que demandam de seus serviços e também ajudar clientes a solucionarem seus problemas, de um jeito simples, rápido e eficaz.",
  metadataBase: new URL("https://buscasimples.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "min-h-screen bg-app-gray-50 text-app-black font-sans antialiased",
          sans.variable,
          display.variable
        )}
      >
        <ReactQueryProvider>
          {children}
          <MenuMobile />
          <Toaster richColors position="bottom-center" />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
