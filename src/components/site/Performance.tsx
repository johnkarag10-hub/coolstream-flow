import datacenter from "@/assets/datacenter.jpg";

const stats = [
  { v: "\n", l: "\n" },
  { v: "\n", l: "\n" },
  { v: "\n\n\n\n", l: "" },
  { v: "\n", l: "\n" },
];

const Performance = () => (
  <section id="performance" className="py-24 md:py-32">
    <div className="container grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative rounded-2xl overflow-hidden border border-border shadow-elegant">
        <img
          src={datacenter}
          alt="Modern immersion-cooled data center"
          width={1600}
          height={1000}
          loading="lazy"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-primary/20" />
      </div>

      <div>
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">{"\n"}</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          {"\n"}
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          {"\n"}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="rounded-xl border border-border bg-card-gradient p-6">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient-primary">{s.v}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Performance;
