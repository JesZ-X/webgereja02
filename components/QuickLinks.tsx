"use client";

import Link from "next/link";

const LINKS = [
  {
    label: "Warta",
    href: "/warta",
    icon: "📰",
  },
  {
    label: "Organisasi",
    href: "/organisasi",
    icon: "👥",
  },
  {
    label: "Koinonia",
    href: "/koinonia",
    icon: "🌱",
  },
  {
    label: "Daftar",
    href: "/daftar",
    icon: "📝",
  },
];

export default function QuickLinks() {
  return (
    <section className="max-w-7xl mx-auto px-4 relative z-30 mt-8 sm:mt-10">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {LINKS.map((item, i) => (
          <Link
            key={item.label}
            href={item.href}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="
              group
              bg-white/10 backdrop-blur-md
              rounded-xl py-4 px-3
              flex flex-col items-center justify-center gap-2
              text-center
              transition-all duration-300 ease-out
              hover:bg-white/20 hover:-translate-y-1
              focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400
            "
          >
            {/* ICON */}
            <div className="text-2xl transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>

            {/* LABEL */}
            <span className="text-sm font-medium tracking-wide">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
