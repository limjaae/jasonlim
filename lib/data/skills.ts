export interface CapabilityGroup {
  title: string;
  icon: string;
  items: string[];
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Enterprise Solutions",
    icon: "Briefcase",
    items: [
      "Customer Discovery",
      "Requirements Gathering",
      "Solution Design",
      "Stakeholder Management",
      "Executive Presentations",
    ],
  },
  {
    title: "AI & Software Engineering",
    icon: "Cpu",
    items: [
      "LLM integration",
      "Agentic workflows",
      "Full-stack application development",
      "Next.js / React / TypeScript",
      "Python",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: "Cloud",
    items: ["Docker", "OpenShift", "Terraform", "Vercel", "Supabase"],
  },
  {
    title: "Data & Analytics",
    icon: "BarChart3",
    items: [
      "Data modeling",
      "Operational analytics",
      "Decision-support systems",
      "Risk & governance data design",
    ],
  },
];

export interface SkillsMatrixRow {
  capability: string;
  evidence: string;
}

export const skillsMatrix: SkillsMatrixRow[] = [
  { capability: "Customer Discovery", evidence: "IBM Government Workshops" },
  { capability: "Workflow Analysis", evidence: "IBM + KPMG" },
  { capability: "Product Strategy", evidence: "Sherlocked.ai" },
  { capability: "Operational Analytics", evidence: "KPMG" },
  { capability: "AI Engineering", evidence: "IBM + OpenOnion" },
  { capability: "Cloud Infrastructure", evidence: "Docker, OpenShift, Terraform" },
  { capability: "Executive Communication", evidence: "IBM, Strategy Consulting, OpenSummit.ai" },
  { capability: "Solution Demonstrations", evidence: "IBM" },
  { capability: "Cross-functional Collaboration", evidence: "IBM + KPMG" },
];
