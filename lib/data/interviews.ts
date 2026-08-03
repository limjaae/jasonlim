export interface Interview {
  speaker: string;
  role: string;
  organisation?: string;
  takeaway: string;
  insight: string;
  tags: string[];
}

export const interviews: Interview[] = [
  {
    speaker: "Hugh Madden",
    role: "Founder",
    organisation: "Turquoise Bay AI",
    takeaway:
      "Countries need sovereign AI capabilities to remain globally competitive as access to frontier models becomes increasingly strategic.",
    insight:
      "Hugh's framing reset how I think about AI strategy at the national level, not just the enterprise level. As frontier model access becomes a lever of geopolitical and economic power, countries that treat AI purely as a procurement decision risk permanent dependency on a handful of foreign labs. Sovereign capability doesn't mean building a competitor to the frontier labs from scratch, it means owning enough of the stack (compute, data, talent, deployment expertise) to negotiate from a position of strength. That's a deployment problem as much as a research problem, and it's part of why I think about AI adoption in terms of infrastructure and institutional capability, not just model quality.",
    tags: ["Enterprise AI", "Governance"],
  },
  {
    speaker: "Prakash Dhavani",
    role: "Head of Payments & Digital Assets",
    organisation: "P8.io",
    takeaway:
      "AI creates value when organisations redesign end-to-end workflows rather than simply adding AI to existing processes.",
    insight:
      "Prakash's point echoes what I keep seeing in enterprise deployments: bolting a chatbot onto a broken workflow just makes the workflow break faster. In payments and digital assets specifically, the compliance, reconciliation, and risk steps are so interlinked that you can't automate one node without rethinking the handoffs around it. The organisations that get real value are the ones willing to redraw the process map first and ask what the workflow should look like if it were designed for an AI-augmented team, rather than asking where they can insert a model into the process they already have.",
    tags: ["Operations", "Enterprise AI"],
  },
  {
    speaker: "Tame Mehrabi",
    role: "CEO",
    organisation: "Saledge",
    takeaway:
      "Early AI adoption combined with strong governance and security creates lasting competitive advantage.",
    insight:
      "What stood out from Tame's perspective is that speed and governance aren't in tension the way most teams assume. Moving early on AI adoption without security and governance foundations just means you're first to accumulate risk, not first to capture value. The advantage compounds when a company builds the guardrails, access controls, and audit trail alongside the adoption curve, so that every new use case ships faster than the last one instead of triggering a fresh review cycle. That's the difference between a company that experiments with AI and one that's actually built AI into how it operates.",
    tags: ["Leadership", "Governance"],
  },
  {
    speaker: "Henry Young",
    role: "Senior Product Engineer",
    organisation: "ResetData",
    takeaway:
      "The greatest productivity gains come from careful planning, iteration and review with AI rather than using it only to generate code.",
    insight:
      "Henry's take reframed how I think about AI-assisted engineering. The instinct is to measure AI's value in lines of code generated, but Henry's experience is that the bigger unlock is upstream: using AI to pressure-test a plan, surface edge cases, and review a design before a single line gets written. Treating an AI system as a thinking partner across the whole development loop, not just a faster autocomplete, is what actually compounds into fewer rewrites and better architecture decisions.",
    tags: ["Engineering", "Product"],
  },
  {
    speaker: "Sally Bridgland",
    role: "Head of Enablement & Change",
    organisation: "Oreana Partnerships",
    takeaway:
      "Real productivity gains from AI require organisations to invest in upskilling people to effectively supervise AI-generated work.",
    insight:
      "Sally's perspective comes from the change-management side, which is the piece most technical AI conversations skip. Deploying a capable model doesn't automatically create a capable organisation, because someone still has to know when AI output is wrong, incomplete, or subtly miscalibrated for the business context. The gains show up when a company invests as much in training people to supervise and question AI work as it does in the AI itself. Otherwise you've just added a new tool that nobody is equipped to hold accountable.",
    tags: ["Leadership", "Operations"],
  },
  {
    speaker: "Sam",
    role: "Forward Deployed Engineer",
    takeaway:
      "Forward Deployed Engineers connect customer workflows, data and technology to solve operational problems.",
    insight:
      "This conversation is close to the core of how I think about the FDE role. Sam's point is that the job isn't “build the feature the customer asked for,” it's understanding the operational workflow well enough to know what they should be asking for. That means sitting with the data as it actually exists (messy, fragmented, half-documented) and being fluent enough in both the business process and the technology to close the gap directly, instead of relaying requirements back and forth between a customer and a product team that never sees the workflow firsthand.",
    tags: ["Engineering", "Operations"],
  },
  {
    speaker: "Anurag Kapse",
    role: "Product Manager",
    takeaway:
      "AI enables faster product delivery while improving consistency and maintaining auditability.",
    insight:
      "Anurag's framing pushed back on a false tradeoff I see a lot: that speed and rigor pull in opposite directions. In his experience, AI-assisted product workflows can actually tighten consistency and auditability, because a well-instrumented AI process leaves a clearer trail than an ad hoc human one does. The lesson I took is that “moving fast” with AI in an enterprise product org is a governance design problem, not just a tooling problem, and getting the audit trail right is what lets a team keep shipping quickly without accumulating risk debt.",
    tags: ["Product", "Governance"],
  },
  {
    speaker: "Wilson Yuan",
    role: "Founder",
    takeaway:
      "The future belongs to engineers who combine full-stack engineering with AI to automate operational work.",
    insight:
      "Wilson's view is one I've come to agree with from the enterprise side: the most valuable engineers now aren't purely backend, frontend, or ML specialists, they're generalists who can trace an operational problem end to end and use AI as leverage at every step, from data wrangling to interface to deployment. That combination, full-stack fluency plus AI-native workflows, is what lets a small team automate work that used to require a much larger one, and it's a big part of why I've deliberately kept my own skill set broad rather than narrowing into one layer of the stack.",
    tags: ["Engineering", "Enterprise AI"],
  },
];
