import { useMutation } from "@tanstack/react-query";
import { apiDeleteProjectById } from "../sercives/apiDeleteProjectById";

export function useDeleteProjectById() {
  const {
    mutate: deleteProject,
    isPending: isDeletingProject,
    error,
  } = useMutation({
    mutationFn: (projectId) => apiDeleteProjectById(projectId),
  });
  return { deleteProject, isDeletingProject, error };
}
