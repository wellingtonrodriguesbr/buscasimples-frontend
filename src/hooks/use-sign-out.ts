import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { useLocalStorage } from "react-use";

export function useSignOut() {
  const [_, __, remove] = useLocalStorage("accessToken");

  const {
    mutateAsync: signOut,
    isPending: isSignOutPending,
    status,
  } = useMutation({
    mutationFn: handleSignOut,
  });

  async function handleSignOut() {
    await api.post("/sessions/sign-out");
    remove();
  }

  return { signOut, isSignOutPending, status };
}
