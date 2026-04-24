const steps = [
  { n: "01", title: "Consult & specify", desc: "We assess workload density, rack design, and sustainability targets to recommend the right fluid chemistry." },
  { n: "02", title: "Sample & validate", desc: "Receive certified samples with full datasheets. Test in your lab or pilot tank with our engineers on-site." },
  { n: "03", title: "Bulk supply", desc: "Drum, IBC, or ISO-tank delivery worldwide. Logistics, customs, and on-site fill handled end-to-end." },
  { n: "04", title: "Lifecycle support", desc: "Periodic fluid analysis, top-ups, reclamation and recycling — keeping your immersion loop at spec for years." },
];

const HowItWorks = () => (
  <section id="how" className="py-24 md:py-32 bg-secondary/20 border-y border-border">
    <div className="container">
      <div className="max-w-2xl mb-16">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">How it works</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          From spec to <span className="text-gradient-primary">supply</span>, end-to-end.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <div key={s.n} className="relative rounded-xl bg-card-gradient border border-border p-7">
            <div className="font-display text-5xl font-bold text-gradient-primary mb-4">{s.n}</div>
            <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
