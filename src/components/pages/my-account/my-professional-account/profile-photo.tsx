"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetUserProfile } from "@/hooks/use-get-user-profile";
import { Camera, Check } from "lucide-react";
import { ChangeEvent, useMemo, useState } from "react";

export function ProfilePhoto() {
  const { user, isGetUserProfilePending } = useGetUserProfile();
  const [file, setFile] = useState<File | null>(null);

  function handleFileSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return null;
    }

    const file = Array.from(event.target.files)[0];

    setFile(file);
  }

  const previewURL = useMemo(() => {
    if (!file) {
      return null;
    }

    return URL.createObjectURL(file);
  }, [file]);

  return (
    <>
      {isGetUserProfilePending ? (
        <Skeleton className="w-full h-32" />
      ) : (
        <div className="w-full flex items-center gap-4 border rounded-md p-4">
          {previewURL ? (
            <Avatar className="size-24 border-2">
              <AvatarImage src={previewURL} />
              <AvatarFallback></AvatarFallback>
            </Avatar>
          ) : (
            <Label className="flex items-center justify-center size-24 bg-zinc-100 hover:bg-white transition-colors rounded-full border cursor-pointer">
              <Camera className="size-6" />
              <Input
                type="file"
                accept="image/*"
                onChange={handleFileSelected}
                className="sr-only"
              />
            </Label>
          )}

          <div className="flex flex-col gap-1">
            <strong className="text-lg">
              {previewURL ? (
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-app-green-500" />
                  Foto adicionada com sucesso!
                </span>
              ) : (
                "Adicione uma foto de perfil"
              )}
            </strong>
            <span className="text-sm text-app-gray-500">
              A foto precisa ter no máximo 2 mb.
            </span>
          </div>
        </div>
      )}
    </>
  );
}
