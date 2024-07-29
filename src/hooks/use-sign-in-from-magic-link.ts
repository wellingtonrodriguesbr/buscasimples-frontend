import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface SignInFromMagicLinkRequest {
  email: string;
}

export function useSignInFromMagicLinkOut() {
  const {
    mutateAsync: signInFromMagicLink,
    isPending: isSignInFromMagicLinkPending,
    status,
  } = useMutation({
    mutationFn: handleSignInFromMagicLink,
  });

  async function handleSignInFromMagicLink({
    email,
  }: SignInFromMagicLinkRequest) {
    await api.post("/sessions/sign-in", {
      email,
    });
  }

  return { signInFromMagicLink, isSignInFromMagicLinkPending, status };
}
