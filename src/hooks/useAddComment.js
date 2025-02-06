import { useMutation } from "@tanstack/react-query";
import { apiAddComment } from "../sercives/apiAddComment";

export function useAddComment() {
  const {
    mutate: addComment,
    isPending: isAddingComment,
    error,
  } = useMutation({
    mutationFn: (comment) => apiAddComment(comment),
  });

  return { addComment, isAddingComment, error };
}
