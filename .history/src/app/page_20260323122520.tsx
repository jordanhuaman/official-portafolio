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
      <main className="flex min-h-screen">
        <section className="w-1/2 h-screen sticky top-0 flex flex-col justify-between py-10 px-20">
          <PresentationView />
          <InfoFixedLeft />
        </section>
        <section ref={scrollRef} className="w-1/2 h-screen overflow-y-auto">
          <AboutView />
          <ExperienceView />
          <ProyectsView />
          <InfoFixedRight />
        </section>
      </main>
    </ScrollProvider>
  )
}
