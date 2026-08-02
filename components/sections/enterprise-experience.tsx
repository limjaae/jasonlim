"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { experience } from "@/lib/data/experience";

export function EnterpriseExperience() {
  return (
    <section id="experience" className="border-b border-border/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Enterprise Experience"
          title="Where this thinking was built"
          description="Select an organisation to see the focus areas and the kind of work involved."
        />

        <div className="mt-12">
          <Tabs defaultValue={experience[0].org} orientation="vertical" className="lg:flex-row">
            <TabsList
              variant="line"
              className="h-fit w-full flex-row overflow-x-auto lg:w-56 lg:shrink-0 lg:flex-col lg:overflow-visible"
            >
              {experience.map((entry) => (
                <TabsTrigger
                  key={entry.org}
                  value={entry.org}
                  className="justify-start px-3 py-2.5 text-left"
                >
                  {entry.org}
                </TabsTrigger>
              ))}
            </TabsList>

            {experience.map((entry) => (
              <TabsContent key={entry.org} value={entry.org} className="lg:pl-8">
                <div className="max-w-2xl">
                  <p className="font-mono text-xs uppercase tracking-widest text-brand">
                    {entry.role}
                  </p>
                  <h3 className="mt-2 font-heading text-2xl font-semibold">
                    {entry.org}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-foreground/85 text-pretty">
                    {entry.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {entry.focusAreas.map((area) => (
                      <Badge key={area} variant="secondary" className="font-normal">
                        {area}
                      </Badge>
                    ))}
                  </div>
                  {entry.href && (
                    <Link
                      href={entry.href}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
                    >
                      View full case study
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
