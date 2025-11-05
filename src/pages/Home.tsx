import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ProcessSteps from "@/components/ProcessSteps";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <div className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-secondary/3 -z-10"></div>
          <ServicesGrid />
        </div>
        <ProcessSteps />
        <div className="py-16 bg-muted/10">
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;