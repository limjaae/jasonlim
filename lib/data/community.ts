export interface CommunityEvent {
  name: string;
  focus: string[];
  overview: string;
  keyLearning: string;
  businessValue: string;
}

export const communityEvents: CommunityEvent[] = [
  {
    name: "PreSales Collective",
    focus: ["Enterprise Customer Discovery", "Solution Engineering", "Technical Sales"],
    overview:
      "Community for solution engineers and technical sales practitioners; engagement has centered on sharpening discovery technique and technical-sales craft for enterprise deals.",
    keyLearning:
      "Understanding customer problems is often more valuable than understanding the technology itself.",
    businessValue:
      "Sharper discovery questions and a stronger read on what technical proof actually moves an enterprise buying decision, versus what just demonstrates capability.",
  },
  {
    name: "Build Club",
    focus: ["Rapid AI Prototyping", "Founder Mindset", "Shipping Products"],
    overview:
      "Hands-on community for builders shipping AI products fast, with a bias toward rapid prototyping and iteration over up-front planning.",
    keyLearning:
      "Speed of learning is often more valuable than speed of coding.",
    businessValue:
      "A tighter feedback loop between idea and working prototype, and practice applying founder-mode judgment about what's worth building next.",
  },
  {
    name: "OpenSummit.ai",
    focus: ["Frontier AI Trends", "Applied AI in Industry", "Sovereign AI Capability"],
    overview:
      "Conference and community bringing together AI builders, founders, and industry leaders to discuss where applied AI is heading, from frontier model capability to on-the-ground enterprise deployment.",
    keyLearning:
      "Exposure to how founders and technical leaders across different industries are thinking about AI strategy, deployment risk, and competitive positioning at a level above any single product decision.",
    businessValue:
      "A broader frame for evaluating AI initiatives, informed by how peers across industries are prioritising adoption, governance, and infrastructure investment.",
  },
  {
    name: "Friends of Figma",
    focus: ["Product Design", "Design Systems", "Design-Engineering Collaboration"],
    overview:
      "Community of designers and design-minded builders focused on product craft, design systems, and the handoff between design and engineering.",
    keyLearning:
      "Sharper instincts for interface and interaction design, and a better working vocabulary for collaborating with design teams on enterprise product surfaces.",
    businessValue:
      "Better-designed internal tools and customer-facing demos, and faster, lower-friction collaboration with design counterparts on deployment work.",
  },
];
