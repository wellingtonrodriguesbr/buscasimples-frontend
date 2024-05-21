import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { Separator } from "./ui/separator";
import { WaitingList } from "./waiting-list";
import { NavMenu } from "./nav-menu";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

const UserLocation = dynamic(() => import("./user-location-dialog"), {
  loading: () => {
    return (
      <Button variant="secondary" className="gap-2">
        <Loader2 className="size-4 animate-spin" />
        Carregando...
      </Button>
    );
  },
  ssr: false,
});

export function HeaderNav() {
  return (
    <nav className="w-full max-w-screen-2xl mx-auto px-4 flex items-center justify-between">
      <div className="flex items-center gap-24">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Busca Simples"
            className="w-28"
            width={144}
            height={144}
            quality={100}
          />
        </Link>
        <NavMenu />
      </div>

      <div className="flex items-center gap-3">
        <UserLocation />
        <Separator className="hidden md:block w-px h-6" />
        <div className="hidden md:block">
          <WaitingList />
        </div>
      </div>
    </nav>
  );
}
