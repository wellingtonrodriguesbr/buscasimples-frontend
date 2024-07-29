import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

export function useUserAuthenticate() {
  const [accessToken] = useLocalStorage("accessToken");

  const [authenticate, setAuthenticate] = useState(false);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    if (accessToken) {
      setAuthenticate(true);
      setIsPending(false);
    } else {
      setAuthenticate(false);
      setIsPending(false);
    }
  }, [accessToken]);

  return { authenticate, isPending };
}
