import { useMutation } from "@tanstack/react-query";
import { apiUpdateSkill } from "../sercives/apiUpdateSkill";

export function useUpdateSkill() {
  const {
    mutate: updateSkill,
    isPending: isUpdatingSkill,
    error,
  } = useMutation({
    mutationFn: ({ skillId, updatedSkillData }) =>
      apiUpdateSkill(skillId, updatedSkillData),
  });

  return { updateSkill, isUpdatingSkill, error };
}
