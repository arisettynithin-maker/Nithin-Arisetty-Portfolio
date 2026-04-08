export type Project = {
  id: string;
  title: string;
  summary: string;
  metric: string;
  impactLine: string;
  cardHint: string;
  stack: string[];
  problem: string;
  overview: string;
  outcomes: string[];
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "customer-intelligence-copilot",
    title: "Customer Intelligence Copilot",
    summary:
      "Built to solve slow, manual customer analysis by turning transaction data into churn insight, LTV views, segmentation, and experiment-ready recommendations in one guided workflow.",
    metric: "AI-powered analytics system",
    impactLine: "Reduced manual analysis effort and accelerated insight generation for customer decision-making.",
    cardHint: "Turns raw transactions into retention and growth actions.",
    stack: ["Python", "Streamlit", "LLMs", "Analytics"],
    problem:
      "Analysts often spend too much time stitching together descriptive views before they can make customer decisions. This project compresses that path into a guided analytics copilot.",
    overview:
      "A decision-support experience designed to make customer analytics more conversational without losing analytical structure. It surfaces churn drivers, segmentation patterns, retention opportunities, and recommended next steps from transaction-level data.",
    outcomes: [
      "Frames retention and growth questions in a business-friendly interface.",
      "Blends exploratory analysis with AI-assisted interpretation.",
      "Speeds up access to experiment ideas and customer value insight."
    ],
    githubUrl: "https://github.com/arisettynithin-maker/customer-intelligence-copilot",
    liveUrl: "https://customer-intelligence-copilot.streamlit.app/"
  },
  {
    id: "ecommerce-lifecycle-analytics",
    title: "E-commerce Lifecycle Analytics",
    summary:
      "Designed to unify fragmented lifecycle data across funnel, retention, and conversion journeys, creating a clearer view of how users move, drop off, and convert across roughly 2M events.",
    metric: "2M+ events analysed",
    impactLine: "Enabled scalable lifecycle analytics across a large behavioural dataset.",
    cardHint: "Maps the funnel, retention, and conversion story end to end.",
    stack: ["Python", "SQL", "Power BI", "Jupyter"],
    problem:
      "Lifecycle performance is usually fragmented across event data, conversion flows, and retention reporting. This project brings those views together in one analytical model.",
    overview:
      "A full-funnel analytics case study covering acquisition, activation, retention, and conversion performance. The project focuses on turning event data into insight that product and growth teams can use directly.",
    outcomes: [
      "Maps funnel drop-off and retention patterns across the customer journey.",
      "Supports segmentation and cohort-style analysis using reproducible workflows.",
      "Pairs analytical notebooks with presentation-ready BI outputs."
    ],
    githubUrl: "https://github.com/arisettynithin-maker/Ecommerce-Lifecycle-Analytics"
  },
  {
    id: "experiment-decision-engine",
    title: "Experiment-Decision-Engine",
    summary:
      "Created to bring structure to scattered experimentation requests by automating intake, scoring, review, and governance through workflow-led decision support.",
    metric: "Workflow automation engine",
    impactLine: "Improved consistency in how experiments are prioritised, reviewed, and governed.",
    cardHint: "Adds structure and governance to experimentation intake.",
    stack: ["n8n", "JavaScript", "AI Workflows", "Experimentation"],
    problem:
      "Experiment ideas often arrive without consistent prioritisation or governance. This system creates a structured intake and review path for higher-quality experimentation decisions.",
    overview:
      "A workflow-first decision engine that standardises how experiments are proposed, assessed, and routed. It is designed for teams that want better experimentation hygiene without heavy process overhead.",
    outcomes: [
      "Creates a more consistent intake and scoring workflow.",
      "Supports review, routing, and governance decisions with clearer criteria.",
      "Demonstrates practical automation for analytics-adjacent decision systems."
    ],
    githubUrl: "https://github.com/arisettynithin-maker/Experiment-Decision-Engine"
  },
  {
    id: "commercial-analytics-pipeline",
    title: "End-to-End Commercial Analytics Pipeline",
    summary:
      "Built to clean and structure noisy commercial transaction data, turning vendor and performance signals into reporting layers that are ready for business review and action.",
    metric: "Decision-ready reporting pipeline",
    impactLine: "Strengthened visibility into vendor and commercial performance with cleaner reporting outputs.",
    cardHint: "Transforms noisy transactions into usable commercial insight.",
    stack: ["Python", "SQL-style analytics", "Power BI", "Jupyter"],
    problem:
      "Commercial datasets are often rich but operationally noisy. This project focuses on building a cleaner path from raw transaction data to vendor and performance insight.",
    overview:
      "An end-to-end analytics workflow that structures raw commercial data, applies business logic, and produces reporting layers suitable for performance reviews and stakeholder decision-making.",
    outcomes: [
      "Improves visibility into vendor and commercial performance patterns.",
      "Shows how notebook workflows can support repeatable reporting preparation.",
      "Bridges analytical detail with dashboard-ready outputs."
    ],
    githubUrl: "https://github.com/arisettynithin-maker/End-to-End-Commercial-Analytics-Pipeline"
  }
];
