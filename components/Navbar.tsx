"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU = [
  { label: "Home", href: "/" },
  { label: "Koinonia", href: "/koinonia" },
  { label: "Marturia", href: "/marturia" },
  { label: "Diakonia", href: "/diakonia" },
  { label: "PJJ", href: "/pjj" },
  { label: "Warta", href: "/warta" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="nav-bg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between">
        <Link href="/">
          <div>
            <div className="font-semibold">GBKP RG CILILITAN</div>
            <div className="text-xs text-gray-300">
              Dalam persekutuan gereja-gereja di Indonesia
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              document.documentElement.classList.toggle("light")
            }
            className="px-3 py-1 bg-yellow-400 text-black rounded text-sm"
          >
            Theme
          </button>

          <button
            className="md:hidden px-3 py-1 bg-white/10 rounded"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          <nav className="hidden md:flex gap-6 text-sm">
            {MENU.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className={`hover:text-yellow-300 ${
                  isActive(m.href) ? "text-yellow-400 font-semibold" : ""
                }`}
              >
                {m.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/70 px-4 py-4 space-y-2">
          {MENU.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              onClick={() => setOpen(false)}
              className="block"
            >
              {m.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
