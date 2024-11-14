export default function SkillSkeleton() {
  return (
    <div className="animate-pulse relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:group-hover/list:opacity-50">
      {/* Icon placeholder */}
      <div className="flex items-center justify-center text-3xl z-10">
        <div className="h-12 w-12 bg-slate-600 rounded-full"></div>
      </div>

      {/* Background hover effect */}
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md bg-slate-700/50 lg:block"></div>

      {/* Content placeholders */}
      <div className="flex flex-col sm:order-2 sm:col-span-6 z-10">
        {/* Title placeholder */}
        <div className="h-6 bg-slate-600 rounded w-1/2 mb-2"></div>

        {/* Info text placeholder */}
        <div className="h-4 bg-slate-600 rounded w-full mb-2"></div>
        <div className="h-4 bg-slate-600 rounded w-5/6 mb-2"></div>

        {/* Tools placeholders */}
        <div className="mt-2 flex flex-wrap">
          <div className="h-6 bg-slate-600 rounded-full w-16 mr-2 mb-2"></div>
          <div className="h-6 bg-slate-600 rounded-full w-20 mr-2 mb-2"></div>
          <div className="h-6 bg-slate-600 rounded-full w-14 mr-2 mb-2"></div>
        </div>
      </div>
    </div>
  );
}
