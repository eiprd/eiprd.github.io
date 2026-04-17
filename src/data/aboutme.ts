export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Pierre M. Rouillard",
  title:       "___________________________________",
  institution: "RA @International Monetary Fund",
  description:
    "I’m an experienced research assistant and aspiring economics researcher with a deep interest in time-series econometrics. I'm particularly keen on panel-based empirical methods in macroeconomics —including VARs, local projections, and quantile regressions. I'm also very much interested in topics related to inference of these approaches.",
  email: "prd1@proton.me",
  imageUrl:
    "/images/yez.png",
  // googleScholarUrl: "https://eip",
  githubUsername: "pierld",
  // linkedinUsername: "eip",
  // twitterUsername: "eip",
  blogUrl: "https://",
  cvUrl: "https://www.dropbox.com/scl/fi/qesqaxh3cgvdv7uy54hxg/CV_RouillardPierre.pdf?rlkey=ztjeccuw8zxaq2qaifishcymm&st=r5hx6ttm&dl=0",
  // institutionUrl: "https://eip",
  // altName: "",
  // secretDescription: "I like YE.",
};
