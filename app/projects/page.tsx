import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Enterprise case studies covering operational decision platforms, early-stage AI venture strategy, and applied computer vision research.",
};

export default function ProjectsIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-brand">
        Case Studies
      </p>
      <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
        Real world examples of translating complex operational challenges
        into data driven solutions.
      </h1>
      <p className="mt-4 max-w-2xl text-muted-foreground text-pretty">
        Each case study explores the problem context, stakeholder needs,
        data requirements, technical approach, implementation decisions and
        business impact, demonstrating how I bridge the gap between users,
        technology and outcomes.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
            <Card className="h-full ring-foreground/10 transition-colors group-hover:ring-brand/40">
              <div className="flex h-full flex-col p-5">
                <Badge
                  variant="outline"
                  className="w-fit text-[0.65rem] font-mono uppercase tracking-wide"
                >
                  {project.statusLabel}
                </Badge>
                <h2 className="mt-4 flex items-start justify-between gap-2 font-heading text-lg font-semibold">
                  {project.title}
                  <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                </h2>
                <p className="text-sm text-muted-foreground">{project.tagline}</p>
                <p className="mt-3 flex-1 text-sm text-foreground/80 text-pretty">
                  {project.summary}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
