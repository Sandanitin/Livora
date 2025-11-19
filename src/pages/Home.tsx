import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
// ProcessSteps component has been removed

const Home = () => {
  return (
    <>
      {/* Structured Data for Home Page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://livora.design",
          "name": "Livora Interior Design",
          "alternateName": "Livora Interiors",
          "description": "Top interior design company in Hyderabad offering residential and commercial interior design services",
          "url": "https://livora.design",
          "telephone": "+91-XXXXXXXXXX",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Hyderabad",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500001",
            "addressCountry": "IN"
          },
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
          },
          "openingHours": [
            "Mo-Fr 09:00-18:00",
            "Sa 10:00-16:00",
            "Su Closed"
          ],
          "priceRange": "$$",
          "paymentAccepted": "Cash, Credit Card, Debit Card, UPI",
          "currenciesAccepted": "INR",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "6",
            "bestRating": "5",
            "worstRating": "1"
          },
          "serviceType": [
            "Residential Interior Design",
            "Commercial Interior Design",
            "Office Interior Design",
            "Home Interior Design",
            "Space Planning",
            "3D Visualization"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Interior Design Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Residential Interior Design",
                  "description": "Complete home interior design solutions"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Interior Design",
                  "description": "Office and commercial space interior design"
                }
              }
            ]
          },
          "sameAs": [
            "https://www.instagram.com/livora.interiors",
            "https://www.facebook.com/LivoraInteriors",
            "https://www.linkedin.com/company/livora-interiors"
          ]
        })}
      </script>

      <div className="min-h-screen">
        <header>
          <Navbar />
        </header>
        
        <main className="pt-16">
          <section aria-label="Hero Section">
            <HeroSection />
          </section>
          
          <section className="py-10 relative overflow-hidden" aria-label="Our Services">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-secondary/3 -z-10"></div>
            <ServicesGrid limit={4} />
          </section>
          
          <section className="py-8 bg-muted/10" aria-label="Client Testimonials">
            <Testimonials />
          </section>
        </main>
        
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;