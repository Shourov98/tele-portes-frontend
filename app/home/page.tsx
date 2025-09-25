import Footer from "@/components/footer/Footer";
import AfterHeroPattern from "@/components/homePage/AfterheroPattern";
import FaqSection from "@/components/homePage/FAQSection/FaqSection";
import FeedbackSection from "@/components/homePage/feedback/Feedback";
import TransportHero from "@/components/homePage/hero/hero";
import Navbar from "@/components/homePage/navbar/NavbarBeforeLogin";
import WhatsAppButton from "@/components/homePage/navbar/topNav";
import ServicesSection from "@/components/homePage/services/services";


const Home = () => {
  return (
    <div className="m-0 p-0">
      <WhatsAppButton number="689296744" />
      <div className="p-0 m-0 w-full"><Navbar /></div>
      <div className="w-full "><TransportHero start="Ready for your Next"middle="Transport" end=""/></div>
      <div className="bg-[#FFCF00]">
        <AfterHeroPattern />
      </div>
      <ServicesSection/>
      <FeedbackSection/>
      <FaqSection/>
      <Footer/>
    </div>
  );
};

export default Home;


