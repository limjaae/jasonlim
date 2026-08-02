export interface Mentor {
  org: string;
  contribution: string;
}

export const mentors: Mentor[] = [
  { org: "IBM", contribution: "Go-to-market, Innovation" },
  { org: "Red Hat", contribution: "Product Strategy, Go-to-market, Innovation, Startup growth" },
  { org: "Salesforce", contribution: "Automation" },
  { org: "EY", contribution: "Design Thinking" },
  { org: "Commonwealth Bank", contribution: "Product Strategy, Enterprise AI" },
  { org: "UiPath", contribution: "Customer Engineering" },
  { org: "ThinkPlace", contribution: "Design Thinking" },
  { org: "KPMG", contribution: "Go-to-market" },
  { org: "Qantas", contribution: "Product Strategy" },
];

export const mentorsNote =
  "These mentors provided guidance throughout Sherlocked.ai's customer discovery, product strategy and go-to-market development.";
