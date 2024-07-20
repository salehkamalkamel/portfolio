import projects from "../data/about-data/projectsData";
import TableRow from "./TableRow";

export default function TableBody() {
  return (
    <tbody>
      {projects.map((project) => {
        return <TableRow row={project} key={project.title} />;
      })}
    </tbody>
  );
}
