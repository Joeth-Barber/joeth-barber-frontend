import { Card, CardContent } from "@/app/_components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";
import Image from "next/image";

const Services = () => {
  return (
    <section id="servicos" className="w-full bg-second_dark py-[6rem]">
      <div className="container mx-auto flex flex-col space-y-[2rem]">
        <h2 className="tracking-[.35rem] text-white/50 text-[1rem] font-medium uppercase">
          SERVIÇOS
        </h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Card className="py-4 rounded-[10px] bg-dark border border-solid border-gray">
                <CardContent className="flex flex-col space-y-4">
                  <span className="text-white/50 text-[1rem]">
                    R$ <strong className="font-normal text-[1.5rem]">30</strong>
                  </span>
                  <h3 className="text-white font-medium text-[1.2rem] capitalize">
                    corte simples
                  </h3>
                  <p className="w-full text-white/50 text-[1rem]">
                    Estilo personalizado com as últimas tendências.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="py-4 rounded-[10px] bg-dark border border-solid border-gray">
                <CardContent className="flex flex-col space-y-4">
                  <span className="text-white/50 text-[1rem]">
                    R$ <strong className="font-normal text-[1.5rem]">35</strong>
                  </span>
                  <h3 className="text-white font-medium text-[1.2rem] capitalize">
                    corte navalhado
                  </h3>
                  <p className="w-full text-white/50 text-[1rem]">
                    Estilo personalizado com as últimas tendências.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="py-4 rounded-[10px] bg-dark border border-solid border-gray">
                <CardContent className="flex flex-col space-y-4">
                  <span className="text-white/50 text-[1rem]">
                    R$ <strong className="font-normal text-[1.5rem]">20</strong>
                  </span>
                  <h3 className="text-white font-medium text-[1.2rem] capitalize">
                    barba
                  </h3>
                  <p className="w-full text-white/50 text-[1rem]">
                    Estilo personalizado com as últimas tendências.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="py-4 rounded-[10px] bg-dark border border-solid border-gray">
                <CardContent className="flex flex-col space-y-4">
                  <span className="text-white/50 text-[1rem]">
                    R$ <strong className="font-normal text-[1.5rem]">10</strong>
                  </span>
                  <h3 className="text-white font-medium text-[1.2rem] capitalize">
                    sobrancelha
                  </h3>
                  <p className="w-full text-white/50 text-[1rem]">
                    Estilo personalizado com as últimas tendências.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="py-4 rounded-[10px] bg-dark border border-solid border-gray">
                <CardContent className="flex flex-col space-y-4">
                  <span className="text-white/50 text-[1rem]">
                    R$ <strong className="font-normal text-[1.5rem]">50</strong>
                  </span>
                  <h3 className="text-white font-medium text-[1.2rem] capitalize">
                    progressiva
                  </h3>
                  <p className="w-full text-white/50 text-[1rem]">
                    Estilo personalizado com as últimas tendências.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="py-4 rounded-[10px] bg-dark border border-solid border-gray">
                <CardContent className="flex flex-col space-y-4">
                  <span className="text-white/50 text-[1rem]">
                    Preço a combinar
                  </span>
                  <h3 className="text-white font-medium text-[18px] capitalize">
                    luzes ou platinado
                  </h3>
                  <p className="w-full text-white/50 text-[1rem]">
                    Estilo personalizado com as últimas tendências.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Services;
