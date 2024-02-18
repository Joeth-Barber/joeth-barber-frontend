import { Card, CardContent } from "@/app/_components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";
import Image from "next/image";

const GaleriaFotos = () => {
  return (
    <section
      id="galeria"
      className="py-[6rem] border-b border-solid border-gray"
    >
      <div className="container mx-auto flex flex-col space-y-[2rem]">
        <h2 className="tracking-[.35rem] text-white/50 text-[1rem] font-medium uppercase">
          galeria de fotos
        </h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="w-full h-[300px] relative">
                <Image
                  src="/joeth_image.png"
                  alt="corte de cabelo"
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                  className="rounded-[10px]"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full h-[300px] relative">
                <Image
                  src="/joeth_image.png"
                  alt="corte de cabelo"
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                  className="rounded-[10px]"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full h-[300px] relative">
                <Image
                  src="/joeth_image.png"
                  alt="corte de cabelo"
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                  className="rounded-[10px]"
                />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="w-full h-[300px] relative">
                <Image
                  src="/joeth_image.png"
                  alt="corte de cabelo"
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                  className="rounded-[10px]"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default GaleriaFotos;
