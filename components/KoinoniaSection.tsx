import SectionWrapper from "./SectionWrapper";

export default function KoinoniaSection() {
  const ITEMS = [
    {
      title: "Pembinaan Warga Gereja",
      desc: "Seluruh kegiatan pembinaan jemaat.",
    },
    {
      title: "Kategorial",
      desc: "Mamre, Moria, Permata, KAKR, Zaitun",
    },
  ];

  return (
    <SectionWrapper id="koinonia" title="Koinonia">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
        {ITEMS.map((item, i) => (
          <div
            key={item.title}
            data-aos="fade-up"
            data-aos-delay={i * 120}
            className="
              card p-5 rounded-xl
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:bg-white/15
            "
          >
            <h4 className="font-semibold text-base md:text-lg">
              {item.title}
            </h4>
            <p className="text-sm text-gray-300 mt-2 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
