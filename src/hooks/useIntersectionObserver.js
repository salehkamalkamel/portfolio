import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useIntersectionObserver = (sectionIds) => {
  const [activeId, setActiveId] = useState("");
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -50% 0px" }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup function to unobserve elements and reset the state
    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      setActiveId(""); // Reset the state when the component unmounts
    };
  }, [sectionIds, location]); // Add location as a dependency

  return activeId;
};

export default useIntersectionObserver;
