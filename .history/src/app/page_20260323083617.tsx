import AboutView from "@/components/about";
import ExperienceView from "@/components/experience";
import InfoFixedRight from "@/components/info-fixed";
import InfoFixedLeft from "@/components/info-fixed-l";
import PresentationView from "@/components/presentation";
import ProyectsView from "@/components/proyects";
import Navbar from "@/components/nabard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <PresentationView />
      <AboutView />
      <ExperienceView />
      <ProyectsView/>
      <InfoFixedRight />
      <InfoFixedLeft/>
    </main>
  )
}
