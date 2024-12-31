import Link from "next/link";

import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ForThoseWhoWantToHire } from "./for-those-who-want-to-hire";
import { ForThoseWhoWantToProvideServices } from "./for-those-who-want-to-provide-services";

export function HowItWorks() {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 mt-8">
      <Button variant="link" className="w-fit px-0" asChild>
        <Link href="/" className="mb-4 px-0">
          <ArrowLeft className="size-4" />
          Voltar
        </Link>
      </Button>

      <ForThoseWhoWantToHire />
      <Separator className="my-12" />
      <ForThoseWhoWantToProvideServices />
    </section>
  );
}
