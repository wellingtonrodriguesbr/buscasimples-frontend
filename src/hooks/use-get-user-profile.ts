import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string | null;
}

export function useGetUserProfile() {
  const { data: user, isPending: isGetUserProfilePending } = useQuery({
    queryKey: ["user-profile"],
    queryFn: handleGetUserProfile,
    enabled: true,
  });

  async function handleGetUserProfile() {
    try {
      const { data } = await api.get<{ user: User }>("/me");
      return data.user;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          toast.error("Você foi deslogado, faça login novamente");
        }
        toast.error("Falha ao buscar perfil");
      }
    }
  }

  return { user, isGetUserProfilePending };
}
