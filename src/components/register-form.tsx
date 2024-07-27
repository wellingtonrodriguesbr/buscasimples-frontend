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
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

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
  redirectLink = "",
  submitButtonText = "Finalizar cadastro",
}: RegisterFormProps) {
  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: RegisterFormSchema) {
    console.log(values);
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
                <Input
                  type="email"
                  placeholder="seumelhor@email.com"
                  {...field}
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
                <Input placeholder="(00) 00000-0000" {...field} />
              </FormControl>
              <FormDescription>Digite apenas os números</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-5 gap-2">
          {submitButtonText}
          <ArrowRight className="size-4" />
        </Button>
      </form>
    </Form>
  );
}
