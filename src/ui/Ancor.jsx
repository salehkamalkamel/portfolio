// src/UI/Link.js

import { ArrowRight, ArrowUpRight } from "react-feather";

const AncorBtn = ({ href, label, children, in: isInternal }) => {
  return (
    <a
      className="inline-flex items-center font-medium leading-tight text-slate-200 hover:text-teal focus-visible:text-teal-300 group text-base"
      href={href}
      aria-label={label}
      target="_blank"
    >
      <span className="flex gap-2 items-center space-x-1">
        {children}
        <span className="transform transition-transform group-hover:translate-x-1">
          {isInternal ? <ArrowRight /> : <ArrowUpRight />}
        </span>
      </span>
    </a>
  );
};

export default AncorBtn;
