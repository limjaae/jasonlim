export type ProjectStatus = "production-demo" | "venture" | "research" | "live";

export interface ArchitectureStage {
  label: string;
  detail: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  status: ProjectStatus;
  statusLabel: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  summary: string;
  businessProblem: string;
  customerContext: string;
  approach: string;
  architectureText: string;
  architectureStages: ArchitectureStage[];
  techStack: string[];
  businessOutcome: string;
  outcomeNote?: string;
  lessonsLearned: string;
  deployment: string;
}

export const projects: Project[] = [
  {
    slug: "meridian-operations",
    title: "Meridian Operations",
    tagline: "Operational Decision Platform",
    status: "production-demo",
    statusLabel: "Live demo platform",
    liveUrl: "https://meridian-operations-five.vercel.app/",
    githubUrl: "https://github.com/limjaae/meridian-ops",
    tags: [
      "Decision Intelligence",
      "Operational Workflows",
      "Data Integration",
      "Executive Decision Support",
    ],
    summary:
      "A connected operational ontology that traces supply chain disruption from detection through to business impact, built to replace fragmented dashboards with a single traceable model.",
    businessProblem:
      "Supply chain operations teams detect disruption late because visibility is fragmented across as many as 15 disconnected systems. By the time a disruption is confirmed, the window to act cheaply has usually closed, and the investigation that follows consumes days of analyst time that should have gone into prevention.",
    customerContext:
      "Built around two personas: a Supply Chain Operations Director who needs early risk visibility and cross-team coordination without another status meeting, and a Supply Chain Analyst who needs to go from “something broke” to root cause without manually reconciling a dozen systems. Both are blocked less by a lack of data and more by data that exists but isn't connected.",
    approach:
      "Rather than building another dashboard that reports isolated metrics, Meridian Operations is designed around a connected operational ontology: suppliers provide products that move through ports; disruptions attach to those flows; disruptions trigger human decisions; decisions affect customer orders. Because every entity is linked, a single disruption can be traced forward to its downstream business impact instead of sitting in a table as an isolated incident.",
    architectureText:
      "Business workflow (disruption occurs → detected → investigated → decision made → response coordinated) sits on top of a Postgres data model, via Supabase, that encodes the supplier → product → port → disruption → decision → order relationships as first-class links rather than joined-after-the-fact reports. The frontend reads this connected model directly, so the impact-trace view is a graph traversal, not a custom report someone has to build.",
    architectureStages: [
      { label: "Business Workflow", detail: "Disruption → detection → investigation → decision → response" },
      { label: "Data Sources", detail: "Supplier, product, port and order records across fragmented systems" },
      { label: "System Architecture", detail: "Next.js + React frontend over a Supabase/Postgres connected ontology" },
      { label: "Deployment", detail: "Vercel, continuously deployed from the meridian-ops repository" },
      { label: "Business Outcome", detail: "Faster detection, faster investigation, disruption cost avoided" },
    ],
    techStack: ["Next.js 14", "React", "Tailwind CSS", "Supabase (Postgres)"],
    businessOutcome:
      "The platform's demo scenarios illustrate the shift a connected model makes possible: detection time compressed from roughly 14 days to about 2 hours, investigation effort from roughly 40 hours to about 5 hours, with an estimated $2.8M in disruption cost avoided in the modeled scenario.",
    outcomeNote:
      "These are illustrative demo-scenario figures published on the live platform, not audited metrics from a production customer deployment, presented here exactly as the platform frames them.",
    lessonsLearned:
      "The hardest part of an “operational decision platform” isn't the dashboard, it's deciding what counts as one entity versus a relationship between two entities, because that decision determines whether impact tracing is a query or a project. Getting the ontology right up front paid for itself every time a new workflow needed to be added without a schema rewrite.",
    deployment:
      "Deployed on Vercel, connected to a Supabase Postgres instance. Continuous deployment from the main branch of the meridian-ops repository.",
  },
  {
    slug: "sherlocked-ai",
    title: "Sherlocked.ai",
    tagline: "Federated learning for inclusive lending",
    status: "venture",
    statusLabel: "Early-stage venture · Discovery & validation stage",
    liveUrl: "https://sherlocked.framer.ai/",
    tags: [
      "Product Strategy",
      "Customer Discovery",
      "Federated Learning",
      "Privacy-First AI",
      "Go-to-Market",
    ],
    summary:
      "An early-stage fintech venture using federated learning to let financial institutions extend credit to underbanked segments without centralising sensitive customer data.",
    businessProblem:
      "Banks and financial institutions want to extend credit to underbanked segments but are structurally limited: the customer data needed to build accurate risk models for these segments is sensitive, regulated, and fragmented across institutions that have no incentive, or legal ability, to pool it into a shared dataset.",
    customerContext:
      "The target customer is a financial institution's lending or digital assets team, not a consumer. Early discovery conversations focused on what would actually make an institution trust a third-party model with lending-adjacent decisions: data never leaving their environment, explainability, and a clear regulatory story, more than raw model accuracy.",
    approach:
      "Sherlocked.ai's product thesis is that federated learning lets multiple institutions collaboratively improve a shared model without centralising customer data, addressing the privacy and compliance objection that kills most cross-institution AI proposals at the first conversation. The venture is at the validation stage, building on product strategy, customer discovery interviews with financial institutions, and structured mentor feedback.",
    architectureText:
      "The target architecture keeps each institution's data and compute local while still enabling collaborative model improvement. Each institution trains within its own AWS environment (Amazon SageMaker for training, S3 for encrypted local data storage), and only model weight updates, never raw customer data, are sent to a central aggregation service on AWS (ECS and Lambda) that combines updates into a shared model via federated averaging. The updated global model is redistributed back to each institution through a versioned API layer on API Gateway, so no institution has to expose its underlying customer data to a third party or to other institutions.",
    architectureStages: [
      { label: "Business Workflow", detail: "Institution lending review, underserved-segment risk assessment" },
      { label: "Data Sources", detail: "Customer and transaction data held locally within each institution's AWS environment" },
      { label: "System Architecture", detail: "Federated training on Amazon SageMaker, aggregation via ECS and Lambda, distribution through API Gateway" },
      { label: "Deployment Architecture", detail: "Containerised per institution on AWS Fargate, IAM-scoped access, encrypted model-update transport" },
      { label: "Business Outcome", detail: "Expanded addressable lending market for partner institutions without centralising data" },
    ],
    techStack: ["Federated learning", "AWS (SageMaker, ECS, Fargate, Lambda)", "Product discovery", "Go-to-market strategy"],
    businessOutcome:
      "As an early-stage venture, the outcome to date is validated product direction, not deployed business metrics: structured discovery conversations with financial institutions and mentors have sharpened the thesis toward institutional trust and compliance requirements ahead of a pilot.",
    lessonsLearned:
      "The biggest product lesson so far is that “privacy-preserving AI” is a feature pitch, not a business case, until it's translated into the specific compliance and risk-committee language a financial institution's stakeholders actually use to approve a vendor. Customer discovery in regulated industries has to include the compliance and risk stakeholders from the first round of conversations, not after a pilot is already proposed.",
    deployment:
      "The deployment architecture is containerised and cloud-native on AWS: each institution's training environment runs in an isolated container with IAM-scoped access, model updates move through an encrypted API layer, and the aggregation service scales independently on Fargate. Onboarding a new institution is a configuration change against this architecture rather than a platform rebuild.",
  },
  {
    slug: "marine-conservation-cv",
    title: "Marine Conservation Computer Vision",
    tagline: "Instance segmentation for sea turtle conservation research",
    status: "research",
    statusLabel: "Applied research project",
    githubUrl: "https://github.com/limjaae/Comp-Vision-Sea-Turtles",
    tags: ["Computer Vision", "Segmentation", "Deep Learning", "Research"],
    summary:
      "An instance segmentation pipeline that isolates a sea turtle's flippers, head and tail from photographs, built to reduce the manual annotation burden in conservation photo-ID workflows.",
    businessProblem:
      "Marine biologists tracking sea turtle populations rely heavily on manual photo-identification to distinguish individual animals and assess health and injury patterns, a slow, labour-intensive process that limits how much of a population researchers can realistically monitor.",
    customerContext:
      "The end users are conservation researchers who currently review and annotate field imagery by hand. Their constraint isn't a lack of imagery, it's the analyst time required to process it, which caps how much of a population can be monitored in a season.",
    approach:
      "Built an instance segmentation pipeline to automatically isolate a sea turtle's distinct anatomical regions, flippers, head/body and tail, from photographs, as a foundation for downstream identification and injury-assessment tasks that currently depend on manual annotation. Implemented and compared three segmentation approaches on the same dataset: a U-Net architecture for pixel-wise semantic segmentation, Mask R-CNN for instance-level segmentation with region proposals, and DeepLabv3 for atrous-convolution-based dense prediction. A multi-stage variant was also built, splitting the task into background removal followed by anatomical part segmentation, to test whether decomposing the problem improved boundary accuracy on visually complex, low-contrast imagery.",
    architectureText:
      "Each architecture was evaluated on a held-out test split across the three target classes, comparing segmentation quality and failure modes between the single-stage and multi-stage pipelines to identify which approach generalised better to the dataset's variable lighting, occlusion, and background conditions.",
    architectureStages: [
      { label: "Business Workflow", detail: "Manual photo-ID → individual identification & injury assessment" },
      { label: "Data Sources", detail: "Field photography of sea turtles across varied conditions" },
      { label: "System Architecture", detail: "U-Net, Mask R-CNN and DeepLabv3 segmentation pipelines, single- and multi-stage" },
      { label: "Deployment", detail: "Research pipeline (Jupyter/TensorFlow), not a deployed production service" },
      { label: "Business Outcome", detail: "Path to reducing manual annotation load in conservation workflows" },
    ],
    techStack: ["Python", "TensorFlow / Keras", "Mask R-CNN (TF2)", "U-Net", "DeepLabv3", "Jupyter"],
    businessOutcome:
      "The resulting pipeline is a step toward reducing the manual annotation burden in sea turtle photo-ID workflows, aiming to let conservation researchers process substantially more field imagery than manual review allows, freeing analyst time for the judgment calls that still require expert review.",
    lessonsLearned:
      "Comparing single-stage and multi-stage segmentation on the same dataset made it clear that decomposing a hard vision problem into simpler sub-problems, background removal then part segmentation, often trades training complexity for more interpretable failure modes, which matters when the end users are domain experts who need to trust and sanity-check the output.",
    deployment:
      "Research codebase (Jupyter notebooks), not deployed as a production service. Code and methodology are open on GitHub.",
  },
  {
    slug: "order-status-voice-agent",
    title: "Order Status Voice Agent",
    tagline: "Conversational voice AI for order status lookups",
    status: "live",
    statusLabel: "Live voice AI agent",
    liveUrl: "https://order-status-voice-agent-widget.vercel.app/",
    githubUrl: "https://github.com/limjaae/Order-Status-Voice-Agent",
    tags: [
      "Voice AI",
      "Conversational AI",
      "Multi-tenant Architecture",
      "Data Integration",
    ],
    summary:
      "A multi-language voice AI agent that answers order-status questions in real time by calling a live webhook tool against a Supabase database, built to demonstrate full-stack integration from conversational AI through to production data.",
    businessProblem:
      "Order status is the single most repeated question in e-commerce support: high volume, low complexity, and fully answerable from data the business already has, making it a strong fit for a voice agent and a poor use of a human agent's time.",
    customerContext:
      "Built for two distinct users: the end customer calling to check an order in one of five languages without navigating a phone menu, and the recruiter or engineer evaluating the project with well under two minutes to judge whether it demonstrates real integration and architecture skill rather than a scripted demo.",
    approach:
      "The agent greets the caller, confirms which of three demo stores they ordered from, accepts a preferred language, then asks for an order number or checkout email. It calls a look_up_order webhook tool registered directly on the agent, which queries a live Postgres table on Supabase scoped to that store, and reads the result back in natural spoken language: processing, shipped with carrier and tracking number, or delivered.",
    architectureText:
      "A single shared orders table and a single shared webhook tool serve three separate demo stores, with store passed as a required parameter on every lookup rather than standing up three separate deployments. The ElevenLabs agent calls the look_up_order tool, which hits a stateless FastAPI endpoint on Vercel that queries Supabase Postgres with row-level security enabled and an explicit grant to the service role.",
    architectureStages: [
      { label: "Business Workflow", detail: "Caller states store and language, then order number or checkout email" },
      { label: "Data Sources", detail: "Supabase Postgres orders table, 30 seed rows across 3 stores, RLS with service_role grant" },
      { label: "System Architecture", detail: "ElevenLabs Conversational AI agent calls the look_up_order webhook tool" },
      { label: "Deployment", detail: "Stateless FastAPI backend and widget on Vercel" },
      { label: "Business Outcome", detail: "Voice to tool to live database to spoken response, verified end to end" },
    ],
    techStack: ["ElevenLabs Conversational AI", "FastAPI", "Python", "Vercel", "Supabase (Postgres)"],
    businessOutcome:
      "The full path, voice to tool to live database to spoken response, works end to end and is verified against real Supabase rows rather than mocked data. The agent handles three demo stores and five languages through one shared schema and one shared tool, and the project is documented well enough, via a case study and a self-service integration guide, to be legible to someone outside the build in under a minute.",
    lessonsLearned:
      "Every major failure hit while building this got found and fixed rather than worked around, and each one was a different category of mistake: a tool that was silently never attached to the agent because it lived in the workspace tool library but not in the agent's own tool_ids; a valid API key rejected by an outdated client library; Postgres RLS policies that were configured correctly but useless because the base table grant to service_role was missing, since RLS alone doesn't grant table access; and turn-taking settings that needed retuning so the agent stopped interrupting callers or looping on unclear answers.",
    deployment:
      "FastAPI backend and widget both deployed on Vercel, with the agent itself hosted on ElevenLabs and reachable via a standalone web widget or an ElevenLabs dashboard test call. There's no real phone number: Twilio integration was a deliberate cost decision, not a limitation hit by accident, and the agent's spoken promise to hand off to a human on a failed lookup is not yet backed by a real handoff.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
