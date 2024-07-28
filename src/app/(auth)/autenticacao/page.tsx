import { Auth } from "@/components/auth";
import { Suspense } from "react";

export default function AuthenticatePage() {
  return (
    <main className="w-full h-screen fixed inset-0 backdrop-blur-lg">
      <Suspense>
        <Auth />
      </Suspense>
    </main>
  );
}
