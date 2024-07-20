import { ArrowLeft } from "react-feather";
import { Link } from "react-router-dom";

export default function BackBtn({ children, to }) {
  return (
    <Link
      to={to}
      className="group mb-2 inline-flex gap-2 items-center font-semibold leading-tight text-teal-300"
      href="/"
    >
      <ArrowLeft className="transform transition-transform group-hover:-translate-x-2" />
      {children}
    </Link>
  );
}
