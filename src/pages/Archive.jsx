import BackBtn from "../ui/BackBtn";
import ProjectsTable from "../ui/ProjectsTable";

export default function Archive() {
  return (
    <div className="lg:py-24">
      <BackBtn to="/">Saleh Kamal</BackBtn>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        All Projects
      </h1>
      <ProjectsTable />
    </div>
  );
}
