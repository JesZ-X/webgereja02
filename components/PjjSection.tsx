import SectionWrapper from "./SectionWrapper";

const SEKTOR = ["Sektor 1", "Sektor 2", "Sektor 3"];

export default function PjjSection() {
  return (
    <SectionWrapper id="pjj" title="PJJ Sektor">
      <p className="text-sm mb-3 inline-block px-3 py-1.5 rounded-xl bg-black/10 dark:bg-white/10 backdrop-blur-sm">
        Daftar kegiatan per sektor. Klik sektor untuk detail.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
        {SEKTOR.map((s) => (
          <div
            key={s}
            className="card p-3 rounded-lg text-center cursor-pointer hover:bg-gray-700 transition"
          >
            {s}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
