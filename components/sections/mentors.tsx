import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { mentors, mentorsNote } from "@/lib/data/mentors";

export function Mentors() {
  return (
    <section id="mentors" className="border-b border-border/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Mentors & Industry Advisors"
          title="Guidance from people who've done this before"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor) => (
            <Card key={mentor.org} className="p-4">
              <h3 className="font-heading text-sm font-semibold">{mentor.org}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{mentor.contribution}</p>
            </Card>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm text-muted-foreground text-pretty">
          {mentorsNote}
        </p>
      </div>
    </section>
  );
}
