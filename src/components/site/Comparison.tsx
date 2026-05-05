import { Check, Minus } from "lucide-react";

const rows: Array<{ label: string; sp1: string | boolean; tp2: string | boolean; bio: string | boolean }> = [
  { label: "Cooling mode", sp1: "Single-phase", tp2: "Two-phase", bio: "Single-phase" },
  { label: "Target rack density", sp1: "Up to ~80 kW", tp2: "100 kW+", bio: "Up to ~60 kW" },
  { label: "Dielectric strength", sp1: "> 45 kV", tp2: "> 40 kV", bio: "> 50 kV" },
  { label: "Biodegradable", sp1: false, tp2: false, bio: true },
  { label: "Low-GWP", sp1: true, tp2: true, bio: true },
  { label: "Heat-reuse friendly", sp1: true, tp2: true, bio: true },
  { label: "Retrofit suitability", sp1: "Excellent", tp2: "Greenfield", bio: "Good" },
];

const Cell = ({ v }: { v: string | boolean }) => {
  if (v === true) return <Check className="h-4 w-4 text-primary mx-auto" aria-label="Yes" />;
  if (v === false) return <Minus className="h-4 w-4 text-muted-foreground mx-auto" aria-label="No" />;
  return <span className="text-sm">{v}</span>;
};

const Comparison = () => (
  <section id="compare" className="py-20 md:py-28" aria-labelledby="compare-title">
    <div className="container">
      <div className="max-w-2xl mb-10">
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
          Product line comparison
        </p>
        <h2 id="compare-title" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Pick the fluid that fits the <span className="text-gradient-primary">deployment</span>.
        </h2>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border bg-card-gradient">
        <table className="w-full text-sm min-w-[640px]">
          <thead>
            <tr className="border-b border-border bg-secondary/30">
              <th scope="col" className="text-left font-medium text-muted-foreground px-5 py-4">
                Attribute
              </th>
              <th scope="col" className="font-display font-semibold px-5 py-4">HydroCore SP-1</th>
              <th scope="col" className="font-display font-semibold px-5 py-4 text-primary">
                HydroCore TP-2
              </th>
              <th scope="col" className="font-display font-semibold px-5 py-4">HydroCore BIO-X</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="border-b border-border/60 last:border-0">
                <th scope="row" className="text-left font-medium text-muted-foreground px-5 py-4">
                  {r.label}
                </th>
                <td className="text-center px-5 py-4"><Cell v={r.sp1} /></td>
                <td className="text-center px-5 py-4 bg-primary/5"><Cell v={r.tp2} /></td>
                <td className="text-center px-5 py-4"><Cell v={r.bio} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Indicative values. Final selection should be made with our engineering team based on
        workload profile, facility constraints and regulatory environment.
      </p>
    </div>
  </section>
);

export default Comparison;
