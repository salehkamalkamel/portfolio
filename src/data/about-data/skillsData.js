// skillsData.js
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiStyledcomponents,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";

const skillsData = [
  {
    title: "Next.js",
    info: "Experienced with Next.js for building server-side rendered React applications, improving performance and SEO.",
    link: "https://nextjs.org/docs",
    tools: ["SSR", "API Routes", "Static Site Generation"],
    icon: SiNextdotjs,
  },
  {
    title: "TypeScript",
    info: "Proficient in TypeScript, enhancing JavaScript applications with strong typing, interfaces, and improved developer experience.",
    link: "https://www.typescriptlang.org/docs/",
    tools: ["Type Safety", "Interfaces", "Generics"],
    icon: BiLogoTypescript,
  },

  {
    title: "HTML",
    info: "Strong command of HTML, including advanced usage of tags, attributes, and SEO best practices.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    tools: ["Tags", "Attributes", "SEO"],
    icon: FaHtml5,
  },
  {
    title: "CSS",
    info: "Expertise in CSS, with a focus on Flexbox, Grid, and creating advanced animations for enhanced user experiences.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    tools: ["Flexbox", "Grid", "Animations"],
    icon: FaCss3Alt,
  },
  {
    title: "JavaScript",
    info: "Proficient in JavaScript, including ES6 features, DOM manipulation, and event handling for dynamic web applications.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    tools: ["ES6", "DOM", "Event Handling"],
    icon: FaJsSquare,
  },
  {
    title: "React",
    info: "Strong understanding of React basics and performance optimization, including Hooks, Context API, and JSX.",
    link: "https://reactjs.org/",
    tools: ["Hooks", "Context API", "JSX"],
    icon: FaReact,
  },
  {
    title: "Tailwind CSS",
    info: "Skilled in Tailwind CSS for rapidly building responsive and customized designs using utility classes.",
    link: "https://tailwindcss.com/",
    tools: ["Utility Classes", "Responsive Design", "Customization"],
    icon: SiTailwindcss,
  },
  {
    title: "Styled Components",
    info: "Proficient in Styled Components, leveraging CSS-in-JS for theming and utilizing the Styled API for component-based styling.",
    link: "https://styled-components.com/",
    tools: ["CSS-in-JS", "Theming", "Styled API"],
    icon: SiStyledcomponents,
  },
  {
    title: "Supabase",
    info: "Experience with Supabase for handling database management, authentication, and storage in web applications.",
    link: "https://supabase.io/",
    tools: ["Database", "Authentication", "Storage"],
    icon: SiSupabase,
  },
  {
    title: "Redux",
    info: "Expert in state management with Redux, including the use of the Redux Toolkit for efficient state management and asynchronous logic.",
    link: "https://redux.js.org/",
    tools: ["createSlice", "Thunk", "Middleware"],
    icon: SiRedux,
  },
  {
    title: "React Query",
    info: "Proficient in React Query for data fetching, caching, and synchronization in React applications.",
    link: "https://react-query.tanstack.com/",
    tools: ["Data Fetching", "Caching", "Synchronization"],
    icon: SiReactquery,
  },
  {
    title: "React Router",
    info: "Skilled in React Router for managing navigation and dynamic routing in single-page applications.",
    link: "https://reactrouter.com/",
    tools: ["Route", "Link", "useHistory"],
    icon: SiReactrouter,
  },
];

export default skillsData;
