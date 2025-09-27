import Footer from "@/components/footer/Footer"
import FaqSection from "@/components/homePage/FAQSection/FaqSection"
import FeedbackSection from "@/components/homePage/feedback/Feedback"
import TransportHero from "@/components/homePage/hero/hero"
import Navbar from "@/components/homePage/navbar/NavbarBeforeLogin"
import WhatsAppButton from "@/components/homePage/navbar/topNav"
import ServiceCard from "@/components/service/ServiceHero"

const Storage_Service = () => {
  return (
    <div>
    <WhatsAppButton number="689296744"/>
    <Navbar/>
    <TransportHero start="Flexibale,Safe, and Hassle_Free Storage"middle="Solutions"   />

<ServiceCard
      image="/movingService.svg"
      title="Our Storage Services"
      description={`Running out of space? No worries-we've got you covered!.
        
         We provide secure warehouse storage for your belongings,whether you're moving, renovating, or simply need extra room.You can safely store your items with us for up to 24 months maximum.

         To make things even easier. We'll pick up your items, transport them to our warehouse,and store them safely for you.

To make things even easier,We also offer helpful extra services such as:
• Professional packing
• Box packaging
• Furniture assembly & disassembly


With our storage service,you get peace of mind knowing your items are kept safe,organized, and accessible when you need them.`}
    />
     <FeedbackSection/>
          <FaqSection/>

    <Footer/>

    </div>
  )
}

export default Storage_Service