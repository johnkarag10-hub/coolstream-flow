import { Droplets } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 bg-background">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-fluid">
          <Droplets className="h-4 w-4 text-primary-foreground" />
        </span>
        <span className="font-display font-bold">Polarfreeze</span>
        <span className="text-sm text-muted-foreground ml-3">© {new Date().getFullYear()} Irpaso Ltd.</span>
      </div>
      <nav className="flex gap-6 text-sm text-muted-foreground">
        <a href="#products" className="hover:text-foreground transition-smooth">Fluids</a>
        <a href="#performance" className="hover:text-foreground transition-smooth">{"\n"}</a>
        <a href="#contact" className="hover:text-foreground transition-smooth">Contact</a>
      </nav>
    </div>
  </footer>
);

export default Footer;
