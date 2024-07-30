import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { AxiosError } from "axios";
import { useLocalStorage } from "react-use";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string | null;
}

export function useGetUserProfile() {
  const [_, __, remove] = useLocalStorage("accessToken");
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
        if (error.response?.status === 404) {
          remove();
        }
      }
      console.log(error);
    }
  }

  return { user, isGetUserProfilePending };
}
