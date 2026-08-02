import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/data/projects";

export function ProjectsPreview() {
  return (
    <section id="projects" className="border-b border-border/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case Studies"
          title="Projects, presented as enterprise case studies"
          description="Each project is documented the way I'd document a customer deployment: the business problem, the approach, the architecture, and the outcome — not just a repo link."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
              <Card className="h-full ring-foreground/10 transition-colors group-hover:ring-brand/40">
                <div className="flex h-full flex-col p-5">
                  <Badge variant="outline" className="w-fit text-[0.65rem] font-mono uppercase tracking-wide">
                    {project.statusLabel}
                  </Badge>
                  <h3 className="mt-4 flex items-start justify-between gap-2 font-heading text-lg font-semibold">
                    {project.title}
                    <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.tagline}</p>
                  <p className="mt-3 flex-1 text-sm text-foreground/80 text-pretty">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
