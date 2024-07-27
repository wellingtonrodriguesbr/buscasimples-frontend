"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const signinFormSchema = z.object({
  email: z.string().email({ message: "Digite um e-mail válido" }),
});

type SignInFormSchema = z.infer<typeof signinFormSchema>;

export function SignInForm() {
  const form = useForm<SignInFormSchema>({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: SignInFormSchema) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        className="w-full flex flex-col gap-3"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="seuemaildeacesso@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full mt-2 gap-2">
          Entrar
        </Button>
      </form>
    </Form>
  );
}
