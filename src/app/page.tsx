import HeroSection from "../../components/Hero";
import AboutSection from "../../components/About";
import ServicesSection from "../../components/Services";
import Navbar from "../../components/Navbar";
import WhyChooseUs from "../../components/Whychooseus";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
