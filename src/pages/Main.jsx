import projects from "../data/about data/projectsData";
import skillsData from "../data/about data/skillsData";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import ProjectsList from "../ui/ProjectsList";
import SkillsList from "../ui/SkillsList";
import About from "./About";

export default function Main() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <Header />
      <div id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <ProjectsList projects={projects} />
        <SkillsList skills={skillsData} />
        <Footer />
      </div>
    </div>
  );
}
