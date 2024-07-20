import AncorBtn from "./Ancor";
import Tool from "./Tool";

export default function Skill({ skill }) {
  const Icon = skill.icon;
  return (
    <div className="relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="flex items-center justify-center text-3xl  z-10 ">
        <Icon />
      </div>
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <div className="flex flex-col sm:order-2 sm:col-span-6 z-10">
        <h3>
          <AncorBtn
            href={skill.link}
            label={`${skill.title} (opens in a new tab)`}
          >
            {skill.title}
          </AncorBtn>
        </h3>
        <p className="mt-2 text-sm leading-normal">{skill.info}</p>
        {skill.tools.length > 0 && (
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            {skill.tools.map((tool) => (
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
