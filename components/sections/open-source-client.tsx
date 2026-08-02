"use client";

import { useQuery } from "@tanstack/react-query";
import { Star, GitFork, RefreshCw, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { GitHubData } from "@/lib/github";

function timeAgo(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

export function OpenSourceClient({ initialData }: { initialData: GitHubData }) {
  const { data, refetch, isFetching } = useQuery({
    queryKey: ["github-data"],
    queryFn: async () => {
      const res = await fetch("/api/github");
      if (!res.ok) throw new Error("Failed to load GitHub data");
      return (await res.json()) as GitHubData;
    },
    initialData,
    staleTime: 60 * 60 * 1000,
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">
          Live from github.com/{"limjaae"} · updated{" "}
          {new Date(data.fetchedAt).toLocaleDateString()}
        </p>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => refetch()}
          disabled={isFetching}
        >
          <RefreshCw className={isFetching ? "size-3.5 animate-spin" : "size-3.5"} />
          Refresh
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.repos.length === 0 && (
          <p className="text-sm text-muted-foreground">
            GitHub data unavailable right now — check back shortly.
          </p>
        )}
        {data.repos.map((repo) => (
          <a key={repo.fullName} href={repo.url} target="_blank" rel="noreferrer">
            <Card className="h-full p-4 transition-colors hover:ring-brand/40">
              <p className="font-heading text-sm font-semibold">{repo.name}</p>
              <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground">
                {repo.description ?? "No description provided."}
              </p>
              <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                {repo.language && <span>{repo.language}</span>}
                <span className="inline-flex items-center gap-1">
                  <Star className="size-3" />
                  {repo.stars}
                </span>
                <span className="inline-flex items-center gap-1">
                  <GitFork className="size-3" />
                  {repo.forks}
                </span>
              </div>
            </Card>
          </a>
        ))}
      </div>

      {data.events.length > 0 && (
        <div className="mt-10">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Recent Activity
          </p>
          <ul className="mt-3 space-y-2.5">
            {data.events.map((event) => (
              <li
                key={event.id}
                className="flex items-center gap-2.5 text-sm text-foreground/80"
              >
                <Clock className="size-3.5 shrink-0 text-muted-foreground" />
                <span className="font-mono text-xs text-muted-foreground">
                  {timeAgo(event.createdAt)}
                </span>
                <span>
                  {event.summary} in{" "}
                  <span className="font-medium">{event.repo}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
