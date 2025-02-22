import ProjectSkeleton from "../features/loading/ProjectSkeleton";
import { useGetProjects } from "../hooks/useGetProjects";
import LinkBtn from "./LinkBtn";
import Project from "./Project";

export default function ProjectsList() {
  const { projects, isGettingProjects, error } = useGetProjects();
  const sortedProjects = projects?.sort((a, b) => +b.year - +a.year);
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        {isGettingProjects ? (
          <ul className="group/list">
            {[...Array(5)].map((_, idx) => (
              <li className="mb-12" key={idx}>
                <ProjectSkeleton />
              </li>
            ))}
          </ul>
        ) : error ? (
          <div className="mt-12 text-center text-red-500">
            <p>Failed to load projects. Please try again.</p>
          </div>
        ) : !sortedProjects?.length ? (
          <div className="mt-12 text-center text-red-500">
            <p>No Projects Avilable.</p>
          </div>
        ) : (
          <>
            <ul className="group/list">
              {sortedProjects.map((project) => (
                <li className="mb-12" key={project.imageSrc}>
                  <Project project={project} />
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <LinkBtn to="archive" in={true} label="button">
                See full projects Archive
              </LinkBtn>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
