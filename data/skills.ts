import { BarChart3, Database, LineChart, Users2 } from "lucide-react";

export const skillGroups = [
  {
    title: "Analytics",
    icon: LineChart,
    description: "Structured analysis for commercial performance, anomaly detection, and decision support.",
    skills: [
      "SQL (CTEs, Window Functions, Aggregations)",
      "Python – Pandas (data wrangling & analysis)",
      "Root Cause Analysis & Anomaly Detection"
    ]
  },
  {
    title: "BI & Reporting",
    icon: BarChart3,
    description: "Reporting systems that give stakeholders reliable, actionable commercial insight.",
    skills: [
      "Power BI (dashboards, DAX measures)",
      "KPI Definition & Metric Standardisation",
      "Growth & Commercial Reporting"
    ]
  },
  {
    title: "Data & Quality",
    icon: Database,
    description: "Data quality practices and platform tooling for scalable, trustworthy reporting.",
    skills: [
      "Data Reconciliation & Quality Analysis",
      "AWS (S3, Athena)"
    ]
  },
  {
    title: "Stakeholder & Delivery",
    icon: Users2,
    description: "Cross-functional collaboration and clear communication with regional and executive stakeholders.",
    skills: [
      "Stakeholder Management & Cross-functional Collaboration"
    ]
  }
] as const;
