import { useQuery } from "@tanstack/react-query";
import { apiGetSkillById } from "../sercives/apiGetSkillById";

function useGetSkillById(skillId) {
  const {
    data: skill,
    isLoading: isGettingskill,
    error,
  } = useQuery({
    queryFn: () => apiGetSkillById(skillId),
    queryKey: ["skill", skillId],
  });

  return { skill, isGettingskill, error };
}

export { useGetSkillById };
