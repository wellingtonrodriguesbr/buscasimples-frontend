import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

interface RegisterUserRequest {
  name: string;
  email: string;
  phone: string;
}

export function useRegisterUser() {
  const { mutateAsync: registerUser, isPending: isRegisterUserPending } =
    useMutation({
      mutationFn: handleRegister,
    });

  async function handleRegister({ name, email, phone }: RegisterUserRequest) {
    const { data } = await api.post<{ userId: string }>("/users", {
      name,
      email,
      phone,
    });

    return data.userId;
  }

  return { registerUser, isRegisterUserPending };
}
