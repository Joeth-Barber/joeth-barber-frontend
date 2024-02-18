import ClientesSection from "./_components/clientes";
import GaleriaFotos from "./_components/galeria";
import HeroSection from "./_components/hero";
import Services from "./_components/services";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <GaleriaFotos />
      <ClientesSection />
    </div>
  );
};

export default Home;
