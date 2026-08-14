# Jason Lim: Personal Site

**[jasonlimtech.vercel.app](https://jasonlimtech.vercel.app)** — the personal site and technical portfolio for Jason Lim (Deployment Strategist / Solution Engineer / Forward Deployed Engineer). Built as a full production application rather than a template: a custom design system with dark/light theming, an MDX-backed writing pipeline (Decision Journal), and enterprise-style case studies for four real projects, each with its own architecture diagram, including a live, working voice AI agent with a webhook tool calling a production database end to end.

**Stack**: Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · Framer Motion · React Three Fiber · MDX · Vercel

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/`: routes: homepage, `/projects` case studies, `/journal` Decision Journal (MDX)
- `components/`: layout, hero, section, and case-study components
- `content/journal/`: Decision Journal articles (MDX)
- `lib/data/`: structured content for projects, experience, skills, interviews, mentors, community, awards

## Content that needs review before going live

- Decision Journal articles and Interview "Read insights" copy in `content/journal/` and `lib/data/interviews.ts` are first drafts, review before treating as final

## Deployment

Deployed on Vercel via its native Git integration (push to `main` triggers a deploy). `.github/workflows/ci.yml` runs lint, type-check, and build on every push/PR as a CI gate.
