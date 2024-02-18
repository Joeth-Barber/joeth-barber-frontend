import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full max-h-full bg-dark py-[2rem] border-t border-solid border-gray">
      <div className="container mx-auto flex flex-col space-y-[1rem]">
        <Link href="/" className="w-fit">
          <h1 className="text-white font-bold text-[1.5rem]">Joeth</h1>
        </Link>

        <div className="py-[1rem] flex items-center justify-between">
          <ul className="space-y-1">
            <li>
              <Link
                className="text-white/70 text-[1rem] hover:text-white/50 duration-150"
                href="#inicio"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                className="text-white/70 text-[1rem] hover:text-white/50 duration-150"
                href="#servicos"
              >
                Serviços
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                className="text-white/70 text-[1rem] hover:text-white/50 duration-150"
                href="#galeria"
              >
                Galeria de fotos
              </Link>
            </li>
            <li>
              <Link
                className="text-white/70 text-[1rem] hover:text-white/50 duration-150"
                href="#reserva"
              >
                Reservar um serviço
              </Link>
            </li>
          </ul>
        </div>
        <div className="max-w-full max-h-full flex items-center space-x-4">
          <Link
            href="/"
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-blue hover:bg-blue/60 duration-150"
          >
            <Image src="/whatsapp-icon.svg" width={26} height={26} alt="" />
          </Link>
          <Link
            href="/"
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-blue hover:bg-blue/60 duration-150"
          >
            <Image src="/instagram-icon.svg" width={26} height={26} alt="" />
          </Link>
        </div>
        <span className="text-gray pt-[2rem] text-center">
          Todos os direitos reservados ©2024 Joeth Barber
        </span>
      </div>
    </footer>
  );
};

export default Footer;
