import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import QuickLinks from "@/components/QuickLinks";
import AboutSection from "@/components/AboutSection";
import KoinoniaSection from "@/components/KoinoniaSection";
import MarturiaSection from "@/components/MarturiaSection";
import DiakoniaSection from "@/components/DiakoniaSection";
import PjjSection from "@/components/PjjSection";
import WartaSection from "@/components/WartaSection";
import MajelisSection from "@/components/MajelisSection";
import InfoSection from "@/components/InfoSection";

export const metadata: Metadata = {
  title: "Beranda",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <QuickLinks />

      {/* PENTING: padding-top */}
      <main className="max-w-7xl mx-auto px-4 pt-20 sm:pt-24 pb-10">
        <AboutSection />
        <KoinoniaSection />
        <MarturiaSection />
        <DiakoniaSection />
        <PjjSection />
        <WartaSection />
        <MajelisSection />
        <InfoSection />
      </main>
    </>
  );
}

