import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Clock, Shield, Star, Heart, Target, ThumbsUp, ArrowRight, Eye } from "lucide-react";

const values = [
  {
    icon: Star,
    title: "Quality First",
    description: "We never compromise on the quality of materials and workmanship. Every project is executed with precision and care."
  },
  {
    icon: Target,
    title: "Transparent Pricing",
    description: "No hidden costs or surprises. We provide detailed quotes and stick to our commitments."
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We value your time and ensure project completion within agreed timelines."
  },
  {
    icon: Heart,
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
        <section className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-50" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-primary font-playfair">About Livora</h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                At Livora, we believe your home should be a reflection of who you are elegant, functional, and uniquely yours. We specialize in modular kitchens, wardrobes, false ceilings, pooja rooms, dining tables, TV units, study tables, crockery units, beds, and dressing tables all designed to maximize space and elevate your everyday living.
              </p>
              
            </div>
          </div>
        </section>

        {/* Our Vision and Mission */}
        <section className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20 space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-secondary/10 backdrop-blur-sm rounded-full py-2 px-6 border border-secondary/20 mb-4">
                <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
                <span className="text-sm font-bold text-secondary">Our Purpose</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary font-playfair mb-6">Vision & Mission</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The driving forces behind everything we create
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="group border-0 bg-background/80 backdrop-blur-xl shadow-2xl hover:shadow-3xl rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                  <CardContent className="p-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-500">
                        <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-secondary/20 group-hover:rotate-12">
                          <Eye className="w-6 h-6 text-secondary transition-all duration-500 group-hover:scale-110" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-primary font-playfair">Our Vision</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      To redefine modern living by offering intelligent, space-efficient, and aesthetically pleasing furniture solutions that make every home smarter and more comfortable.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="group border-0 bg-background/80 backdrop-blur-xl shadow-2xl hover:shadow-3xl rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                  <CardContent className="p-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-500">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary/20 group-hover:-rotate-12">
                          <Target className="w-6 h-6 text-primary transition-all duration-500 group-hover:scale-110" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-primary font-playfair">Our Mission</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      To deliver customized interior solutions that combine creativity, practicality, and cutting-edge technology — making quality design accessible to everyone.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary font-playfair">Our Values</h2>
              <p className="text-lg text-muted-foreground">
                The principles that guide everything we do
              </p>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="hover:shadow-[var(--warm-glow)] transition-all duration-300 hover:-translate-y-1 group border-0 bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-8 space-y-4">
                      <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-secondary/20">
                        <Icon className="w-7 h-7 text-secondary transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-primary">{value.title}</h3>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10 -z-10"></div>
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto text-center shadow-[var(--elegant-shadow)] border-0 bg-background/80 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-primary/5 -z-10"></div>
              <CardContent className="p-12 space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full py-2 px-6 mb-4">
                  <ThumbsUp className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-medium text-secondary">Let's Work Together</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-playfair">Let's Create Your Dream Home Together</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ready to start your home transformation journey? Get in touch with us today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button variant="secondary" size="lg" className="px-8 py-6 text-base font-medium group" asChild>
                    <Link to="/contact">
                      Contact Us
                      <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-6 text-base font-medium border-2" asChild>
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