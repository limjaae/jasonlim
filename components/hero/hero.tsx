import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingRoles } from "@/components/hero/typing-roles";
import { NetworkVisual } from "@/components/hero/network-visual";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/80">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8 lg:px-8 lg:py-28">
        <div>
          <p className="font-mono text-sm text-muted-foreground">
            Jason Lim:{" "}
            <span className="inline-block min-h-[1.4em]">
              <TypingRoles />
            </span>
          </p>

          <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
            I help organisations turn complex operational challenges into
            data-driven decisions.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty">
            I combine customer discovery, product thinking and technical
            implementation to move enterprise AI initiatives from ambiguous
            problem to deployed, measurable business impact.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="h-11 px-5"
              nativeButton={false}
              render={<Link href="/#projects" />}
            >
              View Projects
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-5"
              nativeButton={false}
              render={<a href={siteConfig.resumeHref} download />}
            >
              <Download className="size-4" />
              Download Resume
            </Button>
          </div>

          <div className="mt-14 flex items-center gap-4">
            <div className="relative size-14 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
              <Image
                src="/images/headshot-placeholder.svg"
                alt="Jason Lim"
                fill
                sizes="56px"
                className="object-cover"
                priority
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Enterprise experience across IBM, KPMG, and early-stage AI
              ventures
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <NetworkVisual />
        </div>
      </div>
    </section>
  );
}
