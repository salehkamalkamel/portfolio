import { FiSearch } from "react-icons/fi";

export default function SearchBar({ query, handleQuery }) {
  return (
    <div className="relative w-full">
      <span className="absolute inset-y-0 left-3 pl-2 flex items-center text-slate-400">
        <FiSearch />
      </span>
      <input
        value={query}
        onChange={(e) => handleQuery(e.target.value)}
        className="py-4 pl-12 pr-6 outline-none text-slate-300 bg-slate-800 rounded-md w-full"
        placeholder="Quick Search..."
      />
    </div>
  );
}
