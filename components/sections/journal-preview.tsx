import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { getAllJournalPosts } from "@/lib/mdx";

export function JournalPreview() {
  const posts = getAllJournalPosts().slice(0, 3);

  return (
    <section id="journal" className="border-b border-border/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Decision Journal"
            title="Structured thinking, in writing"
            description="Practical notes on enterprise AI adoption, customer discovery, governance, and shipping enterprise products — instead of a blog about frameworks."
          />
          <Link
            href="/journal"
            className="mb-1 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
          >
            View all
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/journal/${post.slug}`} className="group">
              <p className="text-xs text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-AU", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}{" "}
                · {post.readingTime}
              </p>
              <h3 className="mt-2 font-heading text-lg font-semibold group-hover:text-brand">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground text-pretty">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
