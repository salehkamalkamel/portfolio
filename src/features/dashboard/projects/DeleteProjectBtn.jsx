import { MdDeleteOutline } from "react-icons/md";

export default function DeleteProjectBtn({ onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="bg-red-600 text-slate-100 rounded-full p-4 flex items-center justify-center"
    >
      <MdDeleteOutline size="1rem" />
    </button>
  );
}
