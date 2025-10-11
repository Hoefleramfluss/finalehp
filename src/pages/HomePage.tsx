import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Hero from "@/sections/Hero";
import IntroContent from "@/sections/IntroContent";
import Why from "@/sections/Why";
import Functions from "@/sections/Functions";
import Testimonials from "@/sections/Testimonials";
import Security from "@/sections/Security";
import Pricing from "@/sections/Pricing";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import CTA from "@/sections/CTA";
import { copy } from "@/copy";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-night-900 text-white">
      <SEO
        title={copy.site.meta.title}
        description={copy.site.meta.description}
        canonical={copy.site.meta.canonical}
        ogImage={copy.site.meta.ogImage}
        ogUrl="https://www.voxon.app/"
        hreflang={[
          { lang: "de-AT", url: "https://www.voxon.app/" },
          { lang: "de-DE", url: "https://www.voxon.app/" },
          { lang: "de-CH", url: "https://www.voxon.app/" },
          { lang: "x-default", url: "https://www.voxon.app/" },
        ]}
      />
      <Header />
      <main className="relative isolate flex flex-col gap-28">
        <Hero />
        <IntroContent />
        <Why />
        <Functions />
        <Testimonials />
        <Pricing />
        <Security />
        <Contact />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
