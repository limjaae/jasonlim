import { SectionHeading } from "@/components/section-heading";
import { OpenSourceClient } from "@/components/sections/open-source-client";
import { getGitHubData } from "@/lib/github";

export async function OpenSource() {
  const data = await getGitHubData();

  return (
    <section id="open-source" className="border-b border-border/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Open Source"
          title="What I'm building in public"
          description="Pulled live from GitHub — repositories and recent activity, not a curated snapshot."
        />
        <div className="mt-12">
          <OpenSourceClient initialData={data} />
        </div>
      </div>
    </section>
  );
}
