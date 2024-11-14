import TableRowSkeleton from "../features/loading/TableRowSkeleton";
import { useGetProjects } from "../hooks/useGetProjects";
import TableRow from "./TableRow";

export default function TableBody() {
  const { projects, isGettingProjects } = useGetProjects();
  return (
    <tbody>
      {isGettingProjects
        ? [...Array(10)].map((_, idx) => <TableRowSkeleton key={idx} />)
        : projects?.map((project) => {
            return <TableRow row={project} key={project.title} />;
          })}
    </tbody>
  );
}
