import Layout from "@/components/Layout";
import ContactSection from "@/components/ContactSection";
import Aviso from "@/components/Aviso";

const Contacto = () => {
  return (
    <Layout>
      <div className="pt-16">
        <ContactSection />
        <div className="px-6 sm:px-12 lg:px-16 pb-16">
          <Aviso />
        </div>
      </div>
    </Layout>
  );
};

export default Contacto;
