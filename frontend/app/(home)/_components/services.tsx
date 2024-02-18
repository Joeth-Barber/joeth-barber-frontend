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
              <Card className="p-4 rounded-[10px] bg-dark border border-solid border-gray">
                <CardContent className="flex flex-col items-center space-y-4">
                  <h3 className="text-white font-medium text-[1rem] capitalize">
                    corte de cabelo
                  </h3>
                  <div className="p-2 w-[60px] h-[60px] flex items-center justify-center rounded-full bg-blue">
                    <Image
                      src="/haircut-icon.svg"
                      width={34}
                      height={34}
                      loading="lazy"
                      alt="Corte de cabelo"
                    />
                  </div>
                  <p className="w-[70%] text-white/70 text-center text-[1rem]">
                    Estilo personalizado com as últimas tendências.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="p-4 rounded-[10px] bg-dark border border-solid border-gray">
                <CardContent className="flex flex-col items-center space-y-4">
                  <h3 className="text-white font-medium text-[1rem] capitalize">
                    barba
                  </h3>
                  <div className="p-2 w-[60px] h-[60px] flex items-center justify-center rounded-full bg-blue">
                    <Image
                      src="/beard-icon.svg"
                      width={34}
                      height={34}
                      loading="lazy"
                      alt="Corte de cabelo"
                    />
                  </div>
                  <p className="w-[70%] text-white/70 text-center text-[1rem]">
                    Modelagem completa para destacar sua masculinidade.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="p-4 rounded-[10px] bg-dark border border-solid border-gray">
                <CardContent className="flex flex-col items-center space-y-4">
                  <h3 className="text-white font-medium text-[1rem] capitalize">
                    sobrancelha
                  </h3>
                  <div className="p-2 w-[60px] h-[60px] flex items-center justify-center rounded-full bg-blue">
                    <Image
                      src="/eyebrow.svg"
                      width={34}
                      height={34}
                      loading="lazy"
                      alt="Corte de cabelo"
                    />
                  </div>
                  <p className="w-[70%] text-white/70 text-center text-[1rem]">
                    Expressão acentuada com modelagem precisa.
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
