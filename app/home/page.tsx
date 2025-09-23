import AfterHeroPattern from "@/components/homePage/AfterheroPattern";
import TransportHero from "@/components/homePage/hero/hero";
import Navbar from "@/components/homePage/navbar/NavbarBeforeLogin";
import WhatsAppButton from "@/components/homePage/navbar/topNav";


const Home = () => {
  return (
    <div className="">
      <WhatsAppButton number="689296744" />
      <div><Navbar /></div>
      <div className="w-full "><TransportHero /></div>
      <div className="bg-[#FFCF00]">
        <AfterHeroPattern />
      </div>
    </div>
  );
};

export default Home;


