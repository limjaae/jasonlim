import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { communityEvents } from "@/lib/data/community";

export function Community() {
  return (
    <section id="community" className="border-b border-border/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="AI Community Engagement"
          title="Where I stay close to how the field is actually moving"
          description="Regular engagement with builder and solution-engineering communities, not just conference attendance."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {communityEvents.map((event) => (
            <Card key={event.name} className="p-5">
              <h3 className="font-heading text-base font-semibold">{event.name}</h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {event.focus.map((f) => (
                  <Badge key={f} variant="secondary" className="text-xs font-normal">
                    {f}
                  </Badge>
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80 text-pretty">
                {event.overview}
              </p>
              <div className="mt-4 border-l-2 border-brand/40 pl-3">
                <p className="text-sm italic text-foreground/85">“{event.keyLearning}”</p>
              </div>
              <p className="mt-3 text-xs text-muted-foreground text-pretty">
                <span className="font-medium text-foreground/70">Business value: </span>
                {event.businessValue}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
