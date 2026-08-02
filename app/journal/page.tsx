import type { Metadata } from "next";
import Link from "next/link";
import { getAllJournalPosts } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Decision Journal",
  description:
    "Structured thinking on enterprise AI adoption, customer discovery, operational decision making, and building enterprise products.",
};

export default function JournalIndexPage() {
  const posts = getAllJournalPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="font-mono text-xs font-medium uppercase tracking-widest text-brand">
        Decision Journal
      </p>
      <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
        Structured thinking, in writing
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground text-pretty">
        Notes on enterprise AI adoption, customer discovery, operational
        decision-making, and what it actually takes to turn a proof of concept
        into a deployed system.
      </p>

      <div className="mt-12 divide-y divide-border">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/journal/${post.slug}`}
            className="group block py-6"
          >
            <p className="text-xs text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-AU", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {post.readingTime}
            </p>
            <h2 className="mt-2 font-heading text-xl font-semibold group-hover:text-brand">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground text-pretty">
              {post.excerpt}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
