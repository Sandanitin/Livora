import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Utensils, Bed, BookOpen, Wallpaper, Lightbulb, 
  Home, Bath, Sparkles, CheckCircle2 
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
    title: "Wardrobe Design",
    icon: Bed,
    description: "Maximize your storage with elegant wardrobe solutions tailored to your needs. From walk-in closets to sliding wardrobes.",
    features: ["Custom designs", "Space optimization", "Quality hardware", "Variety of finishes"],
    price: "Starting from ₹40,000"
  },
  {
    title: "Study Table & Workspace",
    icon: BookOpen,
    description: "Create the perfect work-from-home setup with ergonomic study tables and functional workspaces.",
    features: ["Ergonomic design", "Cable management", "Storage options", "Custom sizes"],
    price: "Starting from ₹25,000"
  },
  {
    title: "Wallpaper & Wall Finishes",
    icon: Wallpaper,
    description: "Bring your walls to life with our extensive collection of wallpapers and premium wall finishes.",
    features: ["Designer patterns", "Washable options", "Easy maintenance", "Expert installation"],
    price: "Starting from ₹50/sq.ft"
  },
  {
    title: "Lighting Solutions",
    icon: Lightbulb,
    description: "Set the perfect ambiance with our comprehensive lighting solutions from ambient to task lighting.",
    features: ["LED solutions", "Smart controls", "Energy efficient", "Designer fixtures"],
    price: "Starting from ₹15,000"
  },
  {
    title: "False Ceiling",
    icon: Home,
    description: "Add elegance and functionality to your spaces with our stunning false ceiling designs.",
    features: ["Modern designs", "Lighting integration", "Sound insulation", "Durable materials"],
    price: "Starting from ₹100/sq.ft"
  },
  {
    title: "Bathroom Interiors",
    icon: Bath,
    description: "Create a spa-like experience at home with our luxury bathroom interior solutions.",
    features: ["Modern fixtures", "Waterproofing", "Storage solutions", "Premium fittings"],
    price: "Starting from ₹80,000"
  },
  {
    title: "Pooja Unit",
    icon: Sparkles,
    description: "Design a sacred space in your home with our beautifully crafted pooja units.",
    features: ["Traditional & modern", "Custom sizes", "LED lighting", "Quality wood"],
    price: "Starting from ₹30,000"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-muted/50 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-primary">Our Services</h1>
              <p className="text-lg text-muted-foreground">
                Comprehensive interior design solutions for every corner of your home. 
                Quality craftsmanship meets affordable pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-[var(--warm-glow)] transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-secondary" />
                        </div>
                        <div className="space-y-2">
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                          <CardDescription className="text-base">{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-secondary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-border flex items-center justify-between">
                        <span className="text-lg font-semibold text-secondary">{service.price}</span>
                        <Button variant="secondary" size="sm" asChild>
                          <Link to="/contact">Get Quote</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto text-center shadow-[var(--elegant-shadow)]">
              <CardHeader className="space-y-4">
                <CardTitle className="text-3xl">Ready to Transform Your Home?</CardTitle>
                <CardDescription className="text-base">
                  Get a free consultation and detailed estimate for your project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" size="xl" asChild>
                  <Link to="/contact">Schedule Free Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
