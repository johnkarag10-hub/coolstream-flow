import { Button } from "@/components/ui/button";
import { ArrowUpRight, Check } from "lucide-react";
import fluid from "@/assets/fluid-texture.jpg";

const products = [
  {
    name: "HydroCore SP-1",
    type: "Single-phase synthetic",
    desc: "Ultra-pure synthetic hydrocarbon for single-phase immersion. Strong thermal conductivity, broad material compatibility and a long service interval.",
    bestFor: ["GPU & CPU servers", "Colocation tanks", "Retrofit deployments"],
    specs: [
      ["Viscosity @ 40°C", "9.2 cSt"],
      ["Dielectric strength", "> 45 kV"],
      ["Flash point", "210 °C"],
      ["Pour point", "−45 °C"],
    ],
  },
  {
    name: "HydroCore TP-2",
    type: "Two-phase engineered",
    desc: "Low-boiling engineered fluid for two-phase systems. Phase-change cooling for the densest AI/HPC workloads where peak heat flux matters most.",
    bestFor: ["High-TDP AI accelerators", "Greenfield 2-phase tanks", "Heat-reuse loops"],
    specs: [
      ["Boiling point", "49 °C"],
      ["GWP", "< 1"],
      ["Heat of vaporisation", "88 kJ/kg"],
      ["ODP", "0"],
    ],
    highlighted: true,
  },
  {
    name: "HydroCore BIO-X",
    type: "Bio-based dielectric",
    desc: "Renewably sourced ester fluid. Biodegradable, low-toxicity, and selected for sustainability-driven and regulated deployments.",
    bestFor: ["ESG-led operators", "Edge & telco sites", "Sensitive environments"],
    specs: [
      ["Biodegradability", "98% (OECD 301B)"],
      ["Dielectric strength", "> 50 kV"],
      ["Flash point", "315 °C"],
      ["Bio content", "≥ 90%"],
    ],
  },
];

const Products = () => (
  <section
    id="products"
    className="py-20 md:py-28 relative overflow-hidden"
    aria-labelledby="products-title"
  >
    <div className="absolute inset-0 -z-10 opacity-15">
      <img src={fluid} alt="" loading="lazy" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/80" />
    </div>

    <div className="container">
      <div className="max-w-2xl mb-12 md:mb-16">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
          The HydroCore product line
        </p>
        <h2
          id="products-title"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
        >
          Three fluids. <span className="text-gradient-primary">Every workload.</span>
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground">
          From single-phase efficiency to two-phase boiling for the most extreme thermal loads,
          HydroCore is formulated, tested and shipped at hyperscale volumes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {products.map((p) => (
          <article
            key={p.name}
            className={`group flex flex-col rounded-2xl bg-card-gradient border p-7 sm:p-8 transition-smooth hover:border-primary/40 hover:shadow-elegant ${
              p.highlighted ? "border-primary/50 shadow-glow" : "border-border"
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-primary uppercase tracking-wider">{p.type}</p>
              {p.highlighted && (
                <span className="text-[10px] font-semibold uppercase tracking-wider rounded-full bg-primary/15 text-primary px-2 py-0.5">
                  Flagship
                </span>
              )}
            </div>
            <h3 className="mt-3 font-display text-2xl font-bold">{p.name}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

            <ul className="mt-5 space-y-1.5">
              {p.bestFor.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>

            <dl className="mt-6 space-y-2 border-t border-border pt-5">
              {p.specs.map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm gap-3">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium text-right">{v}</dd>
                </div>
              ))}
            </dl>

            <Button
              asChild
              variant="ghost"
              className="mt-7 justify-between text-primary hover:text-primary hover:bg-primary/10"
            >
              <a href="#contact" aria-label={`Request datasheet for ${p.name}`}>
                Request datasheet <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
