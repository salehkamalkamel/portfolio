import { FiEdit3 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Modal from "../../../ui/Modal";
import DeleteProjectBtn from "./DeleteProjectBtn";
import DeleteProjectWindow from "./DeleteProjectWindow";

export default function ProjectItem({ project }) {
  const navigate = useNavigate();

  function handleEditClick() {
    navigate(`/editproject/${project?.id}`);
  }

  return (
    <div className="w-full flex items-center justify-between px-6 py-4  rounded-lg border-2 border-slate-200/10 bg-slate-800/70 ">
      <div className="flex items-center justify-center gap-6">
        <div className="w-16 h-12 rounded-md border border-slate-200/10">
          <img
            className="block w-full h-full"
            src={project?.imageSrc}
            alt={project?.imageAlt}
          />
        </div>

        <p className="text-lg font-medium text-slate-300">{project?.title}</p>
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
            <DeleteProjectWindow target="Project" projectId={project?.id} />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}
