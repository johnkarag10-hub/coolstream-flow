import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Request received", { description: "Our team will reach out within one business day." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero" />
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-3xl glass p-8 md:p-12 shadow-elegant">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Let's <span className="text-gradient-primary">cool</span> your next deployment.
            </h2>
            <p className="mt-4 text-muted-foreground">Tell us about your project — we'll send a fluid sample and a tailored proposal.</p>
          </div>

          <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" required placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" required placeholder="Acme Data Centers" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="email">Work email</Label>
              <Input id="email" type="email" required placeholder="jane@acme.com" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="msg">Project details</Label>
              <Textarea id="msg" rows={4} placeholder="Rack density, fluid type of interest, target volumes..." />
            </div>
            <div className="sm:col-span-2 flex justify-end">
              <Button type="submit" size="lg" className="bg-fluid text-primary-foreground hover:opacity-90 shadow-glow">
                Request a quote <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
