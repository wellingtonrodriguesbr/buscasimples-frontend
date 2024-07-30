import { api } from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UpdateUserInformationRequest {
  name: string;
  email: string;
  phone: string;
}

export function useUpdateUserInformation() {
  const queryClient = useQueryClient();

  const {
    mutateAsync: updateUserInformation,
    isPending: isUpdateUserInformationPending,
    status,
  } = useMutation({
    mutationFn: handleUpdateUserInformation,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-profile"],
      });
    },
  });

  async function handleUpdateUserInformation({
    name,
    email,
    phone,
  }: UpdateUserInformationRequest) {
    await api.put<{ userId: string }>("/user/information", {
      name,
      email,
      phone,
    });
  }

  return { updateUserInformation, isUpdateUserInformationPending, status };
}
