import Navbar from "@/components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PJJ Sektor",
  description:
    "Daftar PJJ Sektor GBKP RG Cililitan beserta kegiatan setiap sektor.",
};


const SEKTOR = ["1", "2", "3"];

export default function PjjPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-4">PJJ Sektor</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {SEKTOR.map((s) => (
            <Link
              key={s}
              href={`/pjj/${s}`}
              className="card p-4 rounded-lg text-center hover:bg-gray-700 transition"
            >
              Sektor {s}
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
