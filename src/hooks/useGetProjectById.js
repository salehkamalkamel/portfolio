import { useQuery } from "@tanstack/react-query";
import { apiGetProjectById } from "../sercives/apiGetProjectById";

function useGetProjectById(projectId) {
  const {
    data: project,
    isLoading: isGettingProject,
    error,
  } = useQuery({
    queryFn: () => apiGetProjectById(projectId),
    queryKey: ["project", projectId],
  });

  return { project, isGettingProject, error };
}

export { useGetProjectById };
