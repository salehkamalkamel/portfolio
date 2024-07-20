// skillsData.js
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiStyledcomponents, SiSupabase } from "react-icons/si";

const skillsData = [
  {
    title: "HTML",
    info: "A markup language for creating web pages.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    tools: ["Tags", "Attributes", "SEO"],
    icon: FaHtml5,
  },
  {
    title: "CSS",
    info: "A stylesheet language used to describe the presentation of a document written in HTML or XML.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    tools: ["Flexbox", "Grid", "Animations"],
    icon: FaCss3Alt,
  },
  {
    title: "JavaScript",
    info: "A programming language that is one of the core technologies of the World Wide Web.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    tools: ["ES6", "DOM", "Event Handling"],
    icon: FaJsSquare,
  },
  {
    title: "React",
    info: "A JavaScript library for building user interfaces.",
    link: "https://reactjs.org/",
    tools: ["Hooks", "Context API", "JSX"],
    icon: FaReact,
  },
  {
    title: "Tailwind CSS",
    info: "A utility-first CSS framework for rapidly building custom designs.",
    link: "https://tailwindcss.com/",
    tools: ["Utility Classes", "Responsive Design", "Customization"],
    icon: SiTailwindcss,
  },
  {
    title: "Styled Components",
    info: "Visual primitives for the component age, styled-components utilizes tagged template literals to style your apps.",
    link: "https://styled-components.com/",
    tools: ["CSS-in-JS", "Theming", "Styled API"],
    icon: SiStyledcomponents,
  },
  {
    title: "Supabase",
    info: "An open source Firebase alternative.",
    link: "https://supabase.io/",
    tools: ["Database", "Authentication", "Storage"],
    icon: SiSupabase,
  },
];

export default skillsData;
