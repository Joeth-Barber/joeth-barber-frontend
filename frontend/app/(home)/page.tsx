import Header from "../_components/header/header";
import GaleriaFotos from "./_components/galeria";
import HeroSection from "./_components/hero";
import Services from "./_components/services";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <GaleriaFotos />
    </div>
  );
};

export default Home;
