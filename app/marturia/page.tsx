import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MarturiaSection from "@/components/MarturiaSection";

export const metadata: Metadata = {
  title: "Marturia",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <MarturiaSection/>
      </main>
    </>
  );
}