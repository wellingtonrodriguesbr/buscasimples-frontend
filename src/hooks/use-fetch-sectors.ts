import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";

export interface Sector {
  id: string;
  title: string;
  slug: string;
}

export function useFetchSectors() {
  const { data: sectors, isPending: isFetchSectorsPending } = useQuery({
    queryKey: ["sectors"],
    queryFn: handleFetchSectors,
    enabled: true,
  });

  async function handleFetchSectors() {
    try {
      const { data } = await api.get<{ sectors: Sector[] }>("/sectors");
      return data.sectors;
    } catch (error) {
      console.log(error);
    }
  }

  return { sectors: sectors ?? [], isFetchSectorsPending };
}
