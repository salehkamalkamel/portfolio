export default function TableRowSkeleton() {
  return (
    <tr className="animate-pulse border-b border-slate-300/10 last:border-none">
      {/* Year placeholder */}
      <td className="py-4 pr-4 align-top text-sm">
        <div className="h-4 w-10 bg-slate-600 rounded"></div>
      </td>

      {/* Title placeholder */}
      <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
        <div className="h-5 bg-slate-600 rounded w-3/4 mb-1"></div>
        <div className="hidden sm:block h-4 bg-slate-700 rounded w-1/2"></div>
      </td>

      {/* Company placeholder */}
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <div className="h-4 w-24 bg-slate-600 rounded"></div>
      </td>

      {/* Skills placeholder */}
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <ul className="flex -translate-y-1.5 flex-wrap">
          {[...Array(3)].map((_, index) => (
            <li key={index} className="my-1 mr-1.5">
              <div className="h-6 w-12 bg-slate-600 rounded-full"></div>
            </li>
          ))}
        </ul>
      </td>

      {/* Website placeholder */}
      <td className="hidden py-4 align-top sm:table-cell">
        <ul className="translate-y-1">
          <li className="mb-1 flex items-center">
            <div className="h-4 w-20 bg-slate-600 rounded"></div>
          </li>
        </ul>
      </td>
    </tr>
  );
}
