import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Truck, Clock } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl space-y-6">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-lg rounded-full py-1 px-3 border border-white/20">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-white">Premium Quality Furniture</span>
          </div>
          
          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Living Room
              <span className="block text-blue-400">Essentials</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-semibold text-white/90">
              Comfort Redefined.
            </p>
          </div>
          
          {/* Description */}
          <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
            Durable metal springs in the seat give the sofa a springy comfort, allowing you to sit, relax and enjoy it for many years. Experience unparalleled quality and craftsmanship.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-3">
            <Button 
              variant="premium" 
              size="lg" 
              className="group text-sm font-bold rounded-lg px-6 py-5 shadow-lg hover:shadow-xl transition-all bg-blue-600 hover:bg-blue-700 text-white"
              asChild
            >
              <Link to="/shop">
                Shop Now
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group text-sm font-bold rounded-lg px-6 py-5 border-2 border-white bg-white/10 text-white hover:bg-white hover:text-gray-900 transition-all"
              asChild
            >
              <Link to="/gallery">
                View Gallery
              </Link>
            </Button>
          </div>
          
          {/* Features Stats */}
          <div className="grid grid-cols-3 gap-2 pt-5">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/10 text-center">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span className="font-semibold text-white text-xs">10-Year</span>
                <p className="text-[9px] text-white/80">Warranty</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/10 text-center">
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-blue-400" />
                <span className="font-semibold text-white text-xs">Free</span>
                <p className="text-[9px] text-white/80">Delivery</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/10 text-center">
              <div className="flex flex-col items-center gap-1">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="font-semibold text-white text-xs">Quick</span>
                <p className="text-[9px] text-white/80">Assembly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center p-1">
          <div className="w-1 h-1 bg-white rounded-full mt-1 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;