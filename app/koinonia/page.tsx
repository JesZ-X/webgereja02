import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import KoinoniaSection from "@/components/KoinoniaSection";

export const metadata: Metadata = {
  title: "Koinonia",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <KoinoniaSection />
      </main>
    </>
  );
}