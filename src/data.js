import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaPython, FaReact, FaBootstrap, FaGitAlt, FaCloud, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiVite, SiDjango, SiMysql, SiMongodb, SiExpress } from "react-icons/si";
import { GiPuzzle } from "react-icons/gi";
import { BsPeopleFill, BsClockFill } from "react-icons/bs";

export const words = [
  "Full Stack Developer",
  "Tech Enthusiast",
  "Problem Solver",
  "Web Developer",
  "Designer",
  "Coder"
];

export const projects = [
  {
    title: "ExpenseTrade",
    description: "A financial management platform that tracks expenses, manages income, and suggests personalized stocks. Features expense tracking, data visualization, and secure authentication.",
    image: "/src/images/projects_screenshots/expensetrade.png",
    tags: ["Python", "Streamlit", "Data Visualization"],
    liveDemo: "https://expensetrade.streamlit.app/",
    github: "https://github.com/tushrahuja/ExpenseTrade"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website template that showcases projects, skills, and certifications. Features include a dark mode toggle, smooth scroll, and interactive animations.",
    image: "/src/projects_screenshots/sampleproject.jpg",
    tags: ["React.js", "Tailwind CSS", "Framer Motion"],
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
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" }
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

export const certifications = [
  {
    title: "SQL Certificate",
    issuer: "HackerRank",
    date: "Mar 2025",
    image: "/src/images/certificates/sql_hackerrank.jpg",
    url: "",
    description: "Accomplished a assessment on SQL, testing knowledge of database queries."
  },
  {
    title: "React.js Certificate",
    issuer: "Infosys Springboard",
    date: "Mar 2025",
    image: "/src/images/certificates/reactjs.jpg",
    url: "",
    description: "Completed a course on React.js, learning about frontend development."
  },
  {
    title: ".Net Conference",
    issuer: "Microsoft Learn Student Club",
    date: "Jan 2025",
    image: "/src/images/certificates/dotnet.png",
    url: "",
    description: "Participated in the .Net Conference, learning about the latest technologies."
  },
  {
    title: "DBMS Certificate",
    issuer: "NPTEL",
    date: "Nov 2024",
    image: "/src/images/certificates/dbms_nptel.jpeg",
    url: "https://onlinecourses.swayam2.ac.in/ini24_cs01/certificate?q=gNdih1l4meksCtDATMXw9QNMsav6VjM0QEbIKlh9Pm%2B/D4lThAeII/bw3FFC5lAI",
    description: "Completed a comprehensive course on Database Management Systems."
  },
  {
    title: "Codethon 2024",
    issuer: "Coding Club PRPCEM",
    date: "Oct 2024",
    image: "/src/images/certificates/codethon.jpg",
    url: "",
    description: "Participated in Codethon 2024, showcasing coding skills and problem-solving abilities."
  },
  {
    title: "MongoDB Course",
    issuer: "GeeksforGeeks",
    date: "Sep 2024",
    image: "/src/images/certificates/mongodb_gfg.jpeg",
    url: "https://media.geeksforgeeks.org/courses/certificates/c1ab6f20fe6c1c56a773eabe6b3edf59.pdf",
    description: "Completed a course on MongoDB, learning about NoSQL databases."
  }
];
