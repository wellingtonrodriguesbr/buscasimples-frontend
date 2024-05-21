import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useLocalStorage } from "react-use";

import axios from "axios";

export interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
  erro?: boolean;
}

export function useGetUserLocation({ zipCode }: { zipCode: string }) {
  const [userLocation, setUserLocation] = useLocalStorage<{
    zipCode: string;
    city: string;
    state: string;
  }>("bs-user-location");

  const {
    data,
    refetch: fetchUserLocation,
    isFetching,
  } = useQuery({
    queryKey: ["user-location"],
    queryFn: handleGetUserLocation,
  });

  async function handleGetUserLocation() {
    try {
      const response = await axios.get<Address>(
        `https://viacep.com.br/ws/${zipCode}/json/`
      );

      setUserLocation({
        zipCode: response.data.cep,
        city: response.data.localidade,
        state: response.data.uf,
      });

      toast.success("Endereço atualizado com sucesso!");
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error("Falha ao atualizar endereço, tente novamente!");
    }
  }

  return { userLocation, fetchUserLocation, isFetching };
}
