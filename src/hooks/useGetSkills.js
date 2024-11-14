import { useQuery } from "@tanstack/react-query";
import { apiGetSkills } from "../sercives/apiGetSkills";

function useGetSkills() {
  const {
    data: skills,
    isLoading: isGettingSkills,
    error,
  } = useQuery({
    queryFn: () => apiGetSkills(),
    queryKey: ["skills"],
  });

  return { skills, isGettingSkills, error };
}

export { useGetSkills };
