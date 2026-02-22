import Image from "next/image";
import HeroSection from "../../components/Hero";
import AboutSection from "../../components/About";
import ServicesSection from "../../components/Services";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
  <div>
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <ServicesSection/>
    </div>
  );
}
