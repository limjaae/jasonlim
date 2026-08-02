import { Briefcase, Cpu, Cloud, BarChart3, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { capabilityGroups, skillsMatrix } from "@/lib/data/skills";

const icons: Record<string, LucideIcon> = { Briefcase, Cpu, Cloud, BarChart3 };

export function TechnicalExpertise() {
  return (
    <section id="expertise" className="border-b border-border/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Expertise"
          title="Organised by business capability"
          description="Not a technology inventory. Each capability is what it lets me do for a customer, backed by the tools underneath it."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilityGroups.map((group) => {
            const Icon = icons[group.icon];
            return (
              <Card key={group.title} className="p-5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="size-4.5" />
                </span>
                <h3 className="mt-4 font-heading text-sm font-semibold">
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="mt-16">
          <h3 className="font-heading text-lg font-semibold">
            Enterprise Skills Matrix
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            The emphasis is on evidence, not technology — where each capability was
            actually exercised.
          </p>
          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/50 text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium sm:px-5">Capability</th>
                  <th className="px-4 py-3 font-medium sm:px-5">Evidence</th>
                </tr>
              </thead>
              <tbody>
                {skillsMatrix.map((row, i) => (
                  <tr
                    key={row.capability}
                    className={i % 2 === 1 ? "bg-muted/20" : undefined}
                  >
                    <td className="px-4 py-3 font-medium sm:px-5">{row.capability}</td>
                    <td className="px-4 py-3 text-muted-foreground sm:px-5">
                      {row.evidence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
