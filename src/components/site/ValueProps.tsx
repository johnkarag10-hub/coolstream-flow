import { Zap, Volume2, Leaf, Gauge, Thermometer, Recycle } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Lower PUE",
    desc: "Eliminate chillers and CRAC units. Direct-to-fluid heat capture targets PUE down to 1.03–1.10 in suitable deployments.",
  },
  {
    icon: Gauge,
    title: "Higher rack density",
    desc: "Run modern GPU and CPU platforms at sustained TDP without thermal throttling or airflow constraints.",
  },
  {
    icon: Thermometer,
    title: "Heat reuse ready",
    desc: "High-grade outlet temperatures make captured heat suitable for district heating and process loops.",
  },
  {
    icon: Volume2,
    title: "Silent operation",
    desc: "Fanless servers in sealed tanks reduce data hall noise to ambient levels.",
  },
  {
    icon: Leaf,
    title: "Lower water footprint",
    desc: "Closed-loop dielectric systems avoid evaporative water consumption typical of cooling towers.",
  },
  {
    icon: Recycle,
    title: "Extended hardware life",
    desc: "Stable operating temperatures and an oxygen-free environment can extend component MTBF.",
  },
];

const ValueProps = () => (
  <section
    id="why"
    className="py-20 md:py-28 border-y border-border bg-secondary/20"
    aria-labelledby="why-title"
  >
    <div className="container">
      <div className="max-w-3xl mb-12 md:mb-16">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
          Why immersion cooling
        </p>
        <h2 id="why-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Built for the thermal reality of <span className="text-gradient-primary">AI workloads</span>.
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground">
          Air cooling is reaching its physical limits. Polarfreeze HydroCore fluids let operators
          step past those limits with proven, serviceable, dielectric immersion technology.
        </p>
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {items.map((item) => (
          <li
            key={item.title}
            className="group rounded-xl bg-card-gradient border border-border p-6 transition-smooth hover:border-primary/40 hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-fluid/10 border border-primary/20 mb-5 group-hover:bg-fluid group-hover:shadow-glow transition-smooth">
              <item.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-smooth" aria-hidden="true" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ValueProps;
