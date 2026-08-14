# Jason Lim: Portfolios

Thanks for visiting my page. 

Hi, I am Jason! On my page, I share the story of my professional background and how it has shaped me into the Deployment Strategist, Solution Engineer, and Forward Deployed Engineer that I am today.

It includes my technical portfolio that walks through the architecture diagram and live links.

I also write technical blogs and interview leaders in the AI and transformation space, which can be found there.

My portfolio can be visited here: **[jasonlimtech.vercel.app](https://jasonlimtech.vercel.app)**

Have a great day!

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

## Deployment

Deployed on Vercel via its native Git integration (push to `main` triggers a deploy). `.github/workflows/ci.yml` runs lint, type-check, and build on every push/PR as a CI gate.
