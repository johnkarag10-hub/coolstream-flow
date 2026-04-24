import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import fluid from "@/assets/fluid-texture.jpg";

const products = [
  {
    name: "HydroCore SP-1",
    type: "Single-phase synthetic",
    desc: "Ultra-pure synthetic hydrocarbon for single-phase immersion. Industry-leading thermal conductivity and material compatibility.",
    specs: [
      ["Viscosity @ 40°C", "9.2 cSt"],
      ["Dielectric strength", "> 45 kV"],
      ["Flash point", "210°C"],
    ],
  },
  {
    name: "HydroCore TP-2",
    type: "Two-phase engineered",
    desc: "Low-boiling-point engineered fluid for two-phase systems. Phase-change cooling for the densest AI/HPC workloads.",
    specs: [
      ["Boiling point", "49°C"],
      ["GWP", "< 1"],
      ["Heat of vaporization", "88 kJ/kg"],
    ],
  },
  {
    name: "HydroCore BIO-X",
    type: "Bio-based dielectric",
    desc: "Renewably sourced ester fluid. Biodegradable, non-toxic, and certified for sustainable data center deployments.",
    specs: [
      ["Biodegradability", "98% (OECD 301B)"],
      ["Dielectric strength", "> 50 kV"],
      ["Flash point", "315°C"],
    ],
  },
];

const Products = () => (
  <section id="products" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 -z-10 opacity-20">
      <img src={fluid} alt="" loading="lazy" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/80" />
    </div>
    <div className="container">
      <div className="max-w-2xl mb-16">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Our fluids</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          Three fluids. <span className="text-gradient-primary">Every workload.</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          From single-phase efficiency to two-phase boiling for the most extreme thermal loads — formulated, tested, and shipped at hyperscale volumes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col rounded-2xl bg-card-gradient border border-border p-8 transition-smooth hover:border-primary/40 hover:shadow-elegant"
          >
            <p className="text-xs font-medium text-primary uppercase tracking-wider">{p.type}</p>
            <h3 className="mt-3 font-display text-2xl font-bold">{p.name}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

            <dl className="mt-6 space-y-2 border-t border-border pt-5">
              {p.specs.map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium">{v}</dd>
                </div>
              ))}
            </dl>

            <Button asChild variant="ghost" className="mt-8 justify-between text-primary hover:text-primary hover:bg-primary/10">
              <a href="#contact">
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
