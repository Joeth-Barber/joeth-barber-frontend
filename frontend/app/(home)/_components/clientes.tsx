import { Card, CardContent } from "@/app/_components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";
import Image from "next/image";

const ClientesSection = () => {
  return (
    <section id="clientes" className="py-[6rem]">
      <div className="container mx-auto flex flex-col items-center space-y-[2rem]">
        <h2 className="tracking-[.35rem] text-white/50 text-[1rem] font-medium uppercase">
          nossos clientes
        </h2>
        <Carousel className="container">
          <CarouselContent>
            <CarouselItem>
              <Card className="p-4 rounded-[10px] bg-second_dark border-none">
                <CardContent className="flex flex-col items-center space-y-4">
                  <div className="relative p-2 w-[60px] h-[60px] flex items-center justify-center rounded-full">
                    <Image
                      src="/mikael_image.png"
                      fill
                      loading="lazy"
                      className="rounded-full"
                      alt="Corte de cabelo"
                    />
                  </div>
                  <h3 className="text-white font-medium text-[1rem] capitalize">
                    mikael nascimento
                  </h3>
                  <p className="w-full text-white/70 text-center text-[1rem]">
                    “Fui recebido com um caloroso sorriso e uma atmosfera
                    acolhedora. A experiência foi simplesmente excepcional.”
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

export default ClientesSection;
