import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Truck, Clock } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden" aria-labelledby="hero-heading" role="banner">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Modern interior design showcasing elegant furniture and decor"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl space-y-6">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-lg rounded-full py-1 px-3 border border-white/20" role="status" aria-label="Premium Quality Rating">
            <div className="flex items-center" aria-label="5 star rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              ))}
            </div>
            <span className="text-xs font-semibold text-white">Premium Quality Furniture</span>
          </div>
          
          {/* Main Headline */}
          <header className="space-y-3">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold text-white font-playfair">
              Transform Your <span className="text-secondary">Space</span> with Smart & Stylish Interiors
            </h1>
          </header>
          
          {/* Description */}
          <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
            From elegant modular kitchens to custom wardrobes and space-saving furniture, Livora brings you modern designs crafted with precision, technology, and style.
          </p>
          
          {/* CTA Buttons */}
          <nav className="flex flex-col sm:flex-row gap-3 pt-3" aria-label="Hero navigation">
            <Button 
              variant="premium" 
              size="lg" 
              className="group text-sm font-bold rounded-lg px-6 py-5 shadow-lg hover:shadow-xl transition-all bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <Link to="/services" aria-describedby="services-description">
                Our Services
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
            <span id="services-description" className="sr-only">Explore our complete range of interior design services</span>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group text-sm font-bold rounded-lg px-6 py-5 shadow-lg hover:shadow-xl transition-all border-white text-black hover:bg-white/10"
              asChild
            >
              <Link to="/contact" aria-describedby="consultation-description">
                Get Free Consultation
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Button>
            <span id="consultation-description" className="sr-only">Schedule a free consultation with our design experts</span>
          </nav>
          
          {/* Features Stats */}
          <dl className="grid grid-cols-3 gap-2 pt-5" role="list" aria-label="Key features and benefits">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/10 text-center" role="listitem">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <dt className="font-semibold text-white text-xs">10-Year</dt>
                <dd className="text-[9px] text-white/80">Warranty</dd>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/10 text-center" role="listitem">
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <dt className="font-semibold text-white text-xs">Free</dt>
                <dd className="text-[9px] text-white/80">Delivery</dd>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/10 text-center" role="listitem">
              <div className="flex flex-col items-center gap-1">
                <Clock className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <dt className="font-semibold text-white text-xs">7-Day</dt>
                <dd className="text-[9px] text-white/80">Installation</dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;