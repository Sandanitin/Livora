import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageCircle, 
  Layout, 
  ShoppingCart, 
  Eye, 
  CalendarCheck,
  ArrowRight
} from "lucide-react";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Step {
  step: string;
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  color?: string;
}

const steps: Step[] = [
  {
    step: "Step 1",
    title: "Client Discussion Stage",
    description: "Layout created basis bare-shell floor plate mapped to client requirements",
    icon: MessageCircle,
    color: "from-blue-500 to-blue-700"
  },
  {
    step: "Step 2",
    title: "Space Planning Stage",
    description: "Allows converting 2-D layouts to basic 3-D walkthrough",
    icon: Layout,
    color: "from-emerald-500 to-emerald-700"
  },
  {
    step: "Step 3",
    title: "Product Selection Stage",
    description: "Choose from a one stop portal for curated commercial interior design products and finishes - 2,00,000+ SKUs",
    icon: ShoppingCart,
    color: "from-amber-500 to-orange-600"
  },
  {
    step: "Step 4",
    title: "3D Visualisation Stage",
    description: "Photorealistic 3D walkthrough/video. Real time changeable through market available products",
    icon: Eye,
    color: "from-purple-500 to-purple-700"
  },
  {
    step: "Step 5",
    title: "Execution Stage",
    description: "A one stop dashboard to track progress of your commercial space",
    icon: CalendarCheck,
    color: "from-rose-500 to-pink-600"
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Hasslefree & Convenient Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined approach ensures a seamless interior design experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="overflow-hidden border border-muted hover:border-secondary/50 transition-all duration-500 bg-card/90 backdrop-blur-sm group shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative">
                  {step.color && (
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${step.color}`}></div>
                  )}
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                    {step.step}
                  </div>
                  
                  <CardHeader className="pb-4 pt-6">
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                        step.color ? `bg-gradient-to-br ${step.color}` : "bg-secondary/10 border-2 border-secondary/20"
                      }`}>
                        <Icon className={`w-8 h-8 ${step.color ? "text-white" : "text-secondary"}`} />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-center text-primary">{step.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center pb-6">
                    <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="group/button text-xs py-1.5 h-8 border-secondary/30 hover:border-secondary hover:bg-secondary/5"
                    >
                      Learn More
                      <ArrowRight className="ml-1 w-3 h-3 transition-transform duration-300 group-hover/button:translate-x-0.5" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="premium" size="lg" className="group text-base font-semibold px-6 py-5 rounded-lg shadow-lg hover:shadow-xl">
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;