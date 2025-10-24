import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[var(--hero-gradient)]" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
            Best Prices on Home Interiors. <span className="text-secondary">Guaranteed.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Transform your space with our premium interior design services. From modular kitchens to elegant living spaces, we bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" size="xl" asChild>
              <Link to="/contact">
                Get Free Estimate <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
