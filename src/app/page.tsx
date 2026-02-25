import HeroSection from "../../components/Hero";
import AboutSection from "../../components/About";
import ServicesSection from "../../components/Services";
import Navbar from "../../components/Navbar";
import WhyChooseUs from "../../components/Whychooseus";
import Footer from "../../components/Footer";
import ContactSection from "../../components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <ContactSection/>
      <Footer />
    </div>
  );
}
