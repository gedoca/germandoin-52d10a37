import SiteNavbar from "@/components/SiteNavbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FacetsSection from "@/components/FacetsSection";
import AgendaSection from "@/components/AgendaSection";
import RetreatsSection from "@/components/RetreatsSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <>
      <SiteNavbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FacetsSection />
        <AgendaSection />
        <RetreatsSection />
        <ImpactSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
