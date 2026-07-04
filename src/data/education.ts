export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  info?: string;
}

export const educationData: Education[] = [
  
  {
    year: "2022—2024",
    institution: "ENSAE Paris",
    degree: "Diplôme d'ingénieur — Economics (MSc.)",
    info: "GPA: 3.96/4.0"
    // advisor: "Prof. Sarah Johnson",
  },

  {
    year: "2020—2021",
    institution: "ENSAE Paris",
    degree: "BSc. Economics and Applied Mathematics",
    info: "GPA: 4.0/4.0"
  },

  {
    year: "2018—2020",
    institution: "CPGE Lycée Pothier",
    degree: "MSPI-MP*",
    info: "Mathematics and physics"
  },

];
