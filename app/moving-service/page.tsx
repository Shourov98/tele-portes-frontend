import Footer from "@/components/footer/Footer"
import FaqSection from "@/components/homePage/FAQSection/FaqSection"
import FeedbackSection from "@/components/homePage/feedback/Feedback"
import TransportHero from "@/components/homePage/hero/hero"
import Navbar from "@/components/homePage/navbar/NavbarBeforeLogin"
import WhatsAppButton from "@/components/homePage/navbar/topNav"
import ServiceCard from "@/components/service/ServiceHero"

const Moving_Service = () => {
  return (
    <div>
    <WhatsAppButton number="689296744"/>
    <Navbar/>
    <TransportHero start="Your moves has never been so easy and"middle="low cost" end="! Hire your move now"  />

<ServiceCard
      image="/movingService.svg"
      title="Our Furniture & Home Appliances Services"
      description={`We make your move simple and stress-free. Our moving service covers all your household items — and if you need more, you can easily add them through the “Explore more items here” option. If something isn’t listed, you can enter custom items too.

We also offer extra services to make your move even smoother, such as:
• Professional packing
• Box packaging
• Moving lift for heavy items
• Assembly & disassembly of furniture

All payments are made securely in advance. If your plans change, you can request a refund quickly and get your money back without hassle. With us, you get flexibility, transparency, and peace of mind every step of the way.`}
    />
     <FeedbackSection/>
          <FaqSection/>

    <Footer/>

    </div>
  )
}

export default Moving_Service