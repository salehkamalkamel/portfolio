export default function ProjectSkeleton() {
  return (
    <div className="animate-pulse group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50">
      {/* Skeleton for the background hover effect */}
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md bg-slate-700/50 lg:block"></div>

      {/* Image placeholder */}
      <div className="rounded border-2 border-slate-200/10 bg-slate-600 h-28 w-full sm:order-1 sm:col-span-2"></div>

      {/* Content placeholders */}
      <div className="z-10 sm:order-2 sm:col-span-6">
        {/* Title placeholder */}
        <div className="h-6 bg-slate-600 rounded w-3/4 mb-2"></div>

        {/* Description placeholder */}
        <div className="h-4 bg-slate-600 rounded w-full mb-2"></div>
        <div className="h-4 bg-slate-600 rounded w-5/6 mb-2"></div>

        {/* Tools placeholder */}
        <div className="mt-2 flex flex-wrap">
          <div className="h-6 bg-slate-600 rounded-full w-16 mr-2 mb-2"></div>
          <div className="h-6 bg-slate-600 rounded-full w-20 mr-2 mb-2"></div>
          <div className="h-6 bg-slate-600 rounded-full w-14 mr-2 mb-2"></div>
        </div>
      </div>
    </div>
  );
}
