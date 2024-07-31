import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface RegisterUserRequest {
  name: string;
  email: string;
  phone: string;
  redirectLink?: string;
}

export function useRegisterUser() {
  const {
    mutateAsync: registerUser,
    isPending: isRegisterUserPending,
    status,
  } = useMutation({
    mutationFn: handleRegister,
  });

  async function handleRegister({
    name,
    email,
    phone,
    redirectLink,
  }: RegisterUserRequest) {
    const { data } = await api.post<{ userId: string }>("/users", {
      name,
      email,
      phone,
      redirectLink,
    });

    return data.userId;
  }

  return { registerUser, isRegisterUserPending, status };
}
