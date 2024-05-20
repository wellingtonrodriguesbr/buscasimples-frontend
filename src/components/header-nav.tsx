import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { UserLocationDialog } from "./user-location-dialog";
import { ChevronRight, User } from "lucide-react";
import { WaitingList } from "./waiting-list";
import { NavMenu } from "./nav-menu";

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
        <UserLocationDialog />
        <Separator className="hidden md:block w-px h-6" />
        <div className="hidden md:block">
          <WaitingList />
        </div>
        {/* <Button className="gap-2" variant="ghost">
          <User className="size-4" />
          Entrar
        </Button>
        <Button className="gap-2">
          Criar uma conta
          <ChevronRight className="size-4" />
        </Button> */}
      </div>
    </nav>
  );
}
