import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import ProgramsSection from "@/components/ProgramsSection";
import AboutSection from "@/components/AboutSection";
import InstructorsSection from "@/components/InstructorsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BreathingCircle from "@/components/BreathingCircle";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <PillarsSection />
    <ProgramsSection />
    <AboutSection />
    <InstructorsSection />
    <GallerySection />
    <TestimonialsSection />
    <BreathingCircle />
    <BookingSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
