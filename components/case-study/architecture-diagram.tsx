import { Fragment } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import type { ArchitectureStage } from "@/lib/data/projects";

export function ArchitectureDiagram({ stages }: { stages: ArchitectureStage[] }) {
  const gridTemplateColumns = stages
    .map((_, i) => (i < stages.length - 1 ? "minmax(0,1fr) auto" : "minmax(0,1fr)"))
    .join(" ");

  return (
    <div className="rounded-xl border border-border bg-muted/30 p-5 sm:p-8">
      <div
        className="flex flex-col lg:grid lg:items-stretch"
        style={{ gridTemplateColumns }}
      >
        {stages.map((stage, i) => (
          <Fragment key={stage.label}>
            <div className="flex min-w-0 flex-col self-start rounded-lg border border-border bg-card p-4 pb-5">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-brand">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-1.5 font-heading text-sm font-semibold">
                {stage.label}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {stage.detail}
              </p>
            </div>
            {i < stages.length - 1 && (
              <div className="flex shrink-0 items-center justify-center self-center py-2 text-muted-foreground/50 lg:px-2 lg:py-0">
                <ArrowDown className="size-4 lg:hidden" />
                <ArrowRight className="hidden size-4 lg:block" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
