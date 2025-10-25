import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import EstimateForm from "@/components/EstimateForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ProcessSteps from "@/components/ProcessSteps";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <div className="py-16 bg-gradient-to-b from-background to-muted/20">
          <ServicesGrid />
        </div>
        <ProcessSteps />
        <div className="py-16 bg-background">
          <EstimateForm />
        </div>
        <div className="py-16 bg-muted/10">
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;