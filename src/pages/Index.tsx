import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import ValueProps from "@/components/site/ValueProps";
import Products from "@/components/site/Products";
import Comparison from "@/components/site/Comparison";
import Performance from "@/components/site/Performance";
import Specs from "@/components/site/Specs";
import Applications from "@/components/site/Applications";
import Safety from "@/components/site/Safety";
import Logistics from "@/components/site/Logistics";
import Faq from "@/components/site/Faq";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Navbar />
      <div id="main">
        <Hero />
        <ValueProps />
        <Products />
        <Comparison />
        <Performance />
        <Specs />
        <Applications />
        <Safety />
        <Logistics />
        <Faq />
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
