import { Skeleton } from "../ui/skeleton";

export function ProfessionalProfileLoading() {
  return (
    <fieldset className="flex flex-col gap-6 mt-6">
      <div className="flex flex-col gap-3">
        <Skeleton className="w-24 h-5" />
        <Skeleton className="w-full h-10" />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton className="w-28 h-5" />
        <Skeleton className="w-full h-28" />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton className="w-24 h-5" />
        <Skeleton className="w-full h-10" />
      </div>
      <div className="flex flex-col gap-3">
        <Skeleton className="w-24 h-5" />
        <Skeleton className="w-full h-10" />
      </div>
      <Skeleton className="w-full h-10 mt-5" />
    </fieldset>
  );
}
