import datacenter from "@/assets/immersion-cooling.jpg";

const Performance = () => (
  <section id="performance" className="pt-24 md:pt-32 pb-0">
    <div className="container">
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
    </div>
  </section>
);

export default Performance;
