"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import { useRegisterUser } from "@/hooks/use-register-user";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { formatPhoneNumber } from "@/utils/format-phone-number";

interface RegisterFormProps {
  redirectLink?: string;
  submitButtonText?: string;
}

const registerFormSchema = z.object({
  name: z.string().min(2, { message: "Digite seu nome completo" }),
  email: z.string().email({ message: "Digite um e-mail válido" }),
  phone: z.string().min(11, { message: "Digite um número de celular válido" }),
});

type RegisterFormSchema = z.infer<typeof registerFormSchema>;

export function RegisterForm({
  redirectLink = `${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN_URL}/cadastro/sucesso`,
  submitButtonText = "Finalizar cadastro",
}: RegisterFormProps) {
  const router = useRouter();

  const { registerUser, isRegisterUserPending } = useRegisterUser();
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit({ name, email, phone }: RegisterFormSchema) {
    try {
      await registerUser({ name, email, phone });

      form.reset();
      router.push(redirectLink);
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
      <form
        className="w-full flex flex-col gap-3"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome completo</FormLabel>
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
                <Input type="email" placeholder="Seu e-mail" {...field} />
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
              <FormDescription>Digite apenas os números</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isRegisterUserPending}
          type="submit"
          className="w-full mt-5 gap-2"
        >
          {isRegisterUserPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <>
              {submitButtonText}
              <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
