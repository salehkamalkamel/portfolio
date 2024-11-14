import { useMutation } from "@tanstack/react-query";
import { apiLoginWithGoogle } from "../sercives/apiLoginWithGoogle";

function useLoginWithGoogle() {
  const {
    mutate: loginWithGoogle,
    isPending: isLoggingWithGoogle,
    error,
  } = useMutation({
    mutationFn: () => apiLoginWithGoogle(),
  });

  return { loginWithGoogle, isLoggingWithGoogle, error };
}

export { useLoginWithGoogle };
