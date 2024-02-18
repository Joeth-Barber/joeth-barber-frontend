import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="inicio" className="py-[6rem]">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col space-y-4">
            <h1 className="text-white font-bold text-[64px] leading-[90%]">
              <strong className="text-blue drop-shadow-lg">
                Realce sua beleza
              </strong>{" "}
              com nossa ajuda
            </h1>
            <p className="text-white/50">
              Selecione um serviço e agende um horário
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full h-[240px] relative">
              <Image
                src="/joeth_image.png"
                alt="corte de cabelo"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-[10px]"
              />
            </div>
            <div className="w-full h-[240px] relative">
              <Image
                src="/joeth_image.png"
                alt="corte de cabelo"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-[10px]"
              />
            </div>
          </div>
          <Link
            href="#reserva"
            className="bg-blue w-fit text-white font-medium p-2 rounded-[10px] hover:bg-blue/60 duration-150"
          >
            Reservar horário
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
