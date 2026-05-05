import { Droplets, Mail, MapPin } from "lucide-react";

const cols = [
  {
    title: "Company",
    links: [
      { href: "#why", label: "Why immersion" },
      { href: "#applications", label: "Applications" },
      { href: "#logistics", label: "Logistics" },
      { href: "#contact", label: "Contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { href: "#products", label: "HydroCore SP-1" },
      { href: "#products", label: "HydroCore TP-2" },
      { href: "#products", label: "HydroCore BIO-X" },
      { href: "#compare", label: "Compare fluids" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#specs", label: "Technical specs" },
      { href: "#safety", label: "Safety & compliance" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Request datasheet" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy policy" },
      { href: "#", label: "Terms of service" },
      { href: "#", label: "Cookie policy" },
      { href: "#", label: "Imprint" },
    ],
  },
];

const Footer = () => (
  <footer className="border-t border-border bg-background pt-16 pb-10" aria-labelledby="footer-title">
    <h2 id="footer-title" className="sr-only">Site footer</h2>
    <div className="container">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-fluid">
              <Droplets className="h-4 w-4 text-primary-foreground" aria-hidden="true" />
            </span>
            <span className="font-display font-bold text-lg">Polarfreeze</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Polarfreeze designs and supplies the HydroCore line of dielectric immersion cooling
            fluids for high-density and AI-era data centers worldwide.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              <a href="mailto:hello@polarfreeze.com" className="hover:text-foreground transition-smooth">
                hello@polarfreeze.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>EMEA · North America · APAC</span>
            </li>
          </ul>
        </div>

        <nav className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6" aria-label="Footer">
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="font-display text-sm font-semibold mb-3">{c.title}</h3>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Polarfreeze · Irpaso Ltd. All rights reserved.</p>
        <p>HydroCore™ is a trademark of Polarfreeze.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
