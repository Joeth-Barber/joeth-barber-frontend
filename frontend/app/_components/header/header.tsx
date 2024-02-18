import {
  Calendar,
  Camera,
  Home,
  LogIn,
  MenuIcon,
  Scissors,
  UserPlus,
  X,
} from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed z-50 shadow bg-second_dark w-full py-[1rem]">
      <div className="flex items-center justify-between container mx-auto">
        <Link href="/">
          <h1 className="text-white font-bold text-[1.5rem]">Joeth</h1>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-1 rounded-[10px] bg-dark">
              <MenuIcon className="text-white" />
            </button>
          </SheetTrigger>

          <SheetContent className="bg-dark">
            <SheetHeader className="border-b border-solid border-second_dark py-[10px] flex-row items-center justify-between">
              <span className="text-white font-medium text-[20px]">
                Olá, faça login.
              </span>
              <SheetClose>
                <X className="text-white rounded-[4px]" size={20} />
              </SheetClose>
            </SheetHeader>

            <nav className="flex flex-col py-[10px]">
              <ul className="space-y-4">
                <li>
                  <Link
                    className="bg-second_dark p-2 rounded-[10px] flex items-center gap-2 text-white text-[1rem] hover:bg-gray ease-in duration-150"
                    href="#inicio"
                  >
                    <Home size={18} />
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-second_dark p-2 rounded-[10px] flex items-center gap-2 text-white text-[1rem] hover:bg-gray ease-in duration-150"
                    href="#servicos"
                  >
                    <Scissors size={18} />
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-second_dark p-2 rounded-[10px] flex items-center gap-2 text-white text-[1rem] hover:bg-gray ease-in duration-150"
                    href="#galeria"
                  >
                    <Camera size={18} />
                    Galeria de fotos
                  </Link>
                </li>
                <li>
                  <Link
                    className="bg-blue p-2 rounded-[10px] flex items-center gap-2 text-white text-[1rem] hover:bg-blue/60 ease-in duration-150"
                    href="#reserva"
                  >
                    <Calendar size={18} />
                    Reservar um serviço
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col space-y-4 my-[20px] py-[20px] border-t border-second_dark">
                <Link
                  className="bg-second_dark p-2 rounded-[10px] flex items-center gap-2 text-white text-[1rem] hover:bg-gray ease-in duration-150"
                  href="/login"
                >
                  <LogIn size={18} />
                  Entrar
                </Link>
                <Link
                  className="bg-second_dark p-2 rounded-[10px] flex items-center gap-2 text-white text-[1rem] hover:bg-gray ease-in duration-150"
                  href="/register"
                >
                  <UserPlus size={18} />
                  Cadastre-se
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
