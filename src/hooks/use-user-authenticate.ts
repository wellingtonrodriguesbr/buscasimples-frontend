import { useEffect, useState } from "react";
import { useGetUserProfile } from "./use-get-user-profile";

export function useUserAuthenticate() {
  const [authenticate, setAuthenticate] = useState(false);
  const { user, isGetUserProfilePending } = useGetUserProfile();

  useEffect(() => {
    if (user && !isGetUserProfilePending) {
      setAuthenticate(true);
    }
  }, [isGetUserProfilePending, user]);

  return { authenticate, loading: isGetUserProfilePending };
}
