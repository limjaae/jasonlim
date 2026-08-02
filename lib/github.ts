import { siteConfig } from "@/lib/site";

export interface GitHubRepo {
  name: string;
  fullName: string;
  description: string | null;
  url: string;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
}

export interface GitHubEvent {
  id: string;
  type: string;
  repo: string;
  createdAt: string;
  summary: string;
}

export interface GitHubData {
  repos: GitHubRepo[];
  events: GitHubEvent[];
  fetchedAt: string;
}

function summarizeEvent(type: string, payload: Record<string, unknown>): string {
  switch (type) {
    case "PushEvent": {
      const commits =
        (payload.size as number | undefined) ??
        (payload.commits as unknown[] | undefined)?.length ??
        0;
      return `Pushed ${commits} commit${commits === 1 ? "" : "s"}`;
    }
    case "CreateEvent":
      return `Created ${payload.ref_type ?? "repository"}`;
    case "PullRequestEvent":
      return `${payload.action ?? "Updated"} pull request`;
    case "IssuesEvent":
      return `${payload.action ?? "Updated"} issue`;
    case "WatchEvent":
      return "Starred repository";
    case "ForkEvent":
      return "Forked repository";
    case "PublicEvent":
      return "Made repository public";
    default:
      return type.replace(/Event$/, "");
  }
}

export async function getGitHubData(): Promise<GitHubData> {
  const headers = { Accept: "application/vnd.github+json" };
  const username = siteConfig.githubUsername;

  const [reposRes, eventsRes] = await Promise.all([
    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`,
      { headers, next: { revalidate: 3600 } }
    ),
    fetch(`https://api.github.com/users/${username}/events/public?per_page=10`, {
      headers,
      next: { revalidate: 3600 },
    }),
  ]);

  const repos: GitHubRepo[] = reposRes.ok
    ? ((await reposRes.json()) as Array<Record<string, unknown>>)
        .filter((r) => !r.fork && !r.private)
        .sort(
          (a, b) =>
            (b.stargazers_count as number) - (a.stargazers_count as number) ||
            new Date(b.updated_at as string).getTime() -
              new Date(a.updated_at as string).getTime()
        )
        .slice(0, 6)
        .map((r) => ({
          name: r.name as string,
          fullName: r.full_name as string,
          description: (r.description as string | null) ?? null,
          url: r.html_url as string,
          language: (r.language as string | null) ?? null,
          stars: r.stargazers_count as number,
          forks: r.forks_count as number,
          updatedAt: r.updated_at as string,
        }))
    : [];

  const events: GitHubEvent[] = eventsRes.ok
    ? ((await eventsRes.json()) as Array<Record<string, unknown>>)
        .slice(0, 6)
        .map((e) => ({
          id: e.id as string,
          type: e.type as string,
          repo: (e.repo as { name: string }).name,
          createdAt: e.created_at as string,
          summary: summarizeEvent(
            e.type as string,
            (e.payload as Record<string, unknown>) ?? {}
          ),
        }))
    : [];

  return { repos, events, fetchedAt: new Date().toISOString() };
}
