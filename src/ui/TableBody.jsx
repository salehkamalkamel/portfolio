import { fullProjects } from "../data/about-data/projectsData";
import TableRow from "./TableRow";

export default function TableBody() {
  return (
    <tbody>
      {fullProjects.map((project) => {
        return <TableRow row={project} key={project.title} />;
      })}
    </tbody>
  );
}
