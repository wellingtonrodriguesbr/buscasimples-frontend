import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface BannerProps {
  item: {
    sector: string;
  };
}

export function Banner({ item }: BannerProps) {
  return (
    <Card className="bg-app-blue-400 overflow-hidden">
      <CardContent className="h-48 md:h-72 flex items-center justify-center p-6 bg-cover-banner bg-cover bg-center">
        <CardHeader className="">
          <CardTitle className="text-white">{item.sector}</CardTitle>
        </CardHeader>
      </CardContent>
    </Card>
  );
}
