import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DiakoniaSection from "@/components/DiakoniaSection";

export const metadata: Metadata = {
  title: "Diakonia",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <DiakoniaSection/>
      </main>
    </>
  );
}