import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Why from "@/sections/Why";
import Functions from "@/sections/Functions";
import Testimonials from "@/sections/Testimonials";
import Pricing from "@/sections/Pricing";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import CTA from "@/sections/CTA";

function App() {
  return (
    <div className="relative min-h-screen bg-night-900 text-white">
      <Header />
      <main className="relative isolate flex flex-col gap-28">
        <Hero />
        <Why />
        <Functions />
        <Testimonials />
        <Pricing />
        <Contact />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
