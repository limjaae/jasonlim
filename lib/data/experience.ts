export interface ExperienceEntry {
  org: string;
  role: string;
  focusAreas: string[];
  description: string;
  href?: string;
}

export const experience: ExperienceEntry[] = [
  {
    org: "IBM",
    role: "Government customers · AI adoption",
    focusAreas: [
      "Customer discovery",
      "AI workshops",
      "Technical demonstrations",
      "PoCs",
      "Cross-functional collaboration",
    ],
    description:
      "Worked directly with government customers on AI adoption, running discovery workshops to surface operational requirements, building and delivering technical demonstrations and proofs of concept, and coordinating across engineering, sales, and delivery teams to move AI initiatives from workshop to pilot.",
  },
  {
    org: "KPMG",
    role: "Operational analytics · Risk & governance",
    focusAreas: [
      "Operational analytics",
      "Decision support",
      "Risk",
      "Governance",
      "Financial services",
      "Regulation",
    ],
    description:
      "Supported operational analytics and decision-support engagements in financial services, working at the intersection of risk, governance, and regulatory requirements — translating regulatory constraints into data and analytics designs that risk and compliance teams could sign off on.",
  },
  {
    org: "OpenOnion",
    role: "AI engineering",
    focusAreas: ["AI engineering", "LLMs", "Software engineering"],
    description:
      "AI engineering role building LLM-powered software, working across the stack from model integration to production software engineering.",
  },
  {
    org: "Sherlocked.ai",
    role: "Founding team · Early-stage venture",
    focusAreas: ["Startup", "Product strategy", "Customer validation"],
    description:
      "Co-building an early-stage fintech venture — product strategy, customer discovery with financial institutions, and go-to-market validation for a federated learning approach to inclusive lending.",
    href: "/projects/sherlocked-ai",
  },
  {
    org: "Officeworks",
    role: "Technology consulting",
    focusAreas: ["Technology consulting", "Customer communication", "Trust building"],
    description:
      "Technology consulting role focused on customer communication and trust-building — translating technical constraints into terms non-technical stakeholders could act on, and vice versa.",
  },
];
