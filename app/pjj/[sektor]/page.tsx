import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

type Props = {
  params: { sektor: string };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `PJJ Sektor ${params.sektor}`,
    description: `Informasi dan kegiatan PJJ Sektor ${params.sektor} GBKP RG Cililitan.`,
  };
}
