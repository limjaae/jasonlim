import { ArrowRight, RotateCcw } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { learningEcosystem, learningEcosystemDescription } from "@/lib/data/awards";

export function HowILearn() {
  return (
    <section id="how-i-learn" className="border-b border-border/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How I Learn"
          title="A learning ecosystem, not a reading list"
          description="I deliberately combine enterprise consulting, customer conversations, startup ecosystems and experimentation so each one keeps the others honest."
        />

        <div className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-4 rounded-xl border border-border bg-muted/30 p-6">
          {learningEcosystem.map((stage, i) => (
            <div key={stage} className="flex items-center gap-2">
              <span className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                {stage}
              </span>
              {i < learningEcosystem.length - 1 ? (
                <ArrowRight className="size-4 text-muted-foreground/60" />
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground/70">
                  <RotateCcw className="size-3.5" />
                  feeds back into Customers
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-foreground/85 text-pretty">
          {learningEcosystemDescription}
        </p>
      </div>
    </section>
  );
}
