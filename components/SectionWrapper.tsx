import { ReactNode } from "react";

export default function SectionWrapper({
  id,
  title,
  children,
}: {
  id?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mb-10">
      {title && (
        <h3 className="text-xl font-bold mb-3 inline-block px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-sm">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
}
