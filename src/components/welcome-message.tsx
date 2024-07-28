import { useGetUserProfile } from "@/hooks/use-get-user-profile";
import { Skeleton } from "./ui/skeleton";
import dayjs from "dayjs";

export function WelcomeMessage() {
  const { user, isGetUserProfilePending } = useGetUserProfile();
  const currentHour = dayjs().hour();

  const getGreeting = () => {
    if (currentHour >= 6 && currentHour < 12) {
      return "Bom dia";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  };

  return (
    <>
      {isGetUserProfilePending ? (
        <Skeleton className="w-80 h-6 bg-app-gray-100 mb-4" />
      ) : (
        <span className="mb-4 block text-app-gray-500">
          {getGreeting()}, {user?.name.split(" ")[0]}! 👋
        </span>
      )}
    </>
  );
}
