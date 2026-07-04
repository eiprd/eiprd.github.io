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
    "Research assistant and aspiring economics researcher with a deep interest in time-series econometrics. I'm particularly keen on empirical methods in macroeconomics and on topics related to inference of these approaches. Basically interested in anything related to empirical macro.",
  email: "prd1@proton.me",
  imageUrl:
    "/images/yez.png",
  // googleScholarUrl: "https://eip",
  githubUsername: "eiprd",
  // linkedinUsername: "eip",
  // twitterUsername: "eip",
  // blogUrl: "https://",
  cvUrl: "https://www.dropbox.com/scl/fi/urxzrd3xpahv50db6iepj/CV.pdf?rlkey=wgwwpr2is3wqitc8r53zt1pwq&st=szphq8ee&dl=0",
  // institutionUrl: "https://eip",
  // altName: "",
  // secretDescription: "I like YE.",
};
