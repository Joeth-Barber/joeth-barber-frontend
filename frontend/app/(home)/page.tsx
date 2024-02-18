import ClientesSection from "./_components/clientes";
import GaleriaFotos from "./_components/galeria";
import HeroSection from "./_components/hero";
import ReservaSection from "./_components/reserva";
import Services from "./_components/services";

const Home = () => {
  return (
    <div className="bg-dark">
      <HeroSection />
      <Services />
      <GaleriaFotos />
      <ClientesSection />
      <ReservaSection />
    </div>
  );
};

export default Home;
