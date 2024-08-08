"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { useGetUserProfile } from "@/hooks/use-get-user-profile";
import { Textarea } from "@/components/ui/textarea";
import { SelectSector } from "./select-sector";
import { SelectOccupation } from "./select-occupation";
import { ProfessionalProfileLoading } from "@/components/loaders/professional-profile-loading";

const myProfessionalAccountFormSchema = z.object({
  zipCode: z.string().min(8, { message: "Digite um CEP válido" }),
  about: z
    .string()
    .min(2, { message: "Este campo é obrigatório" })
    .max(300, { message: "Precisa ter no máximo até 300 caracteres" }),
  sector: z.string().min(2, { message: "Selecione seu setor de atuação" }),
  occupation: z.string().min(2, { message: "Selecione sua profissão" }),
});

type MyProfessionalAccountFormSchema = z.infer<
  typeof myProfessionalAccountFormSchema
>;

export function MyProfessionalAccountForm() {
  const { user, isGetUserProfilePending } = useGetUserProfile();
  const form = useForm<MyProfessionalAccountFormSchema>({
    resolver: zodResolver(myProfessionalAccountFormSchema),
    defaultValues: {
      zipCode: "",
      about: "",
      sector: "",
      occupation: "",
    },
  });

  async function onSubmit({ zipCode, about }: MyProfessionalAccountFormSchema) {
    try {
      // await updateUserInformation({ name, email, phone });
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
    <Form {...form}>
      {isGetUserProfilePending ? (
        <ProfessionalProfileLoading />
      ) : (
        <form
          className="w-full flex flex-col gap-4 mt-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            name="zipCode"
            control={form.control}
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormLabel>CEP da sua cidade</FormLabel>
                <FormControl>
                  <Input placeholder="00000-000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="about"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fale um pouco sobre você</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    placeholder="Suas experiências, tempo de carreira e etc.."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sector"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1 my-2">
                <FormLabel>Setor de atuação</FormLabel>
                <SelectSector field={field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="occupation"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Sua profissão</FormLabel>
                <SelectOccupation field={field} />
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            // disabled={isUpdateUserInformationPending}
            type="submit"
            className="w-full gap-2 mt-5"
          >
            {false ? <Loader2 className="size-4 animate-spin" /> : "Salvar"}
          </Button>
        </form>
      )}
    </Form>
  );
}
