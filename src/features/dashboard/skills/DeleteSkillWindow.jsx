import { useQueryClient } from "@tanstack/react-query";
import LoadingSpinner from "../../loading/LoadingSpinner";
import { useDeleteSkillById } from "../../../hooks/useDeleteSkillById";

export default function DeleteSkillWindow({
  skillId,
  onClose,
  isOpen,
  target,
}) {
  const { deleteSkill, isDeletingSkill, error } = useDeleteSkillById();
  const queryClient = useQueryClient();

  function handleDelete() {
    deleteSkill(skillId, {
      onSuccess: () => {
        queryClient.invalidateQueries(["skills"]);
        onClose();
      },
    });
  }

  if (error) console.log(error);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-[#1A1B21] text-white rounded-lg p-8 w-[90%] md:w-[50%]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Delete Confirmation</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            &times;
          </button>
        </div>
        <div className="text-gray-300">
          <p>
            {` Are you sure you want to delete this ${
              target || "item"
            }? This action cannot be
            undone.`}
          </p>
        </div>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            {isDeletingSkill ? <LoadingSpinner /> : "Delete"}
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
