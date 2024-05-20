import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { RequestServiceDialog } from "./request-service-dialog";

export function ProfessionalCard() {
  return (
    <Card className="shadow-md shadow-app-gray-200/40 hover:shadow-app-gray-200/60 overflow-hidden">
      <CardHeader className="flex flex-row items-center gap-2">
        <div className="relative">
          <Avatar className="w-16 h-16 border-2">
            <AvatarImage
              src="https://github.com/wellingtonrodriguesbr.png"
              alt="Foto de Wellington Rodrigues"
            />
            <AvatarFallback>WR</AvatarFallback>
          </Avatar>
          {/* <WorkerCardRatings /> */}
        </div>
        <div>
          <CardTitle className="text-xl text-app-black">
            Wellington Rodrigues
          </CardTitle>
          <CardDescription className="text-xs text-app-gray-600">
            Desenvolvedor de software
          </CardDescription>

          <Link
            href="/profissional/wellingtonrodriguesbr"
            className="flex items-center text-app-blue-400 hover:text-app-blue-500 text-xs mt-2 group"
          >
            Ver perfil completo
            <ChevronRight className="text-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {/* <WorkerCardInformation /> */}
      </CardContent>
      <CardFooter>
        <RequestServiceDialog />
      </CardFooter>
    </Card>
  );
}
