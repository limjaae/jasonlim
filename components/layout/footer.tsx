import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border/80">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="font-heading text-lg font-semibold tracking-tight">
              Let&apos;s build the future of operational decision-making.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              I explore how data, AI and software can help organisations
              solve complex problems and create measurable impact.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline"
            >
              <Mail className="size-4" />
              {siteConfig.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Site
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <Link href="/#projects" className="hover:text-brand">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/journal" className="hover:text-brand">
                    Decision Journal
                  </Link>
                </li>
                <li>
                  <Link href="/#interviews" className="hover:text-brand">
                    Interviews
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Elsewhere
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-brand"
                  >
                    <GitHubIcon className="size-3.5" /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-brand"
                  >
                    <LinkedInIcon className="size-3.5" /> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Resume
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href={siteConfig.resumeHref} download={siteConfig.resumeFilename} className="hover:text-brand">
                    Download PDF
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/80 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Jason Lim. Built with Next.js.</p>
          <p>Building solutions at the intersection of technology, data and business outcomes.</p>
        </div>
      </div>
    </footer>
  );
}
