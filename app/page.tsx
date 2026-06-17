import AutoScreenCaseStudy from "@/components/AutoScreenCaseStudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProcessPricing from "@/components/ProcessPricing";
import Services from "@/components/Services";
import Strengths from "@/components/Strengths";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-[72px]">
        <Hero />
        <Strengths />
        <Services />
        <Works />
        <AutoScreenCaseStudy />
        <ProcessPricing />
        <div
          className="flex min-h-[calc(100dvh-64px)] flex-col bg-surface-container md:min-h-[calc(100dvh-72px)]"
          id="contact"
        >
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
