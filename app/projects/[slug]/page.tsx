import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GitHubIcon } from "@/components/icons";
import { ArchitectureDiagram } from "@/components/case-study/architecture-diagram";
import { getProject, projects, type Project } from "@/lib/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

const fields: { key: keyof Project; label: string }[] = [
  { key: "businessProblem", label: "Business Problem" },
  { key: "customerContext", label: "Customer / User Context" },
  { key: "approach", label: "Approach" },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        Back to projects
      </Link>

      <div className="mt-6">
        <Badge variant="outline" className="text-[0.65rem] font-mono uppercase tracking-wide">
          {project.statusLabel}
        </Badge>
        <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{project.tagline}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <Button size="sm" nativeButton={false} render={<a href={project.liveUrl} target="_blank" rel="noreferrer" />}>
              View Live
              <ArrowUpRight className="size-4" />
            </Button>
          )}
          {project.githubUrl && (
            <Button
              size="sm"
              variant="outline"
              nativeButton={false}
              render={<a href={project.githubUrl} target="_blank" rel="noreferrer" />}
            >
              <GitHubIcon className="size-4" />
              GitHub
            </Button>
          )}
        </div>
      </div>

      <Separator className="my-10" />

      <div className="space-y-10">
        {fields.map(({ key, label }) => (
          <section key={key}>
            <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand">
              {label}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/90 text-pretty">
              {project[key] as string}
            </p>
          </section>
        ))}

        <section>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand">
            Architecture
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/90 text-pretty">
            {project.architectureText}
          </p>
          <div className="mt-6">
            <ArchitectureDiagram stages={project.architectureStages} />
          </div>
        </section>

        <section>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand">
            Technology Stack
          </h2>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="font-mono text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand">
            Business Outcome
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/90 text-pretty">
            {project.businessOutcome}
          </p>
          {project.outcomeNote && (
            <p className="mt-2 text-sm text-muted-foreground text-pretty">
              {project.outcomeNote}
            </p>
          )}
        </section>

        <section>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand">
            Lessons Learned
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/90 text-pretty">
            {project.lessonsLearned}
          </p>
        </section>

        <section>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-brand">
            Deployment
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/90 text-pretty">
            {project.deployment}
          </p>
        </section>
      </div>
    </article>
  );
}
