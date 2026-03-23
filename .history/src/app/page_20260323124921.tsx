'use client';

import AboutView from "@/components/about";
import ExperienceView from "@/components/experience";
import InfoFixedRight from "@/components/info-fixed";
import InfoFixedLeft from "@/components/info-fixed-l";
import PresentationView from "@/components/presentation";
import ProyectsView from "@/components/proyects";
import Navbar from "@/components/nabard";
import { ScrollProvider } from "@/components/scroll-context";
import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollProvider scrollRef={scrollRef}>
      <main className="flex flex-col md:flex-row min-h-screen mx-auto max-w-screen-xl md:px-0 pd-10">
        <section className="w-full md:w-1/2 md:sticky md:top-0 md:h-screen md:flex md:flex-col md:justify-between py-20">
          <PresentationView />
          <InfoFixedLeft />
        </section>
        <section ref={scrollRef} className="w-full md:w-1/2">
          <AboutView />
          <ExperienceView />
          <ProyectsView />
        </section>
      </main>
    </ScrollProvider>
  )
}
