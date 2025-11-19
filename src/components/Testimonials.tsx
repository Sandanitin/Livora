import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Mrs. Kalpana",
    location: "Amberpet, Hyderabad",
    rating: 5,
    text: "The team at Livora transformed my home with exceptional attention to detail. Their design ideas were both modern and functional.",
  },
  {
    name: "Mr. Krishna",
    location: "Uppal, Hyderabad",
    rating: 5,
    text: "Outstanding workmanship and professional service. They delivered my project on time and within the estimated budget.",
  },
  {
    name: "Mrs. Vasantha",
    location: "Dilsukhnagar, Hyderabad",
    rating: 5,
    text: "Very satisfied with the quality of materials and the team's commitment to perfection. My home looks exactly as I envisioned.",
  },
  {
    name: "Mr. Harikrishna",
    location: "Patancheru, Hyderabad",
    rating: 5,
    text: "Excellent communication throughout the project. The team was always available to address my concerns and suggestions.",
  },
  {
    name: "Mrs. Harathi",
    location: "Moulali, Hyderabad",
    rating: 5,
    text: "The interior design exceeded my expectations. The team's creativity and attention to detail made all the difference.",
  },
  {
    name: "Mrs. Santoshi Sandy",
    location: "Malakpet, Hyderabad",
    rating: 5,
    text: "Professional and reliable service. The team completed the work as promised and the results are simply amazing.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      items.push({ ...testimonials[index], originalIndex: index });
    }
    return items;
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AggregateRating",
          "itemReviewed": {
            "@type": "Organization",
            "name": "Livora Interior Design",
            "description": "Professional interior design services in Hyderabad"
          },
          "ratingValue": "5",
          "reviewCount": testimonials.length,
          "bestRating": "5",
          "worstRating": "1",
          "review": testimonials.map(testimonial => ({
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": testimonial.name
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": testimonial.rating,
              "bestRating": "5"
            },
            "reviewBody": testimonial.text,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": testimonial.location.split(', ')[1],
              "addressRegion": "Hyderabad"
            }
          }))
        })}
      </script>

      <section className="py-20 bg-gradient-to-br from-background via-background to-secondary/5 relative overflow-hidden" aria-labelledby="testimonials-heading">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" aria-hidden="true" />
        
        <div className="container mx-auto px-4 relative z-10">
          <header className="text-center mb-16 space-y-4">
            <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-bold text-primary animate-fade-in">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay">
              Don't just take our word for it - hear from our satisfied customers across Hyderabad
            </p>
          </header>

          <div className="relative max-w-6xl mx-auto" role="region" aria-label="Client testimonials carousel">
            {/* Main carousel */}
            <div className="relative h-80 md:h-80 mb-6 md:mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                {getVisibleTestimonials().map((testimonial, index) => {
                  const position = index - 1;
                  const isActive = position === 0;
                  const isLeft = position === -1;
                  const isRight = position === 1;
                  
                  return (
                    <article
                      key={`${testimonial.originalIndex}-${currentIndex}`}
                      className={`absolute transition-all duration-500 ease-in-out ${
                        isActive 
                          ? "z-20 scale-100 opacity-100 translate-x-0" 
                          : isLeft 
                          ? "z-10 scale-85 opacity-60 -translate-x-3/4 md:-translate-x-1/2"
                          : isRight
                          ? "z-10 scale-85 opacity-60 translate-x-3/4 md:translate-x-1/2"
                          : "z-0 scale-75 opacity-0"
                      }`}
                      aria-hidden={!isActive}
                    >
                      <Card className={`w-72 md:w-96 h-60 md:h-72 hover-lift border-2 ${
                        isActive ? "border-secondary/30 shadow-2xl bg-gradient-to-br from-card to-card/95" : "border-transparent"
                      } transition-all duration-300`}>
                        <CardContent className="p-4 md:p-6 h-full flex flex-col justify-between space-y-3 md:space-y-4">
                          <div className="space-y-3 md:space-y-4">
                            <Quote className="w-6 h-6 md:w-8 md:h-8 text-secondary/30 absolute top-3 right-3 md:top-4 md:right-4" aria-hidden="true" />
                            <div className="flex items-center justify-center gap-1" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                              {Array.from({ length: testimonial.rating }).map((_, i) => (
                                <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-secondary text-secondary animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} aria-hidden="true" />
                              ))}
                            </div>
                            <blockquote className={`text-foreground italic leading-relaxed ${
                              isActive ? "text-sm md:text-lg" : "text-xs md:text-base"
                            } transition-all duration-300`}>
                              <p>&ldquo;{testimonial.text}&rdquo;</p>
                            </blockquote>
                          </div>
                          <footer className="pt-3 md:pt-4 border-t border-border/50">
                            <cite className="font-semibold text-foreground text-sm md:text-base not-italic">{testimonial.name}</cite>
                            <p className="text-xs md:text-sm text-muted-foreground">{testimonial.location}</p>
                          </footer>
                        </CardContent>
                      </Card>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Navigation controls */}
            <nav className="flex items-center justify-between gap-2 md:gap-4 px-2 md:px-0" aria-label="Testimonial navigation">
              <button
                onClick={prevSlide}
                className="p-2 md:p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isAnimating}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-secondary" />
              </button>

              {/* Dots indicator */}
              <div className="flex gap-1.5 md:gap-2 justify-center flex-1" role="tablist" aria-label="Testimonial pages">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-secondary w-4 md:w-8" 
                        : "bg-secondary/30 hover:bg-secondary/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-selected={index === currentIndex}
                    role="tab"
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 md:p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isAnimating}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-secondary" />
              </button>
            </nav>

          </div>

        </div>

        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }
          .animate-fade-in-delay {
            animation: fade-in 0.6s ease-out 0.2s both;
          }
        `}</style>
      </section>
    </>
  );
};

export default Testimonials;