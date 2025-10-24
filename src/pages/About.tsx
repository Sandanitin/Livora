import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Clock, Shield } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Clients", value: "2000+" },
  { icon: Award, label: "Projects Completed", value: "3500+" },
  { icon: Clock, label: "Years Experience", value: "15+" },
  { icon: Shield, label: "Quality Guarantee", value: "100%" }
];

const values = [
  {
    title: "Quality First",
    description: "We never compromise on the quality of materials and workmanship. Every project is executed with precision and care."
  },
  {
    title: "Transparent Pricing",
    description: "No hidden costs or surprises. We provide detailed quotes and stick to our commitments."
  },
  {
    title: "Timely Delivery",
    description: "We value your time and ensure project completion within agreed timelines."
  },
  {
    title: "Customer Satisfaction",
    description: "Your satisfaction is our success. We work closely with you throughout the project."
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-muted/50 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-primary">About HomeLane</h1>
              <p className="text-lg text-muted-foreground">
                Your trusted partner in creating beautiful, functional living spaces
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-[var(--warm-glow)] transition-all duration-300">
                    <CardContent className="pt-6 space-y-2">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Our Story</h2>
              <Card className="shadow-[var(--elegant-shadow)]">
                <CardContent className="p-8 space-y-4 text-foreground">
                  <p className="text-lg leading-relaxed">
                    Founded in 2008, HomeLane has been transforming houses into homes for over 15 years. 
                    What started as a small interior design studio has grown into one of the most trusted 
                    names in home interiors across India.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our journey has been driven by a simple belief: everyone deserves a beautiful home that 
                    reflects their personality and lifestyle. We combine innovative design, quality craftsmanship, 
                    and affordable pricing to make dream homes accessible to all.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Today, with a team of experienced designers, skilled craftsmen, and dedicated support staff, 
                    we continue to create spaces that our clients love and cherish.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-[var(--warm-glow)] transition-all duration-300">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-primary">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto text-center shadow-[var(--elegant-shadow)]">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-3xl font-bold text-primary">Let's Create Your Dream Home Together</h2>
                <p className="text-lg text-muted-foreground">
                  Ready to start your home transformation journey? Get in touch with us today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button variant="secondary" size="lg" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/services">View Services</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
