import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFirebase,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiVite,
  SiJsonwebtokens,
} from "react-icons/si";
import { PiFileSqlBold } from "react-icons/pi";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  {
    name: "JavaScript + ES6",
    icon: <SiJavascript className="text-yellow-500" />,
  },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  {
    name: "React",
    icon: <SiReact className="text-cyan-500" />,
  },
  { name: "Vite", icon: <SiVite className="text-green-500" /> },
  {
    name: "NextJS (React framework)",
    icon: <SiNextdotjs className="text-white dark:text-white" />,
  },
  {
    name: "Redux + Redux Toolkit",
    icon: <SiRedux className="text-purple-500" />,
  },
  { name: "NodeJS", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  {
    name: "JsonWebToken",
    icon: <SiJsonwebtokens className="text-red-700" />,
  },
  {
    name: "MongoDB + Mongoose",
    icon: <SiMongodb className="text-green-500" />,
  },
  { name: "Git + GitHub", icon: <SiGit className="text-orange-500" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "SQL", icon: <PiFileSqlBold className="text-cyan-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
];

export const projects = [
  {
    title: "Pass Protector",
    description:
      "PassProtector is an innovative application designed to securely store user credentials, helping users manage and protect their usernames and passwords. Given the frequent issue of users forgetting their login details after signing up on various websites and apps, PassProtector offers a reliable solution to this problem.",
    technologies: ["React + Vite.js", "Tailwind CSS", "Local Storage"],
    image: "/assets/pass.png",
    liveDemo: "https://rafay-passprotector.vercel.app/",
    codeLink: "https://github.com/abdulrafay0608/Password-Manager",
  },
  {
    title: "Sidcup Family Golf Clone",
    description:
      "In this project, I recreated the engaging landing page for Sidcup Family Golf, a multi-purpose golf facility in London. Using HTML, CSS, and JavaScript, I faithfully replicated the original design and interactive elements.",
    technologies: ["HTML", "CSS", "JavaScript", "Swipper js"],
    image: "/assets/golf.png",
    liveDemo: "https://rafay-sidcupfamilygolf.vercel.app",
    codeLink: "https://github.com/abdulrafay0608/Sidcup-Family-Golf",
  },
  {
    title: "Sundown Studio Clone",
    description:
      "In this project, I recreated the landing page for Sundown Studio, a design studio. This clone replicates the design and interactive features of the original website using HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "Swipper js"],
    image: "/assets/sundown.png",
    liveDemo: "https://rafay-sundown.vercel.app",
    codeLink: "https://github.com/abdulrafay0608/Sundown",
  },
  {
    title: "Personal Blogging App",
    description:
      "Crafted a user-friendly personal blogging app platform allowing users to post, edit, and delete personal blogs using HTML, CSS, and JavaScript. Additionally, it offers secure authentication via email and password.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/assets/blog.png",
    liveDemo: "https://personalbloggingapp-rafay.netlify.app/",
    codeLink: "https://github.com/abdulrafay0608/BlogApp",
  },
  {
    title: "Human-Generated Prompts",
    description:
      "An innovative platform that generates prompts tailored to users' search intent, powered by Next.js, Node.js, MongoDB, and Express for a seamless experience.",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    image: "/assets/human.jpg",
    liveDemo: "https://humangeneratedprompts.netlify.app/",
    codeLink: "https://github.com/abdulrafay0608/Human-Generated-Prompt",
  },
  {
    title: "Todo App",
    description:
      "Experience the future of task management with Next.js Todo App: A seamlessly integrated project leveraging Tailwind CSS, Firestore, and Firebase authentication for a dynamic and secure user experience.",
    technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    image: "/assets/todo.png",
    liveDemo: "https://rafay-todo.netlify.app/",
    codeLink: "https://github.com/abdulrafay0608/todo",
  },
  {
    title: "Shoe Store",
    description:
      "Developed an online shoe store website using Next.js and Tailwind CSS, focusing on enhancing my frontend skills. Crafted a user-friendly, responsive interface for an immersive shopping experience.",
    technologies: ["Next.js", "Tailwind CSS"],
    image: "/assets/shoe.png",
    liveDemo: "https://rafay-shoes-store.netlify.app/",
    codeLink: "https://github.com/abdulrafay0608/Online-Shoes-Store",
  },
  {
    title: "Amazon Clone",
    description:
      "Recreated an Amazon e-commerce platform using HTML and CSS to enhance front-end skills and display proficiency in building visually appealing websites.",
    technologies: ["HTML", "CSS"],
    image: "/assets/amazone.png",
    liveDemo: "https://ecommercerafay.netlify.app/",
    codeLink: "https://github.com/abdulrafay0608/Landing-Page",
  },
];

export const contactsInfo = [
  {
    name: "Location",
    href: "#",
    username: "Karachi, Pakistan",
    icon: <FaLocationDot className="text-4xl" />,
  },
  {
    name: "Email",
    href: "mailto:mailto:abdulrafay0608@gmail.com",
    username: "abdulrafay0608@gmail.com",
    icon: <FaEnvelope className="text-4xl" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abdulrafay0608",
    username: "abdulrafay0608",
    icon: <FaLinkedin className="text-4xl" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/abdulrafay0608",
    username: "abdulrafay0608",
    icon: <FaGithub className="text-4xl" />,
  },
];


export const navItems = [
  { title: "About", path: "#about" },
  { title: "Services", path: "#services" },
  { title: "Skills", path: "#skills" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];