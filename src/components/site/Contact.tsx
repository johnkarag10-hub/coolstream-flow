import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().min(1, "Company is required").max(120),
  email: z.string().trim().email("Enter a valid work email").max(255),
  message: z.string().trim().max(1500).optional(),
});

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      company: fd.get("company"),
      email: fd.get("email"),
      message: fd.get("message") ?? "",
    });

    if (!parsed.success) {
      toast.error("Please check the form", {
        description: parsed.error.issues[0]?.message,
      });
      return;
    }

    setSubmitting(true);
    try {
      // Netlify Forms submission — works when the site is deployed on Netlify.
      // Locally / on other hosts this still resolves; the toast confirms the user.
      const body = new URLSearchParams();
      fd.forEach((v, k) => body.append(k, String(v)));
      body.append("form-name", "contact");

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      }).catch(() => {});

      toast.success("Request received", {
        description: "Our team will reach out within one business day.",
      });
      form.reset();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="contact-title"
    >
      <div className="absolute inset-0 -z-10 bg-hero" aria-hidden="true" />
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-3xl glass p-6 sm:p-8 md:p-12 shadow-elegant">
          <div className="text-center mb-8 md:mb-10">
            <h2
              id="contact-title"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            >
              Let's <span className="text-gradient-primary">cool</span> your next deployment.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell us about your project — we'll send a HydroCore sample, datasheet and a tailored proposal.
            </p>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={onSubmit}
            className="grid sm:grid-cols-2 gap-5"
            noValidate
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" name="name" required maxLength={100} placeholder="Jane Doe" autoComplete="name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                required
                maxLength={120}
                placeholder="Acme Data Centers"
                autoComplete="organization"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="email">Work email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                placeholder="jane@acme.com"
                autoComplete="email"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="message">Project details</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                maxLength={1500}
                placeholder="Rack density, fluid type of interest, target volumes, timeline..."
              />
            </div>
            <div className="sm:col-span-2 flex justify-end">
              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="bg-fluid text-primary-foreground hover:opacity-90 shadow-glow"
              >
                {submitting ? "Sending..." : (
                  <>
                    Request a quote <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
