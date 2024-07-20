// src/context/ActiveSectionContext.js

import { createContext, useContext } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const ActiveSectionContext = createContext();
const sections = ["home", "about", "skills", "projects"];

const ActiveSectionProvider = ({ children }) => {
  const activeId = useIntersectionObserver(sections);

  return (
    <ActiveSectionContext.Provider value={activeId}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

const useActiveSection = () => {
  return useContext(ActiveSectionContext);
};

export { ActiveSectionProvider, useActiveSection };
