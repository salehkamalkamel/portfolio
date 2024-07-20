import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export default function ProjectsTable() {
  return (
    <table id="content" className="mt-12 w-full border-collapse text-left">
      <TableHeader />
      <TableBody />
    </table>
  );
}
