import AboutView from "@/components/about";
import ExperienceView from "@/components/experience";
import InfoFixedRight from "@/components/info-fixed";
import InfoFixedLeft from "@/components/info-fixed-l";
import PresentationView from "@/components/presentation";
import ProyectsView from "@/components/proyects";
import Navbar from "@/components/nabard";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <section className="w-1/2 h-screen sticky top-0 flex flex-col">
        <PresentationView />
        <Navbar />
      </section>
        <InfoFixedLeft />

      <section className="w-1/2 h-screen overflow-y-auto">
        <AboutView />
        <ExperienceView />
        <ProyectsView />
        <InfoFixedRight />
      </section>
    </main>
  )
}
