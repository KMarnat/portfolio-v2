export type Tab = {
  title: string;
  siteUrl: string;
  githubUrl: string;
  gradient1: string;
  gradient2: string;
  description: string;
  usedInProject: string;
};

export const ProjectsData: {
  projectOne: Tab;
  projectTwo: Tab;
  projectThree: Tab;
  projectFour: Tab;
  projectFive: Tab;
  projectSix: Tab;
} = {
  projectOne: {
    title: "Lenovo Legion",
    siteUrl: "https://kmarnat-lenovo.netlify.app",
    githubUrl: "https://github.com/KMarnat/mystery-project",
    gradient1: "rgb(17, 24, 78)",
    gradient2: "rgb(136, 26, 34)",
    description:
      "Project for Lenovo Legion. I developed this during my internship, following the designs. My version was meant for practice, the other developers worked on the real product that was going to be used during DreamHack. This is a mobile only app.",
    usedInProject: "React, SCSS, TypeScript, React Router",
  },
  projectTwo: {
    title: "IGDB",
    siteUrl: "https://kmarnat-igdb.netlify.app",
    githubUrl: "https://github.com/KMarnat/brandweb-test",
    gradient1: "rgb(111, 0, 255)",
    gradient2: "rgb(32, 33, 52)",
    description:
      "The very first project I did during my internship, which also took the most time. There were several stopping points, but I kept adding new features, such as saving searched and fetched games to local storage, Firestore, added profile page, detailed overview of a selected game.",
    usedInProject: "React, SCSS, React Router, Firebase",
  },
  projectThree: {
    title: "BusinessLF",
    siteUrl: "https://kmarnat-businesslf.netlify.app",
    githubUrl: "https://github.com/KMarnat/businesslf",
    gradient1: "rgb(15, 68, 49)",
    gradient2: "rgb(217, 217, 217)",
    description:
      "A project for a business that helps other businesses grow. Added something different to this project: 'Locomotive scroll', which is a smooth scroll and parallax package.",
    usedInProject: "React, SCSS, React Router, Locomotive scroll",
  },
  projectFour: {
    title: "Whitsun",
    siteUrl: "https://kmarnat-whitsun.netlify.app",
    githubUrl: "https://github.com/KMarnat/whitsun",
    gradient1: "rgb(204, 43, 94)",
    gradient2: "rgb(117, 58, 136)",
    description:
      "A project for a festival. It shows the prices of tickets, performers and the menu for foods and drinks. Also a more detailed view of each performer, food and beverage.",
    usedInProject: "React, SCSS, React Router",
  },
  projectFive: {
    title: "Ignotum",
    siteUrl: "https://ignotum.netlify.app/",
    githubUrl: "https://github.com/KMarnat/exam",
    gradient1: "rgb(221, 170, 110)",
    gradient2: "rgb(7, 2, 17)",
    description:
      "A project I designed and developed for my Tallinn Polytechnic School's exam. The topic was 'space' or 'space mission'. I came up with an idea of making a introduction to a space mission into a black hole. Had tasks to also design logos, emblem, mockups, low and high fidelity and a brandbook.",
    usedInProject: "HTML, CSS, JavaScript",
  },
  projectSix: {
    title: "GoToChina",
    siteUrl: "https://gotochina.netlify.app/",
    githubUrl: "https://github.com/KMarnat/proovieksam",
    gradient1: "rgb(167 35 124)",
    gradient2: "rgb(226 136 0)",
    description:
      "Practice project for the exam. Theme was 'travel'. I chose an already existing prototype brand 'GoToEgypt' and changed it accordingly for China.",
    usedInProject: "HTML, CSS, JavaScript",
  },
};
