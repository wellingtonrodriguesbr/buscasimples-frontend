import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

export function useUserAuthenticate() {
  const [authenticate, setAuthenticate] = useState(false);
  const [accessToken] = useLocalStorage<string>("accessToken");

  useEffect(() => {
    if (accessToken) {
      setAuthenticate(true);
    }
  }, [accessToken]);

  return { authenticate };
}
