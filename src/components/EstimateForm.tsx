import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Home, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

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
          <Card className="shadow-[var(--elegant-shadow)] border-2 hover:border-secondary/20 transition-all duration-300">
            <CardHeader className="text-center space-y-4 pb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center mx-auto mb-2 animate-glow">
                <Home className="w-10 h-10 text-secondary" />
              </div>
              <CardTitle className="text-3xl md:text-4xl">Get Your Free Estimate</CardTitle>
              <CardDescription className="text-base md:text-lg">
                Tell us about your space and we'll provide a detailed quote
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 px-6 md:px-8 pb-8">
              {/* Enhanced Progress Indicator */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className={`flex items-center gap-3 transition-all duration-300 ${step >= 1 ? 'scale-110' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    step >= 1 
                      ? 'bg-secondary text-secondary-foreground shadow-[var(--warm-glow)]' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {step > 1 ? <CheckCircle2 className="w-6 h-6" /> : '1'}
                  </div>
                  <span className={`text-sm font-medium transition-colors hidden sm:inline ${
                    step >= 1 ? 'text-secondary' : 'text-muted-foreground'
                  }`}>
                    Select BHK
                  </span>
                </div>
                <div className={`h-1 w-12 md:w-20 rounded-full transition-all duration-500 ${
                  step >= 2 ? 'bg-secondary' : 'bg-border'
                }`} />
                <div className={`flex items-center gap-3 transition-all duration-300 ${step >= 2 ? 'scale-110' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    step >= 2 
                      ? 'bg-secondary text-secondary-foreground shadow-[var(--warm-glow)]' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    2
                  </div>
                  <span className={`text-sm font-medium transition-colors hidden sm:inline ${
                    step >= 2 ? 'text-secondary' : 'text-muted-foreground'
                  }`}>
                    Purpose
                  </span>
                </div>
              </div>

              {/* Step 1: BHK Selection */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <Label className="text-lg font-semibold text-center block">Select Your Home Type</Label>
                  <RadioGroup value={bhk} onValueChange={setBhk} className="space-y-3">
                    {["1 BHK", "2 BHK", "3 BHK", "3+ BHK"].map((option) => (
                      <label
                        key={option}
                        htmlFor={option}
                        className={`flex items-center space-x-4 border-2 rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                          bhk === option
                            ? 'border-secondary bg-secondary/5 shadow-[var(--warm-glow)] scale-[1.02]'
                            : 'border-border hover:border-secondary/50 hover:bg-secondary/5'
                        }`}
                      >
                        <RadioGroupItem value={option} id={option} className="w-5 h-5" />
                        <div className="flex-1">
                          <span className="text-base font-medium">{option}</span>
                        </div>
                        {bhk === option && (
                          <CheckCircle2 className="w-5 h-5 text-secondary animate-scale-in" />
                        )}
                      </label>
                    ))}
                  </RadioGroup>
                  <Button 
                    variant="secondary" 
                    className="w-full mt-8 group" 
                    onClick={() => setStep(2)}
                    disabled={!bhk}
                    size="lg"
                  >
                    Next Step
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              )}

              {/* Step 2: Purpose Selection */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <Label className="text-lg font-semibold text-center block">What's Your Purpose?</Label>
                  <RadioGroup value={purpose} onValueChange={setPurpose} className="space-y-3">
                    {["Move In", "Rent Out", "Renovate"].map((option) => (
                      <label
                        key={option}
                        htmlFor={option}
                        className={`flex items-center space-x-4 border-2 rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                          purpose === option
                            ? 'border-secondary bg-secondary/5 shadow-[var(--warm-glow)] scale-[1.02]'
                            : 'border-border hover:border-secondary/50 hover:bg-secondary/5'
                        }`}
                      >
                        <RadioGroupItem value={option} id={option} className="w-5 h-5" />
                        <div className="flex-1">
                          <span className="text-base font-medium">{option}</span>
                        </div>
                        {purpose === option && (
                          <CheckCircle2 className="w-5 h-5 text-secondary animate-scale-in" />
                        )}
                      </label>
                    ))}
                  </RadioGroup>
                  <div className="flex gap-3 mt-8">
                    <Button 
                      variant="outline" 
                      className="flex-1 group" 
                      onClick={() => setStep(1)}
                      size="lg"
                    >
                      <ArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" />
                      Back
                    </Button>
                    <Button 
                      variant="secondary" 
                      className="flex-1 group" 
                      onClick={handleSubmit}
                      disabled={!purpose}
                      size="lg"
                    >
                      Get Estimate
                      <CheckCircle2 className="ml-2 w-5 h-5" />
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
