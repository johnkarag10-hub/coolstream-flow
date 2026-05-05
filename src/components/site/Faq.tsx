import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the difference between Polarfreeze and HydroCore?",
    a: "Polarfreeze is the company. HydroCore is our product line of dielectric immersion cooling fluids — currently SP-1 (single-phase synthetic), TP-2 (two-phase engineered) and BIO-X (bio-based ester).",
  },
  {
    q: "Can HydroCore fluids be used with my existing servers?",
    a: "In most cases yes. SP-1 is compatible with standard server BOMs including FR4 PCBs, common solder masks and copper. We provide a compatibility list and will validate specific SKUs with you before deployment.",
  },
  {
    q: "What PUE can we realistically expect?",
    a: "Depending on facility design, climate and workload, single-phase HydroCore deployments typically target a PUE in the 1.05–1.15 range. Two-phase systems can go lower. We never guarantee a single number — we model it for your site.",
  },
  {
    q: "How is the fluid maintained over time?",
    a: "We support customers with periodic fluid analysis (moisture, particulates, dielectric strength, oxidation) and offer top-up, filtration and end-of-life recovery programmes.",
  },
  {
    q: "Are HydroCore fluids safe and compliant?",
    a: "Yes. Components are REACH and TSCA registered, fluids have high flash points and low toxicity, and full SDS and CoA documentation accompanies every shipment.",
  },
  {
    q: "What volumes do you supply?",
    a: "From 200 L drums for pilots to ISO tanks for hyperscale fills. We support multi-site rollouts with regional warehousing across EMEA, North America and APAC.",
  },
];

const Faq = () => (
  <section
    id="faq"
    className="py-20 md:py-28 bg-secondary/20 border-y border-border"
    aria-labelledby="faq-title"
  >
    <div className="container max-w-3xl">
      <div className="mb-10 md:mb-12">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">FAQ</p>
        <h2 id="faq-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Questions, <span className="text-gradient-primary">answered</span>.
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left font-display text-base md:text-lg">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default Faq;
