const steps = [
  { n: "\n", title: "\n", desc: "\n" },
  { n: "\n", title: "\n", desc: "\n" },
  { n: "\n", title: "\n", desc: "\n" },
  { n: "\n", title: "\n", desc: "\n" },
];

const HowItWorks = () => (
  <section id="how" className="py-24 md:py-32 bg-secondary/20 border-y border-border">
    <div className="container">
      <div className="max-w-2xl mb-16">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3" />
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="relative rounded-xl bg-card-gradient border border-border p-7 px-0 py-0 my-0">
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
