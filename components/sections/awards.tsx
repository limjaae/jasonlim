import { Award } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { awards } from "@/lib/data/awards";

export function Awards() {
  return (
    <section id="awards" className="border-b border-border/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Recognition" title="Awards & recognition" />

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {awards.map((award) => (
            <li
              key={award}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
            >
              <Award className="size-4 shrink-0 text-brand" />
              <span className="text-sm font-medium">{award}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
