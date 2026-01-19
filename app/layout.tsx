import "./globals.css";

/* === Vendor CSS === */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";

import type { Metadata } from "next";
import AOSProvider from "@/components/AOSProvider";

export const metadata: Metadata = {
  title: {
    default: "GBKP RG Cililitan",
    template: "%s | GBKP RG Cililitan",
  },
  description:
    "Website resmi GBKP Runggun Cililitan. Informasi ibadah, pelayanan, dan kegiatan jemaat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        {/* INIT AOS GLOBAL */}
        <AOSProvider />

        {/* PAGE CONTENT */}
        {children}
      </body>
    </html>
  );
}
