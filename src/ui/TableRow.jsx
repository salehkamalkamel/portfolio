import {
  Link as FeatherLink,
  ExternalLink as FeatherExternalLink,
} from "feather-icons-react";
import Tool from "./Tool";

const TableRow = ({ row }) => {
  return (
    <tr className="border-b border-slate-300/10 last:border-none">
      <td className="py-4 pr-4 align-top text-sm">
        <div>{row.year}</div>
      </td>
      <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
        <a
          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base"
          href={row.link}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${row.title} (opens in a new tab)`}
        >
          <span>
            {row.title}{" "}
            {row.subtitle && (
              <span className="inline-block ml-1">{row.subtitle}</span>
            )}
            <FeatherLink
              className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1"
              aria-hidden="true"
            />
          </span>
        </a>
        {row.title && (
          <span className="hidden sm:block font-normal text-slate-400">
            {row.title}
          </span>
        )}
      </td>
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <div className="translate-y-px whitespace-nowrap">{row.company}</div>
      </td>
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <ul className="flex -translate-y-1.5 flex-wrap">
          {row.skills.map((skill, index) => (
            <li key={index} className="my-1 mr-1.5">
              <Tool key={index}>{skill}</Tool>
            </li>
          ))}
        </ul>
      </td>
      <td className="hidden py-4 align-top sm:table-cell">
        <ul className="translate-y-1">
          <li className="mb-1 flex items-center">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm group/link"
              href={row.website}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${row.websiteLabel} (opens in a new tab)`}
            >
              <span className="inline-block">
                {row.websiteLabel}
                <FeatherExternalLink
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-0.5"
                  aria-hidden="true"
                />
              </span>
            </a>
          </li>
        </ul>
      </td>
    </tr>
  );
};

export default TableRow;
