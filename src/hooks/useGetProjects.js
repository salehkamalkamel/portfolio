import { useQuery } from "@tanstack/react-query";
import { apiGetProjects } from "../sercives/apiGetProjects";

function useGetProjects() {
  const {
    data: projects,
    isLoading: isGettingProjects,
    error,
  } = useQuery({
    queryFn: () => apiGetProjects(),
    queryKey: ["projects"],
  });

  return { projects, isGettingProjects, error };
}

export { useGetProjects };
