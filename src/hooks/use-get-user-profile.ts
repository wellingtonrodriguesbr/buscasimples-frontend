import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";

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
      console.log(error);
    }
  }

  return { user, isGetUserProfilePending };
}
