const groups = [
  {
    title: "Thermal",
    rows: [
      ["Operating range", "−20 °C to 90 °C"],
      ["Thermal conductivity", "0.13–0.15 W/m·K"],
      ["Specific heat", "≈ 2.1 kJ/kg·K"],
      ["Density @ 25 °C", "0.79–0.85 g/cm³"],
    ],
  },
  {
    title: "Electrical",
    rows: [
      ["Dielectric strength", "> 40 kV (ASTM D877)"],
      ["Volume resistivity", "> 10¹² Ω·cm"],
      ["Dielectric constant", "≈ 2.0–2.2"],
      ["Dissipation factor", "< 0.001 @ 50 Hz"],
    ],
  },
  {
    title: "Safety & environmental",
    rows: [
      ["Flash point", "210–315 °C"],
      ["GWP", "< 1 (TP-2, BIO-X)"],
      ["ODP", "0"],
      ["Toxicity", "Low — see SDS"],
    ],
  },
];

const Specs = () => (
  <section
    id="specs"
    className="py-20 md:py-28 bg-secondary/20 border-y border-border"
    aria-labelledby="specs-title"
  >
    <div className="container">
      <div className="max-w-2xl mb-10 md:mb-14">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
          Technical specifications
        </p>
        <h2 id="specs-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Tested to the standards your <span className="text-gradient-primary">auditors expect</span>.
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground">
          Indicative ranges across the HydroCore line. Full datasheets and SDS are provided with
          each shipment and on request.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {groups.map((g) => (
          <article
            key={g.title}
            className="rounded-2xl border border-border bg-card-gradient p-6 md:p-7"
          >
            <h3 className="font-display text-lg font-semibold mb-4">{g.title}</h3>
            <dl className="space-y-2.5">
              {g.rows.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-3 text-sm border-b border-border/60 pb-2.5 last:border-0 last:pb-0">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Specs;
