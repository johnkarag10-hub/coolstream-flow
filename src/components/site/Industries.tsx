import { Cpu, Server, Bitcoin, Cloud, Radio, FlaskConical } from "lucide-react";

const items = [
  { icon: Cpu, name: "AI & HPC", desc: "GPU clusters at 100kW+ per rack." },
  { icon: Cloud, name: "Hyperscale", desc: "Cloud providers chasing PUE 1.03." },
  { icon: Server, name: "Colocation", desc: "Tenants demanding higher density." },
  { icon: Bitcoin, name: "Crypto mining", desc: "Silent, dense, efficient ASIC farms." },
  { icon: Radio, name: "Edge & telco", desc: "Sealed deployments, no air handling." },
  { icon: FlaskConical, name: "Research", desc: "National labs and supercomputing." },
];

const Industries = () => (
  <section id="industries" className="py-24 md:py-32 bg-secondary/20 border-y border-border">
    <div className="container">
      <div className="max-w-2xl mb-14">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Industries</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          Trusted across the <span className="text-gradient-primary">compute spectrum</span>.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i) => (
          <div key={i.name} className="flex items-start gap-4 rounded-xl border border-border bg-card-gradient p-6 hover:border-primary/40 transition-smooth">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-fluid/10 border border-primary/20">
              <i.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold">{i.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{i.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
