import SectionWrapper from "./SectionWrapper";

const MAJELIS = [
  { name: "Nama Majelis 1", role: "Jabatan" },
  { name: "Nama Majelis 2", role: "Jabatan" },
  { name: "Nama Majelis 3", role: "Jabatan" },
];

export default function MajelisSection() {
  return (
    <SectionWrapper id="susunan" title="Susunan Majelis">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        {MAJELIS.map((m, i) => (
          <div
            key={m.name}
            data-aos="zoom-in"
            data-aos-delay={i * 120}
            className="
              card p-5 rounded-xl text-center
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:bg-white/15
            "
          >
            {/* AVATAR */}
            <div className="w-20 h-20 rounded-full bg-gradient- to-br from-gray-500 to-gray-700 mx-auto mb-3 flex items-center justify-center text-xl font-bold text-white">
              {m.name.charAt(0)}
            </div>

            {/* INFO */}
            <div className="font-semibold text-base md:text-lg">
              {m.name}
            </div>
            <div className="text-sm text-gray-300 mt-1">
              {m.role}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
