"use client";

import Link from "next/link";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { formatPhoneNumber } from "@/utils/format-phone-number";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useGetUserProfile } from "@/hooks/use-get-user-profile";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Skeleton } from "@/components/ui/skeleton";
import { useUpdateUserInformation } from "@/hooks/use-update-user-information";

const registerInformationSchema = z.object({
  name: z.string().min(2, { message: "Digite seu nome completo" }),
  email: z.string().email({ message: "Digite um e-mail válido" }),
  phone: z.string().min(11, { message: "Digite um número de celular válido" }),
});

type RegisterInformationSchema = z.infer<typeof registerInformationSchema>;

export function RegisterInformation() {
  const { user, isGetUserProfilePending } = useGetUserProfile();
  const { updateUserInformation, isUpdateUserInformationPending } =
    useUpdateUserInformation();

  const form = useForm<RegisterInformationSchema>({
    resolver: zodResolver(registerInformationSchema),
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      phone: user?.phone ?? "",
    },
  });

  async function onSubmit({ name, email, phone }: RegisterInformationSchema) {
    try {
      await updateUserInformation({ name, email, phone });
      toast.success("Informações atualizadas com sucesso");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (
          error.response?.status === 409 &&
          error.response.data.message ===
            "User already exists with the same email"
        ) {
          toast.error("Já existe um usuário cadastrado com este e-mail");
        } else if (
          error.response?.status === 409 &&
          error.response.data.message ===
            "User already exists with the same phone"
        ) {
          toast.error(
            "Já existe um usuário cadastrado com este número de celular"
          );
        }
      }
    }
  }

  return (
    <section className="w-full max-w-lg mx-auto px-4 mt-8">
      <h1 className="font-semibold text-2xl md:text-3xl">
        Informações de cadastro
      </h1>
      <Form {...form}>
        {isGetUserProfilePending ? (
          <fieldset className="flex flex-col gap-6 mt-6">
            <div className="flex flex-col gap-3">
              <Skeleton className="w-24 h-5" />
              <Skeleton className="w-full h-9" />
            </div>
            <div className="flex flex-col gap-3">
              <Skeleton className="w-24 h-5" />
              <Skeleton className="w-full h-9" />
            </div>
            <div className="flex flex-col gap-3">
              <Skeleton className="w-24 h-5" />
              <Skeleton className="w-full h-9" />
            </div>
            <div className="flex gap-2 mt-2">
              <Skeleton className="w-28 h-9" />
              <Skeleton className="w-full h-9" />
            </div>
          </fieldset>
        ) : (
          <form
            className="w-full flex flex-col gap-3 mt-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu nome</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Seu e-mail"
                      {...field}
                      defaultValue={field.value}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Celular</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(00) 00000-0000"
                      {...field}
                      value={formatPhoneNumber(field.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <fieldset className="flex gap-2 mt-5">
              <Button
                type="button"
                variant="outline"
                className="w-fit gap-2"
                asChild
              >
                <Link href="/minha-conta">
                  <ArrowLeft className="size-4" />
                  Voltar
                </Link>
              </Button>
              <Button
                disabled={isUpdateUserInformationPending}
                type="submit"
                className="w-full gap-2"
              >
                {isUpdateUserInformationPending ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  "Salvar"
                )}
              </Button>
            </fieldset>
          </form>
        )}
      </Form>
    </section>
  );
}
