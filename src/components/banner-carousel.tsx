"use client";

import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Banner } from "./banner";

import Autoplay from "embla-carousel-autoplay";
import { useUserAuthenticate } from "@/hooks/use-user-authenticate";
import { WelcomeMessage } from "./welcome-message";

export function BannerCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const { authenticate } = useUserAuthenticate();

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      data-authenticate={authenticate}
      className="w-full max-w-screen-xl mx-auto px-4 mt-24 data-[authenticate=true]:mt-12"
    >
      {authenticate ? <WelcomeMessage /> : null}

      <h2 className="font-medium text-2xl md:text-3xl mb-6">
        O que você está buscando hoje?
      </h2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {categories.map((item, index) => (
            <CarouselItem key={index}>
              <Banner item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-opacity-100 text-app-blue-400" />
        <CarouselNext className="bg-opacity-100 text-app-blue-400" />
      </Carousel>

      <div className="flex items-center justify-center gap-2 py-2 text-center text-sm">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            data-current={index + 1 === current}
            className="w-1 md:w-2 h-1 rounded-full bg-app-gray-200 data-[current=true]:bg-app-blue-400 data-[current=true]:w-6 transition-all"
          ></div>
        ))}
      </div>
    </div>
  );
}

const categories = [
  {
    sector: "Programador",
  },
  {
    sector: "Médico veterinário",
  },
  {
    sector: "Freteiro",
  },
  {
    sector: "Contador",
  },
  {
    sector: "Oftalmologista",
  },
  {
    sector: "Clínico geral",
  },
  {
    sector: "Dentista",
  },
  {
    sector: "Consultor",
  },
  {
    sector: "Diarista",
  },
];
