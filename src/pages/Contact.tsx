import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EstimateForm from "@/components/EstimateForm";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 98765 43211"],
    description: "Mon-Sat, 9:00 AM - 7:00 PM"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@homelane.com", "support@homelane.com"],
    description: "We'll respond within 24 hours"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Design Street", "Mumbai, Maharashtra 400001"],
    description: "India"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Saturday", "9:00 AM - 7:00 PM"],
    description: "Sunday Closed"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-muted/50 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-primary">Get In Touch</h1>
              <p className="text-lg text-muted-foreground">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="hover:shadow-[var(--warm-glow)] transition-all duration-300">
                    <CardContent className="p-6 space-y-3 text-center">
                      <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="font-semibold text-lg text-foreground">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-foreground">
                          {detail}
                        </p>
                      ))}
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Estimate Form */}
        <EstimateForm />

        {/* Map Section (Placeholder) */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden shadow-[var(--elegant-shadow)]">
                <div className="h-96 bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">Map Location</p>
                    <p className="text-sm text-muted-foreground">123 Design Street, Mumbai, Maharashtra</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
