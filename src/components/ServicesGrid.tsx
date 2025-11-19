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
  CheckCircle,
  Tv,
  Sofa,
  Table
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
    title: "Wardrobes",
    icon: Bed,
    image: "/wardrobe.webp",
    description: "Custom storage solutions tailored to your space",
    features: ["Space Optimization", "Quality Hardware", "Design Consultation"],
    popular: true
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
    title: "Pooja Rooms",
    icon: Sparkles,
    image: "/pooja.avif",
    description: "Sacred space design with traditional elegance",
    features: ["Traditional Design", "Quality Wood", "Custom Carvings"],
    imageClass: "object-cover sepia hue-rotate-15"
  },
  {
    title: "Dining Table",
    icon: Table,
    image: "/Dining Table.jpg",
    description: "Elegant dining solutions for family gatherings",
    features: ["Premium Materials", "Custom Sizes", "Comfortable Seating"],
    imageClass: "object-cover brightness-110 contrast-105"
  },
  {
    title: "TV Units",
    icon: Tv,
    image: "/tv unit.jpg",
    description: "Stylish entertainment centers for your living room",
    features: ["Custom Design", "Cable Management", "Premium Finishes"],
    imageClass: "object-cover brightness-125 contrast-125 saturate-150"
  },
  {
    title: "Study Tables",
    icon: BookOpen,
    image: "/studytable.jpg",
    description: "Ergonomic workspace designs for productivity",
    features: ["Ergonomic Design", "Cable Management", "Custom Sizing"],
    imageClass: "object-cover brightness-110 contrast-105"
  },
  {
    title: "Crockery Units",
    icon: Wallpaper,
    image: "/Crockery Units.webp",
    description: "Elegant storage solutions for your dinnerware",
    features: ["Space Optimization", "Glass Doors", "Custom Design"],
    popular: true
  },
  {
    title: "Beds",
    icon: Sofa,
    image: "/bed.jpg",
    description: "Comfortable and stylish bedroom furniture",
    features: ["Premium Materials", "Custom Sizes", "Mattress Support"],
    imageClass: "object-cover brightness-90 contrast-110"
  },
  {
    title: "Dressing Tables",
    icon: Bath,
    image: "/Dressing Tables.jpg",
    description: "Elegant vanity setups for your personal care routine",
    features: ["Mirror Lighting", "Storage Drawers", "Custom Design"],
    imageClass: "object-cover brightness-110 contrast-105"
  }
];

const ServicesGrid = ({ limit }: { limit?: number }) => {
  return (
    <>
      {/* Structured Data for Services Grid */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Interior Design Services Grid",
          "description": "Complete interior solutions for every room in your home",
          "numberOfItems": limit || services.length,
          "itemListElement": services.slice(0, limit).map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Service",
              "name": service.title,
              "description": service.description,
              "serviceType": "Interior Design Service",
              "category": "Home & Garden",
              "provider": {
                "@type": "Organization",
                "@id": "https://livora.design#organization",
                "name": "Livora Interior Design"
              },
              "areaServed": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "17.3850",
                  "longitude": "78.4867"
                },
                "geoRadius": "50000"
              },
              "offers": {
                "@type": "Offer",
                "availability": "InStock",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "INR",
                  "priceRange": "$$"
                }
              }
            }
          })),
          "mainEntity": {
            "@type": "Organization",
            "@id": "https://livora.design#organization",
            "name": "Livora Interior Design",
            "url": "https://livora.design"
          }
        })}
      </script>

      <section className="py-28 relative overflow-hidden" aria-labelledby="services-grid-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-secondary/3 -z-10" aria-hidden="true"></div>
        <div className="container mx-auto px-4 relative z-10">
          <header className="text-center mb-20 space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full py-2 px-6 mb-4" role="status">
              <div className="w-2 h-2 rounded-full bg-secondary" aria-hidden="true"></div>
              <span className="text-sm font-medium text-secondary">Complete Solutions</span>
            </div>
            <h2 id="services-grid-heading" className="text-4xl md:text-5xl font-bold text-primary font-playfair">Our Premium Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete interior solutions for every room in your home
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" aria-hidden="true"></div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="Interior design services">
            {services.slice(0, limit).map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={index} className="overflow-hidden h-full transition-all duration-500 hover:-translate-y-3 group border-0 bg-background/80 backdrop-blur-xl shadow-2xl hover:shadow-3xl rounded-3xl" role="listitem">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" aria-hidden="true"></div>
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-3xl">
                      <img 
                        src={service.image} 
                        alt={`${service.title} interior design service`}
                        className={`w-full h-full ${service.imageClass || 'object-cover'} group-hover:scale-110 transition-all duration-700`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/20" aria-hidden="true" />
                      {service.popular && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-gradient-to-r from-secondary to-accent text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg" role="status">
                            POPULAR
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center shadow-lg" aria-hidden="true">
                            <div className="w-7 h-7 rounded-xl bg-secondary/20 flex items-center justify-center transition-all duration-500 group-hover:bg-secondary/30 group-hover:rotate-12">
                              <Icon className="w-4 h-4 text-secondary transition-all duration-500 group-hover:scale-110" />
                            </div>
                          </div>
                          <h3 className="font-bold text-xl text-primary-foreground">{service.title}</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="space-y-2 mb-6" aria-label={`${service.title} features`}>
                        {service.features?.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                              <CheckCircle className="w-3 h-3 text-secondary" />
                            </div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact" className="block">
                        <Button variant="outline" className="w-full group/button text-base py-5 rounded-xl border-2 font-medium hover:bg-secondary/10 transition-all duration-300 shadow-md hover:shadow-lg" aria-describedby={`service-${index}-description`}>
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/button:translate-x-1" aria-hidden="true" />
                        </Button>
                        <span id={`service-${index}-description`} className="sr-only">Learn more about {service.title} interior design service</span>
                      </Link>
                    </div>
                  </CardContent>
                </article>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/Services">
              <Button variant="secondary" size="lg" className="group text-lg font-bold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1" aria-describedby="explore-services-description">
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
              <span id="explore-services-description" className="sr-only">View our complete range of interior design services</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesGrid;