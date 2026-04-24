import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import ValueProps from "@/components/site/ValueProps";
import Products from "@/components/site/Products";
import HowItWorks from "@/components/site/HowItWorks";
import Performance from "@/components/site/Performance";
import Industries from "@/components/site/Industries";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ValueProps />
      <Products />
      <HowItWorks />
      <Performance />
      <Industries />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
