import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Utensils, 
  Bed, 
  BookOpen, 
  Wallpaper, 
  Lightbulb, 
  Home,
  Bath,
  Sparkles
} from "lucide-react";
import kitchenImg from "@/assets/kitchen.jpg";
import wardrobeImg from "@/assets/wardrobe.jpg";
import wallpaperImg from "@/assets/wallpaper.jpg";

const services = [
  {
    title: "Modular Kitchen",
    icon: Utensils,
    image: kitchenImg,
    description: "Modern and functional kitchen designs"
  },
  {
    title: "Wardrobe",
    icon: Bed,
    image: wardrobeImg,
    description: "Custom storage solutions"
  },
  {
    title: "Study Table",
    icon: BookOpen,
    description: "Ergonomic workspace designs"
  },
  {
    title: "Wallpaper",
    icon: Wallpaper,
    image: wallpaperImg,
    description: "Premium wall finishes"
  },
  {
    title: "Lights",
    icon: Lightbulb,
    description: "Ambient lighting solutions"
  },
  {
    title: "False Ceiling",
    icon: Home,
    description: "Elegant ceiling designs"
  },
  {
    title: "Bathroom",
    icon: Bath,
    description: "Luxury bathroom interiors"
  },
  {
    title: "Pooja Unit",
    icon: Sparkles,
    description: "Sacred space design"
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete interior solutions for every room in your home
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link key={index} to="/services" className="group">
                <Card className="hover-lift overflow-hidden h-full border-2 border-transparent hover:border-secondary/20 transition-all duration-300">
                  <CardContent className="p-0">
                    {service.image ? (
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 text-primary-foreground mb-2">
                            <Icon className="w-6 h-6" />
                            <h3 className="font-semibold text-lg">{service.title}</h3>
                          </div>
                          <p className="text-sm text-primary-foreground/90">{service.description}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="p-6 space-y-3 bg-card">
                        <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                          <Icon className="w-6 h-6 text-secondary" />
                        </div>
                        <h3 className="font-semibold text-lg text-foreground">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
