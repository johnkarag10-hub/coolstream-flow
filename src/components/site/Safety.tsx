import { ShieldCheck, FlaskConical, FileBadge, Wrench } from "lucide-react";

const blocks = [
  {
    icon: ShieldCheck,
    title: "Safety profile",
    points: [
      "High flash point fluids (210–315 °C)",
      "Non-conductive, non-flammable in operating conditions",
      "Low-toxicity formulations with full SDS coverage",
    ],
  },
  {
    icon: FileBadge,
    title: "Compliance",
    points: [
      "REACH and TSCA registered components",
      "Tested to ASTM D877 / IEC 60156 (dielectric)",
      "Aligned with OCP Immersion guidance",
    ],
  },
  {
    icon: Wrench,
    title: "Material compatibility",
    points: [
      "Validated against common server BOMs",
      "Compatible with FR4, copper, aluminium, solder mask",
      "Approved gasket and cable jacket lists provided",
    ],
  },
  {
    icon: FlaskConical,
    title: "QA & traceability",
    points: [
      "Batch-level CoA and lot traceability",
      "On-site fluid analysis programme",
      "Long-term ageing and oxidation data on request",
    ],
  },
];

const Safety = () => (
  <section
    id="safety"
    className="py-20 md:py-28 bg-secondary/20 border-y border-border"
    aria-labelledby="safety-title"
  >
    <div className="container">
      <div className="max-w-2xl mb-12 md:mb-14">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
          Safety, compliance & compatibility
        </p>
        <h2
          id="safety-title"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
        >
          Engineered to <span className="text-gradient-primary">deploy with confidence</span>.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {blocks.map((b) => (
          <article
            key={b.title}
            className="rounded-2xl border border-border bg-card-gradient p-6 md:p-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-fluid/10 border border-primary/20">
                <b.icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </span>
              <h3 className="font-display text-lg font-semibold">{b.title}</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {b.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Safety;
