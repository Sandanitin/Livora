import { useEffect } from 'react';

const SEOSitemap = () => {
  useEffect(() => {
    // Create comprehensive sitemap structured data
    const sitemapData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": "https://livora.design/#website",
          "url": "https://livora.design/",
          "name": "Livora Interior Design",
          "description": "Top interior design company in Hyderabad offering residential and commercial interior design services",
          "publisher": {
            "@id": "https://livora.design/#organization"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://livora.design/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "Organization",
          "@id": "https://livora.design/#organization",
          "name": "Livora Interior Design",
          "alternateName": "Livora Interiors",
          "url": "https://livora.design",
          "logo": {
            "@type": "ImageObject",
            "url": "https://livora.design/logo.png",
            "width": 512,
            "height": 512
          },
          "description": "Leading interior design company in Hyderabad specializing in modular kitchens, wardrobes, false ceilings, and custom furniture solutions.",
          "foundingDate": "2020",
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "17.3850",
              "longitude": "78.4867"
            },
            "geoRadius": "50000"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Design Street",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500001",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91 98765 43210",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi", "Telugu"]
          },
          "sameAs": [
            "https://www.facebook.com/livoradesign",
            "https://www.instagram.com/livoradesign",
            "https://www.linkedin.com/company/livoradesign",
            "https://twitter.com/livoradesign"
          ]
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://livora.design/#localbusiness",
          "name": "Livora Interior Design",
          "description": "Top interior design company in Hyderabad offering residential and commercial interior design services",
          "url": "https://livora.design",
          "telephone": "+91 98765 43210",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Design Street",
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
          "openingHours": [
            "Mo-Fr 09:00-19:00",
            "Sa 10:00-18:00",
            "Su Closed"
          ],
          "priceRange": "$$",
          "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "Bank Transfer"],
          "currenciesAccepted": "INR"
        },
        {
          "@type": "WebPage",
          "@id": "https://livora.design/#webpage",
          "url": "https://livora.design/",
          "name": "Home - Livora Interior Design",
          "description": "Best interior designers in Hyderabad. Expert solutions for modular kitchens, wardrobes, false ceilings & custom furniture.",
          "isPartOf": {
            "@id": "https://livora.design/#website"
          },
          "about": {
            "@id": "https://livora.design/#organization"
          },
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://livora.design/hero-interior.jpg",
            "width": 1920,
            "height": 1080
          },
          "dateModified": new Date().toISOString()
        },
        {
          "@type": "WebPage",
          "@id": "https://livora.design/about#webpage",
          "url": "https://livora.design/about",
          "name": "About Us - Livora Interior Design",
          "description": "Learn about Livora Interior Design - our story, mission, values, and why we're the best interior designers in Hyderabad.",
          "isPartOf": {
            "@id": "https://livora.design/#website"
          },
          "about": {
            "@id": "https://livora.design/#organization"
          },
          "dateModified": new Date().toISOString()
        },
        {
          "@type": "WebPage",
          "@id": "https://livora.design/services#webpage",
          "url": "https://livora.design/services",
          "name": "Services - Livora Interior Design",
          "description": "Complete interior design services in Hyderabad including modular kitchens, wardrobes, false ceilings, and custom furniture.",
          "isPartOf": {
            "@id": "https://livora.design/#website"
          },
          "about": {
            "@id": "https://livora.design/#organization"
          },
          "dateModified": new Date().toISOString()
        },
        {
          "@type": "WebPage",
          "@id": "https://livora.design/contact#webpage",
          "url": "https://livora.design/contact",
          "name": "Contact - Livora Interior Design",
          "description": "Contact Livora Interior Design for your interior design needs. Visit our showroom in Hyderabad or call us for consultation.",
          "isPartOf": {
            "@id": "https://livora.design/#website"
          },
          "about": {
            "@id": "https://livora.design/#organization"
          },
          "dateModified": new Date().toISOString()
        },
        {
          "@type": "Service",
          "@id": "https://livora.design/services/modular-kitchens#service",
          "name": "Modular Kitchen Design",
          "description": "Custom modular kitchen designs with modern layouts, smart storage solutions, and premium finishes.",
          "provider": {
            "@id": "https://livora.design/#organization"
          },
          "serviceType": "Interior Design",
          "category": "Kitchen Design",
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
        {
          "@type": "Service",
          "@id": "https://livora.design/services/wardrobes#service",
          "name": "Wardrobe Design",
          "description": "Custom wardrobe designs with optimal storage, elegant finishes, and space-efficient solutions.",
          "provider": {
            "@id": "https://livora.design/#organization"
          },
          "serviceType": "Interior Design",
          "category": "Storage Solutions",
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
        {
          "@type": "Service",
          "@id": "https://livora.design/services/false-ceilings#service",
          "name": "False Ceiling Design",
          "description": "Modern false ceiling designs with lighting integration, acoustic solutions, and aesthetic appeal.",
          "provider": {
            "@id": "https://livora.design/#organization"
          },
          "serviceType": "Interior Design",
          "category": "Ceiling Design",
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
        {
          "@type": "Service",
          "@id": "https://livora.design/services/custom-furniture#service",
          "name": "Custom Furniture Design",
          "description": "Bespoke furniture designs tailored to your space, style, and functional requirements.",
          "provider": {
            "@id": "https://livora.design/#organization"
          },
          "serviceType": "Interior Design",
          "category": "Furniture Design",
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
        {
          "@type": "Service",
          "@id": "https://livora.design/services/tv-units#service",
          "name": "TV Unit Design",
          "description": "Stylish TV unit designs with storage solutions, cable management, and modern aesthetics.",
          "provider": {
            "@id": "https://livora.design/#organization"
          },
          "serviceType": "Interior Design",
          "category": "Entertainment Units",
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
        {
          "@type": "Service",
          "@id": "https://livora.design/services/vanity-units#service",
          "name": "Vanity Unit Design",
          "description": "Elegant vanity unit designs for bathrooms and bedrooms with smart storage and premium finishes.",
          "provider": {
            "@id": "https://livora.design/#organization"
          },
          "serviceType": "Interior Design",
          "category": "Bathroom Design",
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
        {
          "@type": "BreadcrumbList",
          "@id": "https://livora.design/#breadcrumb",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://livora.design"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://livora.design/about/#breadcrumb",
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
              "name": "About",
              "item": "https://livora.design/about"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://livora.design/services/#breadcrumb",
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
              "name": "Services",
              "item": "https://livora.design/services"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://livora.design/contact/#breadcrumb",
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
      ]
    };

    // Add sitemap structured data script
    let sitemapScript = document.querySelector('script[type="application/ld+json"][data-sitemap="true"]') as HTMLScriptElement;
    if (!sitemapScript) {
      sitemapScript = document.createElement('script') as HTMLScriptElement;
      sitemapScript.type = 'application/ld+json';
      sitemapScript.setAttribute('data-sitemap', 'true');
      document.head.appendChild(sitemapScript);
    }
    sitemapScript.textContent = JSON.stringify(sitemapData);

    // Add sitemap meta tags
    const updateMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(name.startsWith('og:') ? 'property' : 'name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMetaTag('sitemap', 'https://livora.design/sitemap.xml');
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

  }, []);

  return null;
};

export default SEOSitemap;
