import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Cpu, Gauge } from "lucide-react";
import hero from "@/assets/hero-immersion.jpg";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-hero pt-32 pb-20 md:pt-40 md:pb-28"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" aria-hidden="true" />
            Engineered for AI-era data centers
          </div>

          <h1
            id="hero-title"
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-gradient">Immersion cooling,</span>
            <br />
            <span className="text-gradient-primary">industrialised.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Polarfreeze supplies the <strong className="text-foreground">HydroCore</strong> line of
            dielectric immersion cooling fluids — single-phase, two-phase and bio-based — to
            hyperscale, AI, colocation and edge operators worldwide. Engineered to lower PUE,
            unlock GPU density, and extend hardware life.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Button
              asChild
              size="lg"
              className="bg-fluid text-primary-foreground hover:opacity-90 shadow-elegant"
            >
              <a href="#contact">
                Request a fluid sample <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border bg-secondary/40 hover:bg-secondary"
            >
              <a href="#products">Explore HydroCore fluids</a>
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 max-w-xl">
            {[
              { icon: Gauge, k: "Up to −45%", v: "energy overhead*" },
              { icon: Cpu, k: "100 kW+", v: "per rack capable" },
              { icon: ShieldCheck, k: "ASTM / IEC", v: "tested fluids" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl border border-border bg-secondary/30 p-3 sm:p-4">
                <s.icon className="h-4 w-4 text-primary mb-2" aria-hidden="true" />
                <dt className="font-display text-lg sm:text-xl font-bold text-gradient-primary">
                  {s.k}
                </dt>
                <dd className="text-[11px] sm:text-xs text-muted-foreground mt-1">{s.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-[11px] text-muted-foreground/70">
            *Typical target vs. legacy air-cooled deployments. Actual results depend on workload,
            climate and facility design.
          </p>
        </div>

        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="absolute -inset-6 bg-fluid opacity-20 blur-3xl rounded-full" aria-hidden="true" />
          <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-border">
            <img
              src={hero}
              alt="Server hardware submerged in HydroCore dielectric immersion cooling fluid"
              width={1920}
              height={1280}
              loading="eager"
              fetchPriority="high"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
