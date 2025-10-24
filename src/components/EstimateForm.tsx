import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Home, CheckCircle2 } from "lucide-react";

const EstimateForm = () => {
  const [step, setStep] = useState(1);
  const [bhk, setBhk] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSubmit = () => {
    if (!bhk || !purpose) {
      toast.error("Please select all options");
      return;
    }
    toast.success("Thank you! We'll contact you soon with your estimate.", {
      description: `${bhk} for ${purpose}`,
    });
    // Reset form
    setBhk("");
    setPurpose("");
    setStep(1);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-[var(--elegant-shadow)]">
            <CardHeader className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-3xl">Get Your Free Estimate</CardTitle>
              <CardDescription className="text-base">
                Tell us about your space and we'll provide a detailed quote
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Progress Indicator */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className={`flex items-center gap-2 ${step >= 1 ? 'text-secondary' : 'text-muted-foreground'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-secondary text-secondary-foreground' : 'bg-muted'}`}>
                    {step > 1 ? <CheckCircle2 className="w-5 h-5" /> : '1'}
                  </div>
                  <span className="text-sm font-medium">Select BHK</span>
                </div>
                <div className={`h-px w-16 ${step >= 2 ? 'bg-secondary' : 'bg-border'}`} />
                <div className={`flex items-center gap-2 ${step >= 2 ? 'text-secondary' : 'text-muted-foreground'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-secondary text-secondary-foreground' : 'bg-muted'}`}>
                    2
                  </div>
                  <span className="text-sm font-medium">Purpose</span>
                </div>
              </div>

              {/* Step 1: BHK Selection */}
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right duration-300">
                  <Label className="text-base font-semibold">Select Your Home Type</Label>
                  <RadioGroup value={bhk} onValueChange={setBhk}>
                    {["1 BHK", "2 BHK", "3 BHK", "3+ BHK"].map((option) => (
                      <div
                        key={option}
                        className="flex items-center space-x-3 border border-border rounded-lg p-4 hover:border-secondary hover:bg-secondary/5 transition-colors cursor-pointer"
                      >
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  <Button 
                    variant="secondary" 
                    className="w-full mt-6" 
                    onClick={() => setStep(2)}
                    disabled={!bhk}
                    size="lg"
                  >
                    Next Step
                  </Button>
                </div>
              )}

              {/* Step 2: Purpose Selection */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right duration-300">
                  <Label className="text-base font-semibold">What's Your Purpose?</Label>
                  <RadioGroup value={purpose} onValueChange={setPurpose}>
                    {["Move In", "Rent Out", "Renovate"].map((option) => (
                      <div
                        key={option}
                        className="flex items-center space-x-3 border border-border rounded-lg p-4 hover:border-secondary hover:bg-secondary/5 transition-colors cursor-pointer"
                      >
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="flex-1 cursor-pointer text-base">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  <div className="flex gap-3 mt-6">
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={() => setStep(1)}
                      size="lg"
                    >
                      Back
                    </Button>
                    <Button 
                      variant="secondary" 
                      className="w-full" 
                      onClick={handleSubmit}
                      disabled={!purpose}
                      size="lg"
                    >
                      Get Estimate
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EstimateForm;
