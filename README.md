# Jason Lim: Personal Site

Personal site for Jason Lim, positioning him as a Deployment Strategist / Solution Engineer / Forward Deployed Engineer. Built with Next.js (App Router), TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, React Three Fiber and MDX.

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
