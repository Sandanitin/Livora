import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, User, MessageSquare, ShieldCheck, FileText, Send, Navigation, Star } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { sendEmail } from "@/lib/email";

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
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) {
      setIsSubmitting(false);
      return;
    }

    const result = await sendEmail(formRef.current);
    
    if (result.success) {
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      });
      formRef.current?.reset();
    } else {
      console.error("Failed to send email:", result.error);
      toast.error("Failed to send message", {
        description: result.error?.message || "Please try again later.",
      });
    }
    
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Structured Data for Contact Page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Livora Interior Design",
          "description": "Get in touch with Livora Interior Design for your interior design needs. Contact us via phone, email, or visit our showroom in Hyderabad.",
          "url": "https://livora.design/contact",
          "mainEntity": {
            "@type": "Organization",
            "@id": "https://livora.design#organization",
            "name": "Livora Interior Design",
            "url": "https://livora.design",
            "telephone": "+91 98765 43210",
            "email": "info@livora.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Design Street",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "postalCode": "500001",
              "addressCountry": "IN"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91 98765 43210",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi", "Telugu"],
                "hoursAvailable": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "09:00",
                    "closes": "19:00"
                  }
                ]
              },
              {
                "@type": "ContactPoint",
                "email": "info@livora.com",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi", "Telugu"]
              }
            ],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "17.3850",
              "longitude": "78.4867"
            },
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "17.3850",
                "longitude": "78.4867"
              },
              "geoRadius": "50000"
            }
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://livora.design"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://livora.design/contact"
              }
            ]
          }
        })}
      </script>

      <div className="min-h-screen">
        <header>
          <Navbar />
        </header>
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-32 overflow-hidden" aria-labelledby="contact-hero-heading">
            <div className="absolute inset-0 opacity-20" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='60' cy='60' r='1.5' fill='%23d4af37' fill-opacity='0.4'/%3E%3C/svg%3E")`}} aria-hidden="true"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent opacity-50" aria-hidden="true"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-in">
                <h1 id="contact-hero-heading" className="text-4xl md:text-6xl font-bold text-primary font-playfair leading-tight">Contact Us</h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-32 relative overflow-hidden" aria-labelledby="contact-form-heading">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" aria-hidden="true"></div>
            <div className="absolute top-0 right-0 w-2/5 h-full bg-gradient-to-l from-secondary/15 to-transparent opacity-40 -z-10" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-primary/10 to-transparent opacity-30 rounded-full blur-3xl -z-10" aria-hidden="true"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                  {/* Contact Information - Left Side */}
                  <div className="space-y-8 animate-fade-in">
                    <header className="text-center mb-12">
                      <h2 id="contact-form-heading" className="text-3xl md:text-4xl font-bold text-primary font-playfair mb-4">Contact Information</h2>
                      <p className="text-lg text-muted-foreground">We'll get back to you within 24 hours</p>
                    </header>
                    
                    <div className="space-y-8">
                      {contactInfo.map((info, index) => {
                        const Icon = info.icon;
                        return (
                          <article key={`contact-info-${index}`} className="border-0 bg-background/80 backdrop-blur-xl shadow-xl rounded-2xl overflow-hidden">
                            <CardContent className="p-6">
                              <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                                  <Icon className="w-6 h-6 text-secondary" />
                                </div>
                                <div>
                                  <h3 className="font-bold text-xl text-primary mb-2">{info.title}</h3>
                                  <div className="space-y-1 mb-3">
                                    {info.details.map((detail, idx) => (
                                      <p key={`detail-${index}-${idx}`} className="text-foreground">
                                        {detail}
                                      </p>
                                    ))}
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    {info.description}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Contact Form - Right Side */}
                  <Card className="shadow-3xl border-0 bg-background/90 backdrop-blur-2xl relative overflow-hidden rounded-3xl transform hover:scale-[1.02] transition-all duration-500 h-fit">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 -z-10" aria-hidden="true"></div>
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/20 to-transparent opacity-20 -z-10" aria-hidden="true"></div>
                    <CardContent className="p-10 md:p-12 relative z-10">
                      <header className="mb-8 text-center">
                        <h3 className="text-3xl font-bold text-primary font-playfair mb-2">Send Us a Message</h3>
                        <p className="text-muted-foreground">We'll get back to you within 24 hours</p>
                      </header>
                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-base font-semibold text-foreground flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center" aria-hidden="true">
                              <User className="w-5 h-5 text-secondary" />
                            </div>
                            Full Name
                          </label>
                          <Input 
                            id="name" 
                            name="from_name"
                            placeholder="Enter your full name" 
                            className="py-6 border-border focus:border-secondary focus:ring-secondary text-lg rounded-2xl transition-all duration-300 bg-background/70 backdrop-blur-sm border-2 focus:shadow-xl pl-6 shadow-md"
                            required
                            aria-required="true"
                            aria-describedby="name-help"
                          />
                          <span id="name-help" className="sr-only">Enter your full name for identification</span>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-base font-semibold text-foreground flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center" aria-hidden="true">
                              <Mail className="w-5 h-5 text-secondary" />
                            </div>
                            Email Address
                          </label>
                          <Input 
                            id="email" 
                            name="reply_to"
                            type="email" 
                            placeholder="Enter your email" 
                            required
                            className="py-6 border-border focus:border-secondary focus:ring-secondary text-lg rounded-2xl transition-all duration-300 bg-background/70 backdrop-blur-sm border-2 focus:shadow-xl pl-6 shadow-md"
                            aria-required="true"
                            aria-describedby="email-help"
                          />
                          <span id="email-help" className="sr-only">We'll use this email to respond to your inquiry</span>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-base font-semibold text-foreground flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center" aria-hidden="true">
                              <MessageSquare className="w-5 h-5 text-secondary" />
                            </div>
                            Subject
                          </label>
                          <Input 
                            id="subject" 
                            name="subject"
                            placeholder="What is this regarding?" 
                            required
                            className="py-6 border-border focus:border-secondary focus:ring-secondary text-lg rounded-2xl transition-all duration-300 bg-background/70 backdrop-blur-sm border-2 focus:shadow-xl pl-6 shadow-md"
                            aria-required="true"
                            aria-describedby="subject-help"
                          />
                          <span id="subject-help" className="sr-only">Brief description of your inquiry</span>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-base font-semibold text-foreground flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center" aria-hidden="true">
                              <FileText className="w-5 h-5 text-secondary" />
                            </div>
                            Message
                          </label>
                          <Textarea 
                            id="message" 
                            name="message"
                            placeholder="Tell us about your project or ask us a question..." 
                            required
                            className="py-6 min-h-[180px] border-border focus:border-secondary focus:ring-secondary text-lg rounded-2xl transition-all duration-300 bg-background/70 backdrop-blur-sm border-2 focus:shadow-xl pl-6 shadow-md"
                            aria-required="true"
                            aria-describedby="message-help"
                          />
                          <span id="message-help" className="sr-only">Provide detailed information about your project or question</span>
                        </div>
                        
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full py-7 text-lg font-bold bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent transition-all duration-500 rounded-2xl group shadow-xl hover:shadow-2xl mt-6 transform hover:-translate-y-1"
                          aria-describedby="submit-help"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="mr-2">Sending...</span>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="ml-3 w-6 h-6 inline-block transition-transform group-hover:translate-x-2" />
                            </>
                          )}
                        </Button>
                        <span id="submit-help" className="sr-only">Submit your message and we'll respond within 24 hours</span>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Contact;