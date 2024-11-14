import { FiEdit3 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Modal from "../../../ui/Modal";
import DeleteProjectBtn from "../projects/DeleteProjectBtn";
import DeleteSkillWindow from "./DeleteSkillWindow";

export default function SkillItem({ skill }) {
  const navigate = useNavigate();

  function handleEditClick() {
    navigate(`/editskill/${skill?.id}`);
  }
  return (
    <div className="w-full flex items-center justify-between px-6 py-4  rounded-lg border-2 border-slate-200/10 bg-slate-800/70 ">
      <div className="flex items-center justify-center gap-6">
        <p className="text-lg font-medium text-slate-300">{skill?.title}</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handleEditClick}
          className="bg-blue-500 text-slate-100 rounded-full p-4 flex items-center justify-center"
        >
          <FiEdit3 size="1rem" />
        </button>
        <Modal>
          <Modal.Toggle>
            <DeleteProjectBtn />
          </Modal.Toggle>
          <Modal.Window>
            <DeleteSkillWindow target="Skill" skillId={skill?.id} />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}
