import { Zap, Volume2, Leaf, Gauge } from "lucide-react";

const items = [
  { icon: Zap, title: "Up to 45% lower PUE", desc: "Eliminate chillers and CRAC units. Direct heat capture means radically lower energy overhead." },
  { icon: Gauge, title: "10× rack density", desc: "Submerge GPUs and CPUs running at peak load — no thermal throttling, no airflow constraints." },
  { icon: Volume2, title: "Silent operation", desc: "Fanless servers in sealed tanks bring data halls down to a whisper." },
  { icon: Leaf, title: "Biodegradable options", desc: "Synthetic and bio-based fluids meeting strict environmental and dielectric standards." },
];

const ValueProps = () => (
  <section className="py-24 border-y border-border bg-secondary/20">
    <div className="container">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="group rounded-xl bg-card-gradient border border-border p-6 transition-smooth hover:border-primary/40 hover:-translate-y-1 hover:shadow-elegant"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-fluid/10 border border-primary/20 mb-5 group-hover:bg-fluid group-hover:shadow-glow transition-smooth">
              <item.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-smooth" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProps;
