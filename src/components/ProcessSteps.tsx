import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
  return null;
};

export default ProcessSteps;