import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, User, MessageSquare, ShieldCheck, FileText, Send, Navigation, Star } from "lucide-react";

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
    details: ["info@livora.com", "support@livora.com"],
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
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='60' cy='60' r='1.5' fill='%23d4af37' fill-opacity='0.4'/%3E%3C/svg%3E")`}}></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary/15 to-accent/15 backdrop-blur-sm rounded-full py-3 px-8 border border-secondary/30 mb-6 shadow-lg">
                <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
                <span className="text-base font-medium text-secondary tracking-wide">Let's create something beautiful together</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold text-primary font-playfair leading-tight tracking-tight">Get In Touch</h1>
              <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center">
                <Button variant="secondary" size="lg" className="px-10 py-7 text-lg font-medium rounded-full group shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                  <Phone className="w-6 h-6 mr-3 transition-transform group-hover:rotate-12" />
                  Call Us Now
                  <span className="ml-2 text-sm opacity-80">+91 98765 43210</span>
                </Button>
                <Button variant="outline" size="lg" className="px-10 py-7 text-lg font-medium rounded-full border-2 hover:bg-secondary/10 transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Mail className="w-6 h-6 mr-3" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-secondary/3 -z-10"></div>
          <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-primary/10 to-transparent opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center mb-24 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full py-2 px-6 mb-6">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span className="text-sm font-medium text-secondary">Multiple ways to connect</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-primary font-playfair mb-8">Contact Information</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
                Reach out to us through any of these channels. We're here to help you create your dream space.
              </p>
              <div className="w-40 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={`contact-${index}`} className="transition-all duration-700 hover:-translate-y-4 group border-0 bg-background/80 backdrop-blur-xl shadow-2xl hover:shadow-3xl rounded-3xl overflow-hidden transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
                  <CardContent className="p-10 space-y-6 text-center relative z-10">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-secondary/15 to-secondary/5 flex items-center justify-center mx-auto transition-all duration-500 group-hover:from-secondary/25 group-hover:to-secondary/10 shadow-lg group-hover:shadow-xl">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-secondary/30 group-hover:rotate-12 shadow-md group-hover:shadow-lg">
                        <Icon className="w-7 h-7 text-secondary transition-all duration-500 group-hover:scale-110" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-bold text-3xl text-primary tracking-tight">{info.title}</h3>
                      <div className="space-y-2">
                        {info.details.map((detail, idx) => (
                          <p key={`detail-${index}-${idx}`} className="text-xl text-foreground font-medium leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <div className="pt-3">
                        <span className="inline-block px-4 py-2 text-sm font-semibold text-secondary bg-secondary/15 rounded-full tracking-wide">
                          {info.description}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10"></div>
          <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-l from-secondary/15 to-transparent opacity-40 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-primary/10 to-transparent opacity-30 rounded-full blur-3xl -z-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12 animate-fade-in">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full py-2 px-6">
                      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                      <span className="text-sm font-medium text-secondary">Start your journey</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-primary font-playfair leading-tight mb-6">Let's Start a Conversation</h2>
                    <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                      Have a project in mind? Fill out the form and our design experts will get back to you within 24 hours.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-6 pt-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <ShieldCheck className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-primary mb-2">Secure & Confidential</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">Your information is protected with bank-level security and will never be shared.</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-8 pt-8">
                    <div className="text-center bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-lg">
                      <div className="text-4xl font-bold text-primary mb-2">24h</div>
                      <div className="text-base text-muted-foreground font-medium">Response Time</div>
                    </div>
                    <div className="text-center bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-lg">
                      <div className="text-4xl font-bold text-primary mb-2">15+</div>
                      <div className="text-base text-muted-foreground font-medium">Design Experts</div>
                    </div>
                    <div className="text-center bg-background/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-lg">
                      <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                      <div className="text-base text-muted-foreground font-medium">Happy Clients</div>
                    </div>
                  </div>
                </div>
                
                <Card className="shadow-3xl border-0 bg-background/90 backdrop-blur-2xl relative overflow-hidden rounded-3xl transform hover:scale-[1.02] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 -z-10"></div>
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/20 to-transparent opacity-20 -z-10"></div>
                  <CardContent className="p-10 md:p-12 relative z-10">
                    <div className="mb-8 text-center">
                      <h3 className="text-3xl font-bold text-primary font-playfair mb-2">Send Us a Message</h3>
                      <p className="text-muted-foreground">We'll get back to you within 24 hours</p>
                    </div>
                    <form className="space-y-8">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-base font-semibold text-foreground flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center">
                            <User className="w-5 h-5 text-secondary" />
                          </div>
                          Full Name
                        </label>
                        <Input 
                          id="name" 
                          placeholder="Enter your full name" 
                          className="py-6 border-border focus:border-secondary focus:ring-secondary text-lg rounded-2xl transition-all duration-300 bg-background/70 backdrop-blur-sm border-2 focus:shadow-xl pl-6 shadow-md"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-base font-semibold text-foreground flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center">
                            <Mail className="w-5 h-5 text-secondary" />
                          </div>
                          Email Address
                        </label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Enter your email" 
                          className="py-6 border-border focus:border-secondary focus:ring-secondary text-lg rounded-2xl transition-all duration-300 bg-background/70 backdrop-blur-sm border-2 focus:shadow-xl pl-6 shadow-md"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-base font-semibold text-foreground flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center">
                            <MessageSquare className="w-5 h-5 text-secondary" />
                          </div>
                          Subject
                        </label>
                        <Input 
                          id="subject" 
                          placeholder="What is this regarding?" 
                          className="py-6 border-border focus:border-secondary focus:ring-secondary text-lg rounded-2xl transition-all duration-300 bg-background/70 backdrop-blur-sm border-2 focus:shadow-xl pl-6 shadow-md"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-base font-semibold text-foreground flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-secondary" />
                          </div>
                          Message
                        </label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your project or ask us a question..." 
                          className="py-6 min-h-[180px] border-border focus:border-secondary focus:ring-secondary text-lg rounded-2xl transition-all duration-300 bg-background/70 backdrop-blur-sm border-2 focus:shadow-xl pl-6 shadow-md"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full py-7 text-lg font-bold bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent transition-all duration-500 rounded-2xl group shadow-xl hover:shadow-2xl mt-6 transform hover:-translate-y-1"
                      >
                        Send Message
                        <Send className="ml-3 w-6 h-6 inline-block transition-transform group-hover:translate-x-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
};

export default Contact;