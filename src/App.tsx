import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import SEOSitemap from "./components/SEOSitemap";
import { useEffect } from "react";

const queryClient = new QueryClient();

// SEO Meta Tags Component
const SEOHead = ({ title, description, keywords, canonical }: {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}) => {
  useEffect(() => {
    // Set document title
    document.title = title || "Livora Interior Design | Best Interior Designers in Hyderabad";
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(name.startsWith('og:') ? 'property' : 'name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Essential SEO meta tags
    updateMetaTag('description', description || 'Top interior design company in Hyderabad. Expert designers for modular kitchens, wardrobes, false ceilings & custom furniture. 10+ years experience. Free consultation.');
    updateMetaTag('keywords', keywords || 'interior design Hyderabad, modular kitchen Hyderabad, wardrobe design Hyderabad, false ceiling Hyderabad, custom furniture Hyderabad, best interior designers, home interior design, commercial interior design, Livora Interior Design');
    updateMetaTag('author', 'Livora Interior Design');
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('language', 'English');
    updateMetaTag('geo.region', 'IN-TS');
    updateMetaTag('geo.placename', 'Hyderabad');
    updateMetaTag('geo.position', '17.3850;78.4867');
    updateMetaTag('ICBM', '17.3850,78.4867');
    updateMetaTag('theme-color', '#d4af37');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('charset', 'UTF-8');
    
    // Open Graph tags for social media
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:title', title || 'Livora Interior Design | Best Interior Designers in Hyderabad');
    updateMetaTag('og:description', description || 'Top interior design company in Hyderabad. Expert designers for modular kitchens, wardrobes, false ceilings & custom furniture. 10+ years experience. Free consultation.');
    updateMetaTag('og:url', canonical || 'https://livora.design');
    updateMetaTag('og:site_name', 'Livora Interior Design');
    updateMetaTag('og:image', 'https://livora.design/og-image.jpg');
    updateMetaTag('og:image:width', '1200');
    updateMetaTag('og:image:height', '630');
    updateMetaTag('og:image:alt', 'Livora Interior Design - Modern Interior Design Services in Hyderabad');
    updateMetaTag('og:locale', 'en_IN');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title || 'Livora Interior Design | Best Interior Designers in Hyderabad');
    updateMetaTag('twitter:description', description || 'Top interior design company in Hyderabad. Expert designers for modular kitchens, wardrobes, false ceilings & custom furniture. 10+ years experience. Free consultation.');
    updateMetaTag('twitter:image', 'https://livora.design/twitter-image.jpg');
    updateMetaTag('twitter:site', '@livoradesign');
    updateMetaTag('twitter:creator', '@livoradesign');
    
    // Additional SEO tags
    updateMetaTag('canonical', canonical || 'https://livora.design');
    updateMetaTag('msvalidate.01', 'YOUR_BING_WEBMASTER_TOOLS_CODE');
    updateMetaTag('google-site-verification', 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE');
    updateMetaTag('yandex-verification', 'YOUR_YANDEX_VERIFICATION_CODE');
    
    // Structured Data for Website
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://livora.design#website",
      "url": "https://livora.design/",
      "name": "Livora Interior Design",
      "description": "Top interior design company in Hyderabad offering residential and commercial interior design services",
      "publisher": {
        "@type": "Organization",
        "@id": "https://livora.design#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://livora.design/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };
    
    // Add structured data script
    let schemaScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script') as HTMLScriptElement;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(websiteSchema);
    
    // Add favicon and app icons
    const updateLinkTag = (rel: string, href: string) => {
      let tag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!tag) {
        tag = document.createElement('link') as HTMLLinkElement;
        tag.rel = rel;
        document.head.appendChild(tag);
      }
      tag.href = href;
    };
    
    updateLinkTag('icon', '/favicon.ico');
    updateLinkTag('apple-touch-icon', '/apple-touch-icon.png');
    updateLinkTag('manifest', '/manifest.json');
    
  }, [title, description, keywords, canonical]);

  return null;
};

const App = () => {
  useEffect(() => {
    // Set document head for SEO
    document.title = "Livora Interior Design | Best Interior Designers in Hyderabad";
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(name.startsWith('og:') ? 'property' : 'name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Essential SEO meta tags
    updateMetaTag('description', 'Top interior design company in Hyderabad. Expert designers for modular kitchens, wardrobes, false ceilings & custom furniture. 10+ years experience. Free consultation.');
    updateMetaTag('keywords', 'interior design Hyderabad, modular kitchen Hyderabad, wardrobe design Hyderabad, false ceiling Hyderabad, custom furniture Hyderabad, best interior designers, home interior design, commercial interior design, Livora Interior Design');
    updateMetaTag('author', 'Livora Interior Design');
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('language', 'English');
    updateMetaTag('geo.region', 'IN-TS');
    updateMetaTag('geo.placename', 'Hyderabad');
    updateMetaTag('geo.position', '17.3850;78.4867');
    updateMetaTag('ICBM', '17.3850,78.4867');
    updateMetaTag('theme-color', '#d4af37');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('charset', 'UTF-8');
    
    // Open Graph tags for social media
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:title', 'Livora Interior Design | Best Interior Designers in Hyderabad');
    updateMetaTag('og:description', 'Top interior design company in Hyderabad. Expert designers for modular kitchens, wardrobes, false ceilings & custom furniture. 10+ years experience. Free consultation.');
    updateMetaTag('og:url', 'https://livora.design');
    updateMetaTag('og:site_name', 'Livora Interior Design');
    updateMetaTag('og:image', 'https://livora.design/og-image.jpg');
    updateMetaTag('og:image:width', '1200');
    updateMetaTag('og:image:height', '630');
    updateMetaTag('og:image:alt', 'Livora Interior Design - Modern Interior Design Services in Hyderabad');
    updateMetaTag('og:locale', 'en_IN');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'Livora Interior Design | Best Interior Designers in Hyderabad');
    updateMetaTag('twitter:description', 'Top interior design company in Hyderabad. Expert designers for modular kitchens, wardrobes, false ceilings & custom furniture. 10+ years experience. Free consultation.');
    updateMetaTag('twitter:image', 'https://livora.design/twitter-image.jpg');
    updateMetaTag('twitter:site', '@livoradesign');
    updateMetaTag('twitter:creator', '@livoradesign');
    
    // Additional SEO tags
    updateMetaTag('canonical', 'https://livora.design');
    updateMetaTag('msvalidate.01', 'YOUR_BING_WEBMASTER_TOOLS_CODE');
    updateMetaTag('google-site-verification', 'YOUR_GOOGLE_SEARCH_CONSOLE_CODE');
    updateMetaTag('yandex-verification', 'YOUR_YANDEX_VERIFICATION_CODE');
    
    // Structured Data for Website
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://livora.design#website",
      "url": "https://livora.design/",
      "name": "Livora Interior Design",
      "description": "Top interior design company in Hyderabad offering residential and commercial interior design services",
      "publisher": {
        "@type": "Organization",
        "@id": "https://livora.design#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://livora.design/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };
    
    // Add structured data script
    let schemaScript = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script') as HTMLScriptElement;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(websiteSchema);
    
    // Add favicon and app icons
    const updateLinkTag = (rel: string, href: string) => {
      let tag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!tag) {
        tag = document.createElement('link') as HTMLLinkElement;
        tag.rel = rel;
        document.head.appendChild(tag);
      }
      tag.href = href;
    };
    
    updateLinkTag('icon', '/favicon.ico');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <SEOHead />
          <SEOSitemap />
          <WhatsAppButton />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;