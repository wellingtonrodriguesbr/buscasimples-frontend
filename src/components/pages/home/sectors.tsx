import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { LayoutGrid } from "lucide-react";

export function Sectors() {
  return (
    <section className="mt-12 mx-auto w-full xl:max-w-screen-xl xl:px-4 overflow-x-hidden">
      <Carousel
        opts={{
          dragFree: true,
          align: "start",
        }}
        className="w-full mt-4 md:mt-8"
      >
        <CarouselContent className="w-fulllex justify-start xl:justify-center ml-4 xl:ml-0 gap-2 md:gap-3">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="basis-auto w-fit pl-0">
              <Link
                href="/setores"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="flex items-center justify-center size-24 rounded-md bg-app-blue-400/5 group-hover:bg-app-blue-400 transition-colors"></div>
                <span className="text-xs text-center text-app-gray-700">
                  Categoria {index + 1}
                </span>
              </Link>
            </CarouselItem>
          ))}
          <CarouselItem className="basis-auto pl-0 mr-4 xl:mr-0 w-fit">
            <Link
              href="/setores"
              className="flex flex-col items-center gap-2 group"
            >
              <div className="flex items-center justify-center size-24 rounded-lg bg-app-blue-400/5 group-hover:bg-app-blue-400 transition-colors">
                <LayoutGrid className="size-10 text-app-blue-400 group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs text-center text-app-gray-700">
                Ver todas
              </span>
            </Link>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
