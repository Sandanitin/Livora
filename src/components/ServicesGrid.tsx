import { Link } from "react-router-dom"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Utensils, 
  Bed, 
  BookOpen, 
  Wallpaper, 
  Lightbulb, 
  Home,
  Bath,
  Sparkles,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    title: "Modular Kitchen",
    icon: Utensils,
    image: "/kitchen.jpg",
    description: "Modern and functional kitchen designs with premium materials",
    features: ["Custom Design", "Premium Materials", "Installation Included"],
    popular: true
  },
  {
    title: "Wardrobe",
    icon: Bed,
    image: "/wardrobe.webp",
    description: "Custom storage solutions tailored to your space",
    features: ["Space Optimization", "Quality Hardware", "Design Consultation"],
    popular: true
  },
  {
    title: "Study Table",
    icon: BookOpen,
    image: "/studytable.jpg",
    description: "Ergonomic workspace designs for productivity",
    features: ["Ergonomic Design", "Cable Management", "Custom Sizing"],
    imageClass: "object-cover brightness-110 contrast-105"
  },
  {
    title: "Wallpaper",
    icon: Wallpaper,
    image: "/wallpaper.avif",
    description: "Premium wall finishes to elevate your interiors",
    features: ["Eco-Friendly", "Easy Maintenance", "Wide Selection"],
    popular: true
  },
  {
    title: "Lights",
    icon: Lightbulb,
    image: "/light.jpg",
    description: "Ambient and decorative lighting solutions",
    features: ["Energy Efficient", "Smart Controls", "Custom Fixtures"],
    imageClass: "object-cover brightness-125 contrast-125 saturate-150"
  },
  {
    title: "False Ceiling",
    icon: Home,
    image: "/plafond-11.jpg",
    description: "Elegant ceiling designs with modern finishes",
    features: ["Acoustic Control", "LED Integration", "Modern Finishes"],
    imageClass: "object-cover saturate-200 hue-rotate-60"
  },
  {
    title: "Bathroom",
    icon: Bath,
    image: "/luxury-bathroom-wall-finishes.jpg",
    description: "Luxury bathroom interiors with premium fixtures",
    features: ["Waterproofing", "Premium Fixtures", "Ventilation System"],
    imageClass: "object-cover brightness-90 contrast-110"
  },
  {
    title: "Pooja Unit",
    icon: Sparkles,
    image: "/pooja.avif",
    description: "Sacred space design with traditional elegance",
    features: ["Traditional Design", "Quality Wood", "Custom Carvings"],
    imageClass: "object-cover sepia hue-rotate-15"
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Premium Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete interior solutions for every room in your home
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="overflow-hidden h-full border border-muted hover:border-secondary/30 transition-all duration-300 bg-card/80 backdrop-blur-sm group shadow-sm hover:shadow-md">
                <CardContent className="p-0">
                  <div className="relative h-36 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className={`w-full h-full ${service.imageClass || 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20" />
                    {service.popular && (
                      <div className="absolute top-2.5 right-2.5">
                        <div className="bg-secondary text-secondary-foreground text-xs font-bold px-2 py-0.5 rounded-full shadow">
                          POPULAR
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-7 h-7 rounded-md bg-secondary/90 flex items-center justify-center">
                          <Icon className="w-3.5 h-3.5 text-secondary-foreground" />
                        </div>
                        <h3 className="font-bold text-base text-primary-foreground">{service.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-muted-foreground text-xs mb-2.5">{service.description}</p>
                    <ul className="space-y-1 mb-4">
                      {service.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-xs">
                          <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/services" className="block">
                      <Button variant="outline" size="sm" className="w-full group/button text-xs py-1.5 h-8">
                        Learn More
                        <ArrowRight className="ml-1 w-3 h-3 transition-transform duration-300 group-hover/button:translate-x-0.5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/services">
            <Button variant="premium" size="lg" className="group text-base font-semibold px-5 py-4">
              Explore All Services
              <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;