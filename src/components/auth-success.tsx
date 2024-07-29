import { CircleCheckBig } from "lucide-react";

interface AuthSuccessProps {
  title: string;
  description: string;
}

export function AuthSuccess({ title, description }: AuthSuccessProps) {
  return (
    <section className="flex flex-col items-center justify-center">
      <CircleCheckBig className="size-12 text-app-green-500" />
      <h1 className="text-2xl font-semibold mt-6 mb-3">{title}</h1>
      <p className="text-center">{description}</p>
    </section>
  );
}
