import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import EstimateForm from "@/components/EstimateForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <ServicesGrid />
        <EstimateForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
