import { ArrowUpRight, GitHub } from "react-feather";
import Tool from "../../ui/Tool";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetProjectById } from "../../hooks/useGetProjectById";
import SkeletonProjectDetails from "../../ui/SkeletonProjectDetails";
import Button from "../../ui/Button";
import BackBtn from "../../ui/BackBtn";
export default function ProjectDetails() {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { project, isGettingProject, error } = useGetProjectById(projectId);

  if (error)
    return (
      <div className="text-red-400 flex gap-4 flex-col items-center justify-center w-full h-screen">
        <p>{error.message}</p>
        <Button onClick={() => navigate("/")} className="w-fit">
          Back
        </Button>
      </div>
    );
  if (isGettingProject) return <SkeletonProjectDetails />;
  return (
    <div className="flex flex-col items-center justify-center sm:grid sm:grid-cols-3 min-h-screen sm:h-screen  text-slate-200 gap-x-8">
      <div className="w-full h-full flex flex-col justify-start items-center gap-6 p-4">
        <div className="w-full flex justify-start items-center md:pt-8">
          <BackBtn to="/">Saleh Kamal</BackBtn>
        </div>
        <Tool>{project.title}</Tool>
        <div className=" h-auto rounded-md border border-slate-700 shadow-lg">
          <img
            className="block w-full h-full rounded-md"
            src={project?.imageSrc}
            alt="Project screenshot"
          />
        </div>
        <Section>
          <div className="flex flex-col w-full gap-4 mt-2">
            <Link
              target="_blank"
              to={project?.gitHubLink}
              className="bg-blue-600 flex flex-row cursor-pointer hover:bg-blue-700 text-white px-4 py-4 rounded-md shadow justify-center gap-4"
            >
              Visit GitHub
              <GitHub />
            </Link>
            <Link
              to={project?.website}
              target="_blank"
              className="bg-teal-400/20 flex text-teal-300 flex-row hover:bg-green-700  px-4 py-4 rounded-md shadow gap-4 justify-center"
            >
              Go to the website
              <ArrowUpRight />
            </Link>
          </div>
        </Section>
      </div>

      <div className="col-span-2 py-24 flex flex-col h-full px-6 space-y-8 sm:overflow-y-scroll hidden-scroll">
        <Section title="Story" content={project.story} />
        <Section title="Info" content={project.info} />

        <Section title="Technologies">
          <ul className="mt-2 flex flex-wrap gap-2">
            {project?.tools?.split(",")?.map((tool) => (
              <li key={tool}>
                <Tool>{tool}</Tool>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Skills">
          <ul className="mt-2 flex flex-wrap gap-2">
            {project.skills?.split(",")?.map((skill) => (
              <li key={skill}>
                <Tool>{skill}</Tool>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Finished" content={project?.year} />
      </div>
    </div>
  );
}

function Section({ title, content, children }) {
  return (
    <div className="border-b w-full border-slate-600 pb-6 last:border-none">
      {title && (
        <div className="flex items-center rounded-full bg-blue-500 px-3 py-1 text-xs font-medium leading-5 text-white w-fit">
          {title}
        </div>
      )}
      {content ? (
        <p className="mt-2 text-sm leading-normal text-slate-300">{content}</p>
      ) : (
        children
      )}
    </div>
  );
}
