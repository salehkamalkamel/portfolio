import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

export default function Item() {
  return (
    <div className="w-full flex items-center justify-between px-6 py-4  rounded-lg border-2 border-slate-200/10 bg-slate-800/70 ">
      <div className="flex items-center justify-center gap-6">
        <div className="w-16 h-12 rounded-md bg-yellow-300"></div>

        <p className="text-lg font-medium text-slate-300">Project Title</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button className="bg-blue-500 text-slate-100 rounded-full p-4 flex items-center justify-center">
          <FiEdit3 size="1rem" />
        </button>
        <button className="bg-red-600 text-slate-100 rounded-full p-4 flex items-center justify-center">
          <MdDeleteOutline size="1rem" />
        </button>
      </div>
    </div>
  );
}
