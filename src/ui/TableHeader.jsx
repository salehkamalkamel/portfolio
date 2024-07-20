const TableHeader = () => {
  return (
    <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
      <tr>
        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
        <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
          Project
        </th>
        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
          Made at
        </th>
        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
          Built with
        </th>
        <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
          Link
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
