export interface Researchexp {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const researchexpData: Researchexp[] = [

  {
    date: "2026—current",
    title: "Research Analyst",
    company: "International Monetary Fund",
    description:
      "European Department, Regional Studies",
  },

  {
    date: "2025—2026",
    title: "Trainee, Research Analyst",
    company: "European Central Bank",
    description:
      "DG-Economics, Fiscal Policies",
    advisor: "Krzysztof Bańkowski, Roberta De Stefani",
  },

  {
    date: "2024 (6 mos.)",
    title: "Trainee",
    company: "Deutsche Bundesbank",
    description:
      "DG-Economics, International Economics",
    advisor: "Makram Khalil",
  },
  
];
