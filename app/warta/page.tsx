import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WartaSection from "@/components/WartaSection";

export const metadata: Metadata = {
  title: "Warta",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <WartaSection/>
      </main>
    </>
  );
}