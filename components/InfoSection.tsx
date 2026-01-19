import SectionWrapper from "./SectionWrapper";

export default function InfoSection() {
  return (
    <SectionWrapper id="info" title="Informasi Gereja">
      <div className="card p-4 rounded-lg text-sm text-gray-300 space-y-2">
        <p>
          GBKP RG Cililitan – Klasis Jakarta Kalimantan
        </p>
        <p>
          Jl. Mayjen Sutoyo No.51, Jakarta Timur
        </p>
        <p>
          Jadwal Ibadah: 07:30 | 10:00 | 17:00
        </p>
        <p>
          Rekening: BRI & Mandiri
        </p>
      </div>
    </SectionWrapper>
  );
}
