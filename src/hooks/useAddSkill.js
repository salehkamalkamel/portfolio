import { useMutation } from "@tanstack/react-query";
import { apiAddSkill } from "../sercives/apiAddSkill";

export function useAddSkill() {
  const {
    mutate: addSkill,
    isPending: isAddingSkill,
    error,
  } = useMutation({
    mutationFn: (newSkill) => apiAddSkill(newSkill),
  });

  return { addSkill, isAddingSkill, error };
}
