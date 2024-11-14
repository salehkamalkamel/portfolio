import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../features/loading/LoadingSpinner";
import { useGetProjects } from "../hooks/useGetProjects";
import LinkBtn from "../ui/LinkBtn";

export default function DashBoard() {
  const { projects, isGettingProjects } = useGetProjects();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="flex flex-col items-center justify-center gap-12">
        <h1 className="text-3xl md:text-4xl w-full text-center font-semibold tracking-tight text-slate-200">
          Dashboard Control
        </h1>

        {/* Project and Skill Cards */}
        <div className="flex items-center justify-center gap-8">
          <div className="p-6 md:p-8 rounded-lg border-2 border-slate-200/10 bg-slate-800/70 flex flex-col gap-4 items-center justify-center w-60 hover:bg-slate-800/90 transition-colors">
            {isGettingProjects ? (
              <LoadingSpinner />
            ) : (
              <>
                <p className="text-lg text-center text-slate-300">
                  <span className="text-3xl font-semibold text-yellow-400">
                    {projects?.length || 0 + 5}
                  </span>{" "}
                  Projects Added
                </p>
              </>
            )}
            <LinkBtn
              in={true}
              to="/projectsShow"
              className="text-blue-400 hover:text-blue-300"
            >
              See all projects
            </LinkBtn>
          </div>

          <div className="p-6 md:p-8 rounded-lg border-2 border-slate-200/10 bg-slate-800/70 flex flex-col gap-4 items-center justify-center w-60 hover:bg-slate-800/90 transition-colors">
            {isGettingProjects ? (
              <LoadingSpinner />
            ) : (
              <>
                <p className="text-lg text-center text-slate-300">
                  <span className="text-3xl font-semibold text-yellow-400">
                    {projects?.length || 0 + 5}
                  </span>{" "}
                  Skills Added
                </p>
              </>
            )}
            <LinkBtn
              to="/skillsShow"
              in={true}
              className="text-blue-400 hover:text-blue-300"
            >
              See all Skills
            </LinkBtn>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-6 flex-col sm:flex-row items-center justify-center w-full">
          <button
            onClick={() => navigate("/addProject")}
            className="w-full justify-center flex items-center rounded-full bg-teal-400/20 px-8 py-4 text-lg font-medium leading-5 text-teal-300 hover:opacity-75 cursor-pointer transition-all"
          >
            Add New Project
          </button>
          <button
            onClick={() => navigate("/addSkill")}
            className="w-full justify-center flex items-center rounded-full bg-teal-400/20 px-8 py-4 text-lg font-medium leading-5 text-teal-300 hover:opacity-75 cursor-pointer transition-all"
          >
            Add New Skill
          </button>
        </div>
      </div>
    </div>
  );
}
