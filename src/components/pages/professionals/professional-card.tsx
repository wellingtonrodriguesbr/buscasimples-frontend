import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProfessionalProfileDialog } from "./professional-profile-dialog";
import { ProfessionalInformation } from "./professional-information";

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

          <ProfessionalProfileDialog />
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <ProfessionalInformation />
      </CardContent>
    </Card>
  );
}
