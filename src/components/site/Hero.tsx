import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero-immersion.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            Engineered for AI-era data centers
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            <span className="text-gradient">Cooling</span>
            <br />
            <span className="text-gradient-primary">reimagined.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
            Polarfreeze supplies premium dielectric immersion cooling fluids to hyperscale and edge data centers worldwide — slashing energy use, silencing fans, and unlocking GPU density.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-fluid text-primary-foreground hover:opacity-90 shadow-elegant">
              <a href="#contact">
                Get a fluid sample <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border bg-secondary/40 hover:bg-secondary">
              <a href="#products">Explore fluids</a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="absolute -inset-6 bg-fluid opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-border">
            <img
              src={hero}
              alt="Server hardware submerged in immersion cooling fluid"
              width={1920}
              height={1280}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 glass rounded-xl px-5 py-4 hidden md:block animate-float">
            <p className="text-xs text-muted-foreground">Energy reduction</p>
            <p className="font-display text-2xl font-bold text-gradient-primary">−45%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
