import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

type Props = {
  params: {
    sektor: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `PJJ Sektor ${params.sektor}`,
    description: `Informasi dan kegiatan PJJ Sektor ${params.sektor} GBKP RG Cililitan.`,
  };
}

export default function PjjSektorPage({ params }: Props) {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 pt-20 pb-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          PJJ Sektor {params.sektor}
        </h1>

        <p className="text-sm text-gray-300">
          Informasi kegiatan dan pelayanan PJJ Sektor {params.sektor}.
        </p>
      </main>
    </>
  );
}
