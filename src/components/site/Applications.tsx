import { Cpu, Server, Bitcoin, Cloud, Radio, FlaskConical } from "lucide-react";

const items = [
  { icon: Cpu, name: "AI & HPC", desc: "GPU clusters operating at sustained 100 kW+ per rack." },
  { icon: Cloud, name: "Hyperscale", desc: "Cloud platforms targeting industry-leading PUE and density." },
  { icon: Server, name: "Colocation", desc: "Multi-tenant facilities offering high-density immersion suites." },
  { icon: Bitcoin, name: "Crypto mining", desc: "Silent, dense and efficient ASIC and GPU mining farms." },
  { icon: Radio, name: "Edge & telco", desc: "Sealed deployments without air handling or active filtration." },
  { icon: FlaskConical, name: "Research & HPC labs", desc: "National labs and supercomputing centres." },
];

const Applications = () => (
  <section
    id="applications"
    className="py-20 md:py-28"
    aria-labelledby="applications-title"
  >
    <div className="container">
      <div className="max-w-2xl mb-12 md:mb-14">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Applications</p>
        <h2
          id="applications-title"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
        >
          Trusted across the <span className="text-gradient-primary">compute spectrum</span>.
        </h2>
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i) => (
          <li
            key={i.name}
            className="flex items-start gap-4 rounded-xl border border-border bg-card-gradient p-6 hover:border-primary/40 transition-smooth"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-fluid/10 border border-primary/20">
              <i.icon className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display font-semibold">{i.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{i.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Applications;
