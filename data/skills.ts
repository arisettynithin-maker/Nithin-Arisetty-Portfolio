import { BarChart3, Bot, Database, LineChart } from "lucide-react";

export const skillGroups = [
  {
    title: "Analytics",
    icon: LineChart,
    description: "Structured analysis for performance, risk, and decision support.",
    skills: [
      "SQL",
      "Python",
      "Exploratory Analysis",
      "KPI Development",
      "Hypothesis Testing",
      "Anomaly Detection"
    ]
  },
  {
    title: "BI & Visualization",
    icon: BarChart3,
    description: "Reporting systems that help stakeholders act with clarity.",
    skills: ["Power BI", "Dashboard Design", "Stakeholder Reporting", "Data Storytelling"]
  },
  {
    title: "Data Platforms",
    icon: Database,
    description: "Cloud-backed tooling for scalable reporting and analysis.",
    skills: ["AWS", "S3", "Athena", "Redshift"]
  },
  {
    title: "AI / Automation",
    icon: Bot,
    description: "Practical AI workflows that extend analytics delivery.",
    skills: ["LLM-based analytics apps", "AI workflows", "n8n", "Decision automation"]
  }
] as const;
