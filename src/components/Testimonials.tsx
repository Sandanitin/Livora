import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift border-2 border-transparent hover:border-secondary/20 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;