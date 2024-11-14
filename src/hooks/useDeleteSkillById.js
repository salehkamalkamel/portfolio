import { useMutation } from "@tanstack/react-query";
import { apiDeleteSkillById } from "../sercives/apiDeleteSkillById";

export function useDeleteSkillById() {
  const {
    mutate: deleteSkill,
    isPending: isDeletingSkill,
    error,
  } = useMutation({
    mutationFn: (skillId) => apiDeleteSkillById(skillId),
  });
  return { deleteSkill, isDeletingSkill, error };
}
