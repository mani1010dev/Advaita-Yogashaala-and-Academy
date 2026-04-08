import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import ProgramsSection from "@/components/ProgramsSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import InstagramSection from "@/components/InstagramSection";
import BreathingCircle from "@/components/BreathingCircle";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <PillarsSection />
    <ProgramsSection />
    <AboutSection />
    <GallerySection />
    <InstagramSection />
    <BreathingCircle />
    <BookingSection />
    <ContactSection />
    <FloatingWhatsApp />
    <Footer />
  </div>
);

export default Index;
