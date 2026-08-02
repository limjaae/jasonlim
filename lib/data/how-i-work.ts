export const problemSolvingStages = [
  {
    title: "Business Problem",
    description:
      "Start with the outcome the organisation actually needs, not the technology they think they want.",
    icon: "Target",
  },
  {
    title: "Customer Discovery",
    description:
      "Talk to the people who live in the workflow today. Watch, don't just ask.",
    icon: "Users",
  },
  {
    title: "Workflow Analysis",
    description:
      "Map the process as it actually runs, exceptions and workarounds included.",
    icon: "GitBranch",
  },
  {
    title: "Data Understanding",
    description:
      "Find out what data really exists, where it lives, and how fragmented it is.",
    icon: "Database",
  },
  {
    title: "Solution Design",
    description:
      "Design against the real constraints: existing systems, approval structures, and risk tolerance.",
    icon: "PenTool",
  },
  {
    title: "Deployment",
    description:
      "Ship into production with governance, observability, and a real maintenance owner.",
    icon: "Rocket",
  },
  {
    title: "Business Impact",
    description:
      "Measure against the outcome defined in step one, and iterate.",
    icon: "TrendingUp",
  },
] as const;

export const philosophy =
  "I don't start with a technology and look for a place to apply it. I start with the operational problem, spend real time with the people affected by it, and let the data and the workflow tell me what the right solution looks like. Enterprise software succeeds or fails on adoption, not architecture elegance, so every design decision gets checked against whether it actually gets used and whether it moves the business metric that mattered in the first place.";
