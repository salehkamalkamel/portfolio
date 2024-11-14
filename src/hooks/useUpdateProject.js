import { useMutation } from "@tanstack/react-query";
import { apiUpdateProject } from "../sercives/apiUpdateProject";

export function useUpdateProject() {
  const {
    mutate: updateProject,
    isPending: isUpdatingProject,
    error,
  } = useMutation({
    mutationFn: ({ projectId, updatedProjectData }) =>
      apiUpdateProject(projectId, updatedProjectData),
  });

  return { updateProject, isUpdatingProject, error };
}
