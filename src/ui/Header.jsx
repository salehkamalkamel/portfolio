import { GitHub, Instagram, Linkedin } from "react-feather";
import { useActiveSection } from "../contexts/ActiveSection";

const sections = ["about", "projects", "skills"];

const Header = () => {
  const activeId = useActiveSection();

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Saleh Kamal</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Frontend Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          Innovative Front-End Developer
          <br />
          Crafting Dynamic Web Experiences with Next, React and Tailwind CSS
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {sections.map((section) => (
              <li key={section}>
                <a
                  className={`group flex items-center py-3 ${
                    activeId === section ? "text-white" : "text-slate-500"
                  }`}
                  href={`#${section}`}
                >
                  <span
                    className={`nav-indicator mr-4 h-px transition-all ${
                      activeId === section
                        ? "w-16 bg-white"
                        : "w-8 bg-slate-600"
                    } group-hover:w-16 group-hover:bg-slate-200`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest transition-all ${
                      activeId === section
                        ? "text-white"
                        : "text-slate-500 group-hover:text-slate-200"
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {/* Social media links */}
        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200"
            href="https://github.com/salehkamalkamel"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <GitHub className="h-6 w-6" />
          </a>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200"
            href="https://www.linkedin.com/in/saleh-kamal-60b96931a"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200"
            href="https://www.instagram.com/saleh_kamal_tsx/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram (opens in a new tab)"
            title="Instagram"
          >
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
