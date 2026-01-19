import SectionWrapper from "./SectionWrapper";

export default function AboutSection() {
  return (
    <SectionWrapper id="about" title={undefined}>
      <div className="flex flex-col gap-3" data-aos="fade-up">
        <h3 className="inline-block w-fit px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm text-lg font-semibold">
          Tentang Kami
        </h3>

        <p className="inline-block w-fit max-w-3xl px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm text-sm">
          GBKP Runggun Cililitan adalah wadah pertumbuhan iman jemaat dengan pelayanan
          Koinonia, Marturia, dan Diakonia.
        </p>
      </div>
    </SectionWrapper>
  );
}
