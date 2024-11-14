import { ArrowLeft } from "react-feather";

export default function SkeletonProjectDetails() {
  return (
    <div className="flex flex-col items-center justify-center sm:grid sm:grid-cols-3 min-h-screen sm:h-screen text-slate-200 gap-x-8">
      <div className="w-full h-full flex flex-col justify-start items-center gap-6 p-4">
        <div className="w-full flex justify-start items-center">
          <button className="sm:mt-8 p-4 flex items-center justify-center gap-2 text-slate-500 animate-pulse">
            <ArrowLeft />
            <span className="w-24 h-4 bg-slate-500 rounded-full" />
          </button>
        </div>
        <div className="sm:mt-8 w-32 h-8  bg-teal-400/20 rounded-full animate-pulse" />
        <div className="w-[90%] h-48 bg-slate-700 rounded-md animate-pulse" />
        <div className="flex flex-col w-full gap-4 mt-2">
          <div className="bg-blue-600 h-10 w-full rounded-md animate-pulse" />
          <div className="bg-teal-400/20 h-10 w-full rounded-md animate-pulse" />
        </div>
      </div>

      <div className="col-span-2 py-24 flex flex-col h-full px-6 space-y-8 sm:overflow-y-scroll hidden-scroll">
        <SkeletonSection title="Story" />
        <SkeletonSection title="Info" />
        <SkeletonSection title="Technologies">
          <div className="flex flex-wrap gap-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-16 h-6 bg-slate-500 rounded-full animate-pulse"
              />
            ))}
          </div>
        </SkeletonSection>
        <SkeletonSection title="Skills">
          <div className="flex flex-wrap gap-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-16 h-6 bg-slate-500 rounded-full animate-pulse"
              />
            ))}
          </div>
        </SkeletonSection>
        <SkeletonSection title="Finished">
          <div className="w-20 h-4 bg-slate-500 rounded-full animate-pulse" />
        </SkeletonSection>
      </div>
    </div>
  );
}

function SkeletonSection({ children }) {
  return (
    <div className="border-b w-full border-slate-600 pb-6 last:border-none">
      <div className="flex h-6 w-12 items-center rounded-full bg-blue-500 px-3 py-1 text-xs font-medium leading-5 text-slate-500 animate-pulse"></div>
      <div className="mt-2 text-sm leading-normal text-slate-300">
        {children || (
          <div className="w-full h-4 bg-slate-500 rounded-full animate-pulse mt-2" />
        )}
      </div>
    </div>
  );
}
