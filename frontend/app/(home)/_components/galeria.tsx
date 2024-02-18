import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

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
            <CarouselItem className="grid grid-cols-2 gap-4">
              <div className="w-full h-[300px] relative">
                <Image
                  src="/corte-image5.jpg"
                  alt="corte de cabelo"
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                  className="rounded-[10px]"
                />
              </div>
              <div className="w-full h-[300px] relative">
                <Image
                  src="/corte-image6.jpg"
                  alt="corte de cabelo"
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                  className="rounded-[10px]"
                />
              </div>
            </CarouselItem>
            <CarouselItem className="grid grid-cols-2 gap-4">
              <div className="w-full h-[300px] relative">
                <Image
                  src="/corte-image7.jpg"
                  alt="corte de cabelo"
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                  className="rounded-[10px]"
                />
              </div>
              <div className="w-full h-[300px] relative">
                <Image
                  src="/corte-image4.jpg"
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
        <Link
          href="/galeria"
          target="_blank"
          className="bg-blue w-fit text-white font-medium p-2 rounded-[10px] hover:bg-blue/60 duration-150"
        >
          Ver mais fotos
        </Link>
      </div>
    </section>
  );
};

export default GaleriaFotos;
