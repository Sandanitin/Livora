import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Clock, Shield, Star, Heart, Target, ThumbsUp, ArrowRight } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Clients", value: "2000+" },
  { icon: Award, label: "Projects Completed", value: "3500+" },
  { icon: Clock, label: "Years Experience", value: "15+" },
  { icon: Shield, label: "Quality Guarantee", value: "100%" }
];

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
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Your trusted partner in creating beautiful, functional living spaces
              </p>
              <div className="pt-4">
                <div className="inline-flex items-center gap-2 bg-secondary/10 backdrop-blur-sm rounded-full py-2 px-6 border border-secondary/20">
                  <Star className="w-5 h-5 text-secondary fill-secondary" />
                  <span className="text-sm font-medium text-secondary">Premium Interior Design Since 2008</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-[var(--warm-glow)] transition-all duration-300 hover:-translate-y-2 group">
                    <CardContent className="pt-8 pb-6 space-y-3">
                      <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto transition-all duration-300 group-hover:bg-secondary/20">
                        <Icon className="w-8 h-8 text-secondary transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-3xl font-bold text-primary animate-fade-in">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 -z-10"></div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4 mb-12 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-primary font-playfair">Our Story</h2>
                <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Card className="shadow-[var(--elegant-shadow)] border-0 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-8 space-y-4 text-foreground">
                      <p className="text-lg leading-relaxed">
                        Founded in 2008, Livora has been transforming houses into homes for over 15 years. 
                        What started as a small interior design studio has grown into one of the most trusted 
                        names in home interiors across India.
                      </p>
                      <p className="text-lg leading-relaxed">
                        Our journey has been driven by a simple belief: everyone deserves a beautiful home that 
                        reflects their personality and lifestyle.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-6">
                  <Card className="shadow-[var(--elegant-shadow)] border-0 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-8 space-y-4 text-foreground">
                      <p className="text-lg leading-relaxed">
                        We combine innovative design, quality craftsmanship, 
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