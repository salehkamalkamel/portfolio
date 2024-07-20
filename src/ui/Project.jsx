import AncorBtn from "./Ancor";
import Tool from "./Tool";

export default function Project({ project }) {
  return (
    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <img
        alt={project.imageAlt}
        loading="lazy"
        width="200"
        height="48"
        decoding="async"
        data-nimg="1"
        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
        style={{ color: "transparent" }}
        src={project.imageSrc}
      />
      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3>
          <AncorBtn
            href={project.link}
            label={`${project.title} (opens in a new tab)`}
          >
            {project.title}
          </AncorBtn>
        </h3>
        <p className="mt-2 text-sm leading-normal">{project.info}</p>
        {project.tools.length > 0 && (
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            {project.tools.map((tool) => (
              <li className="mr-1.5 mt-2" key={tool}>
                <Tool>{tool}</Tool>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
