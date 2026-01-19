import SectionWrapper from "./SectionWrapper";

export default function WartaSection() {
  return (
    <SectionWrapper id="warta" title="Warta Jemaat">
      <article
        data-aos="fade-up"
        className="
          card p-5 rounded-xl
          flex flex-col sm:flex-row
          items-start sm:items-center
          justify-between gap-4
          transition-all duration-300 ease-out
          hover:-translate-y-1 hover:bg-white/15
        "
      >
        {/* INFO */}
        <div>
          <h5 className="font-semibold text-base md:text-lg">
            Warta Minggu – 12 Jan 2025
          </h5>
          <p className="text-sm text-gray-300 mt-1">
            Klik untuk melihat atau mengunduh
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-2">
          <button
            className="
              px-4 py-1.5 rounded-lg
              bg-white/10 text-sm
              transition hover:bg-white/20
            "
          >
            Preview
          </button>

          <button
            className="
              px-4 py-1.5 rounded-lg
              bg-yellow-400 text-black text-sm font-medium
              transition hover:bg-yellow-300
            "
          >
            Download
          </button>
        </div>
      </article>
    </SectionWrapper>
  );
}
