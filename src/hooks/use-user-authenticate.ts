import { useEffect, useState } from "react";

export function useUserAuthenticate() {
  const [authenticate, setAuthenticate] = useState(false);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (accessToken) {
      setAuthenticate(true);
    }
  }, [accessToken]);

  return { authenticate };
}
