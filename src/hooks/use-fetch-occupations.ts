import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";

export interface Occupation {
  id: string;
  title: string;
  slug: string;
  sectorId: string;
}

interface FetchOccupationsProps {
  sectorId: string;
}

export function useFetchOccupations({ sectorId }: FetchOccupationsProps) {
  const { data: occupations, isPending: isFetchOccupationsPending } = useQuery({
    queryKey: ["occupations", sectorId],
    queryFn: handleFetchOccupations,
    enabled: !!sectorId.length,
  });

  async function handleFetchOccupations() {
    try {
      const { data } = await api.get<{ occupations: Occupation[] }>(
        `/${sectorId}/occupations`
      );
      return data.occupations;
    } catch (error) {
      console.log(error);
    }
  }

  return { occupations: occupations ?? [], isFetchOccupationsPending };
}
