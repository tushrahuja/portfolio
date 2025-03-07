import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython, FaReact, FaBootstrap, FaGitAlt, FaCloud } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiVite, SiDjango, SiMysql, SiMongodb } from "react-icons/si";
import { GiPuzzle } from "react-icons/gi";
import { BsPeopleFill, BsClockFill } from "react-icons/bs";

export const words = [
  "Frontend Developer",
  "Student at PRPCEM",
  "Tech Enthusiast",
  "Problem Solver",
  "Open Source Contributor"
];

export const projects = [
  {
    title: "ExpenseTrade",
    description: "An all-in-one financial management platform that helps users track expenses, manage income, and receive personalized stock suggestions. Features include expense tracking, income management, data visualization, and secure authentication.",
    image: "/src/projects_screenshots/expensetrade.png",
    tags: ["Python", "Streamlit", "SQLite", "Data Visualization"],
    liveDemo: "https://expensetrade.streamlit.app/",
    github: "https://github.com/tushrahuja/ExpenseTrade"
  },
  {
    title: "Sample Project",
    description: "This is a sample project to test the animation and layout. It includes basic features and a simple design.",
    image: "/src/projects_screenshots/sampleproject.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    liveDemo: "#",
    github: "#"
  },
];

export const skillSections = {
  languages: {
    title: "Programming Languages",
    items: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Python", icon: FaPython, color: "#3776AB" }
    ]
  },
  frameworks: {
    title: "Libraries & Frameworks",
    items: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Vite", icon: SiVite, color: "#646CFF" }
    ]
  },
  backend: {
    title: "Backend",
    items: [
      { name: "Django", icon: SiDjango, color: "#092E20" }
    ]
  },
  database: {
    title: "Databases",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
    ]
  },
  tools: {
    title: "Tools & Technologies",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Clever Cloud", icon: FaCloud, color: "#1A82FF" }
    ]
  },
  profSkills: {
    title: "Professional Skills",
    items: [
      { name: "Problem Solving", icon: GiPuzzle, color: "#FFB627" },
      { name: "Team Collaboration", icon: BsPeopleFill, color: "#0EA5E9" },
      { name: "Time Management", icon: BsClockFill, color: "#22C55E" }
    ]
  }
};
