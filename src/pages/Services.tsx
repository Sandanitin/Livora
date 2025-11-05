import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Utensils, Bed, BookOpen, Wallpaper, Lightbulb, 
  Home, Bath, Sparkles, CheckCircle2, Tv, Sofa, Table,
  Monitor, CupSoda, DoorClosed, Armchair
} from "lucide-react";

const services = [
  {
    title: "Modular Kitchen",
    icon: Utensils,
    description: "Transform your cooking space with our modern modular kitchen designs. We offer customizable cabinets, premium countertops, and smart storage solutions.",
    features: ["Customizable layouts", "Premium materials", "Smart storage", "Modern appliances"],
    price: "Starting from ₹1,50,000"
  },
  {
    title: "Wardrobes",
    icon: DoorClosed,
    description: "Maximize your storage with elegant wardrobe solutions tailored to your needs. From walk-in closets to sliding wardrobes.",
    features: ["Custom designs", "Space optimization", "Quality hardware", "Variety of finishes"],
    price: "Starting from ₹40,000"
  },
  {
    title: "False Ceiling",
    icon: Home,
    description: "Add elegance and functionality to your spaces with our stunning false ceiling designs.",
    features: ["Modern designs", "Lighting integration", "Sound insulation", "Durable materials"],
    price: "Starting from ₹100/sq.ft"
  },
  {
    title: "Pooja Rooms",
    icon: Sparkles,
    description: "Design a sacred space in your home with our beautifully crafted pooja units.",
    features: ["Traditional & modern", "Custom sizes", "LED lighting", "Quality wood"],
    price: "Starting from ₹30,000"
  },
  {
    title: "Dining Table",
    icon: Table,
    description: "Elevate your dining experience with our elegant dining table designs, perfect for family gatherings. Modern dining table design with clean lines and contemporary wooden dining table for 6 people.",
    features: ["Premium materials", "Custom sizes", "Comfortable seating", "Stylish finishes", "Scandinavian style design"],
    price: "Starting from ₹25,000"
  },
  {
    title: "TV Units",
    icon: Monitor,
    description: "Create a focal point in your living room with our stylish TV units and entertainment centers. Modern TV console with storage compartments and minimalist wall mounted TV unit designs.",
    features: ["Custom design", "Cable management", "Premium finishes", "Space optimization", "LED lighting integration"],
    price: "Starting from ₹15,000"
  },
  {
    title: "Study Tables",
    icon: BookOpen,
    description: "Create the perfect work-from-home setup with ergonomic study tables and functional workspaces.",
    features: ["Ergonomic design", "Cable management", "Storage options", "Custom sizes"],
    price: "Starting from ₹25,000"
  },
  {
    title: "Crockery Units",
    icon: CupSoda,
    description: "Display your finest dinnerware elegantly with our designer crockery units and display cabinets. Modern crockery cabinet with glass doors and contemporary china cabinet with drawers.",
    features: ["Glass doors", "Space optimization", "Custom design", "Premium finishes", "Handleless design options"],
    price: "Starting from ₹20,000"
  },
  {
    title: "Beds",
    icon: Bed,
    description: "Experience comfort and style with our premium bed designs, crafted for the perfect night's sleep. Modern platform bed with upholstered headboard and contemporary wooden bed frame design.",
    features: ["Premium materials", "Custom sizes", "Mattress support", "Storage options", "LED lighting"],
    price: "Starting from ₹35,000"
  },
  {
    title: "Dressing Tables",
    icon: Armchair,
    description: "Complete your bedroom with our elegant dressing tables, designed for your daily grooming routine. Modern vanity table with mirror and lights and contemporary dressing table with drawers.",
    features: ["Mirror lighting", "Storage drawers", "Custom design", "Comfortable seating", "Gold hardware options"],
    price: "Starting from ₹15,000"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-28 overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='%23d4af37' fill-opacity='0.3'/%3E%3C/svg%3E")`}}></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-secondary/10 backdrop-blur-sm rounded-full py-2 px-6 border border-secondary/20 mb-4">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                <span className="text-sm font-medium text-secondary">Comprehensive Solutions</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold text-primary font-playfair leading-tight">Our Services</h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
                Comprehensive interior design solutions for every corner of your home. 
                Quality craftsmanship meets affordable pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-secondary/3 -z-10"></div>
          <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-primary/10 to-transparent opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center mb-20 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold text-primary font-playfair mb-6">Our Premium Services</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover our comprehensive range of interior design solutions
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="transition-all duration-500 hover:-translate-y-3 group border-0 bg-background/80 backdrop-blur-xl shadow-2xl hover:shadow-3xl rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                    <CardHeader>
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:from-secondary/30 group-hover:to-secondary/10 shadow-lg group-hover:shadow-xl">
                          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-secondary/20 group-hover:rotate-12">
                            <Icon className="w-6 h-6 text-secondary transition-all duration-500 group-hover:scale-110" />
                          </div>
                        </div>
                        <div className="space-y-3">
                          <CardTitle className="text-3xl font-bold text-primary">{service.title}</CardTitle>
                          <CardDescription className="text-lg text-muted-foreground">{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-0">
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-base text-muted-foreground">
                            <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-4 h-4 text-secondary" />
                            </div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-6 border-t border-border/50">
                        <span className="text-xl font-bold text-secondary">{service.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;