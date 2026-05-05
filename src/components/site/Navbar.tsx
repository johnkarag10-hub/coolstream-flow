import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Droplets, Menu, X } from "lucide-react";

const links = [
  { href: "#why", label: "Why immersion" },
  { href: "#products", label: "HydroCore fluids" },
  { href: "#specs", label: "Specs" },
  { href: "#applications", label: "Applications" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "glass shadow-elegant" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold" aria-label="Polarfreeze home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-fluid shadow-glow">
            <Droplets className="h-4 w-4 text-primary-foreground" aria-hidden="true" />
          </span>
          <span className="tracking-tight">Polarfreeze</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" className="bg-fluid text-primary-foreground hover:opacity-90 shadow-glow">
            <a href="#contact">Request a quote</a>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden grid h-10 w-10 place-items-center rounded-md border border-border bg-secondary/40 text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="container py-4 flex flex-col gap-1" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-sm text-muted-foreground hover:text-foreground border-b border-border/60"
              >
                {l.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-3 bg-fluid text-primary-foreground hover:opacity-90">
              <a href="#contact" onClick={() => setOpen(false)}>
                Request a quote
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
