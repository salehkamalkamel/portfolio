// src/UI/Link.js

import { ArrowRight, ArrowUpRight } from "react-feather";
import { Link } from "react-router-dom";

const LinkBtn = ({ to, label, children, in: isInternal }) => {
  return (
    <Link
      className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal focus-visible:text-teal-300 group text-base"
      to={to}
      aria-label={label}
    >
      <span className="flex gap-2 items-center space-x-1">
        {children}
        <span className="transform transition-transform group-hover:translate-x-1">
          {isInternal ? <ArrowRight /> : <ArrowUpRight />}
        </span>
      </span>
    </Link>
  );
};

export default LinkBtn;
