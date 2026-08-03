import { SectionHeading } from "@/components/section-heading";
import { InterviewCard } from "@/components/sections/interview-card";
import { interviews } from "@/lib/data/interviews";

export function Interviews() {
  return (
    <section id="interviews" className="border-b border-border/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interviews About AI"
          title="Practical insights from founders, executives and engineers"
          description="Conversations with people building and deploying AI in the real world, condensed into one takeaway each."
        />

        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {interviews.map((interview) => (
            <InterviewCard key={interview.speaker} interview={interview} />
          ))}
        </div>
      </div>
    </section>
  );
}
