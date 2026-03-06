import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FacetsSection from "@/components/FacetsSection";
import AgendaSection from "@/components/AgendaSection";
import ImpactSection from "@/components/ImpactSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FacetsSection />
      <AgendaSection />
      <ImpactSection />
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
