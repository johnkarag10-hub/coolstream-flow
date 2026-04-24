import { Button } from "@/components/ui/button";
import { Droplets } from "lucide-react";

const links = [
  { href: "#products", label: "Fluids" },
  { href: "#industries", label: "Industries" },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-fluid shadow-glow">
            <Droplets className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="tracking-tight">Polarfreeze</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button asChild variant="default" size="sm" className="bg-fluid text-primary-foreground hover:opacity-90 shadow-glow">
          <a href="#contact">Request a quote</a>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
