import { useMutation } from "@tanstack/react-query";
import { apiAddProject } from "../sercives/apiAddProject";

export function useAddProject() {
  const {
    mutate: addProject,
    isPending: isAddingProject,
    error,
  } = useMutation({
    mutationFn: (newProject) => apiAddProject(newProject),
  });

  return { addProject, isAddingProject, error };
}
