import { Globe2, Truck, PackageCheck, Boxes } from "lucide-react";

const stats = [
  { icon: Globe2, k: "30+", v: "countries served" },
  { icon: Truck, k: "ISO tank", v: "and IBC logistics" },
  { icon: PackageCheck, k: "UN approved", v: "packaging" },
  { icon: Boxes, k: "Bulk to drum", v: "flexible volumes" },
];

const Logistics = () => (
  <section id="logistics" className="py-20 md:py-28" aria-labelledby="logistics-title">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Logistics & global supply
          </p>
          <h2
            id="logistics-title"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          >
            From our plant to your <span className="text-gradient-primary">data hall</span>.
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Polarfreeze operates a multi-region supply chain with bonded warehousing and partner
            logistics across EMEA, North America and APAC. Lead times, packaging and Incoterms
            are tailored to each project — including initial fill, top-up and end-of-life
            recovery programmes.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-4">
          {stats.map((s) => (
            <li
              key={s.v}
              className="rounded-2xl border border-border bg-card-gradient p-6"
            >
              <s.icon className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
              <p className="font-display text-2xl font-bold text-gradient-primary">{s.k}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.v}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Logistics;
