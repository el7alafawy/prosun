import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhySector } from "@/components/sections/WhySector";
import { Journeys } from "@/components/sections/Journeys";
import { Methodology } from "@/components/sections/Methodology";
import { ValueAdded } from "@/components/sections/ValueAdded";
import { Clients } from "@/components/sections/Clients";
import { Stats } from "@/components/sections/Stats";
import { Founder } from "@/components/sections/Founder";
import { Partners } from "@/components/sections/Partners";
import { CTABand } from "@/components/sections/CTABand";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <About />
        <WhySector />
        <Journeys />
        <Methodology />
        <ValueAdded />
        <Clients />
        <Stats />
        <Founder />
        <Partners />
        <CTABand />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
