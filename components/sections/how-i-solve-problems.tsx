"use client";

import { motion } from "framer-motion";
import {
  Target,
  Users,
  GitBranch,
  Database,
  PenTool,
  Rocket,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { problemSolvingStages, philosophy } from "@/lib/data/how-i-work";

const icons: Record<string, LucideIcon> = {
  Target,
  Users,
  GitBranch,
  Database,
  PenTool,
  Rocket,
  TrendingUp,
};

export function HowISolveProblems() {
  return (
    <section id="how-i-work" className="border-b border-border/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How I Work"
          title="How I solve problems"
          description="Not a résumé of tools. A repeatable way of moving from an ambiguous operational problem to a deployed system that changes a business metric."
        />

        <div className="mt-14 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-14">
          {problemSolvingStages.map((stage, i) => {
            const Icon = icons[stage.icon];
            return (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                className="relative"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold">
                  {stage.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                  {stage.description}
                </p>
                {i < problemSolvingStages.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute top-5 left-full hidden w-4 border-t border-dashed border-border lg:block"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl border-l-2 border-brand/40 pl-6">
          <p className="text-lg text-foreground/90 text-pretty">
            {philosophy}
          </p>
        </div>
      </div>
    </section>
  );
}
