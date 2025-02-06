import React from "react";
import { breifProjects } from "../data/about-data/projectsData";
import skillsData from "../data/about-data/skillsData";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

const About = React.lazy(() => import("./About"));
const ProjectsList = React.lazy(() => import("../ui/ProjectsList"));
const SkillsList = React.lazy(() => import("../ui/SkillsList"));

export default function Main() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <div id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <ProjectsList projects={breifProjects} />
        <SkillsList skills={skillsData} />
        <Footer />
      </div>
    </div>
  );
}
