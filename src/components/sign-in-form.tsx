"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSignInFromMagicLinkOut } from "@/hooks/use-sign-in-from-magic-link";

const signinFormSchema = z.object({
  email: z.string().email({ message: "Digite um e-mail válido" }),
});

type SignInFormSchema = z.infer<typeof signinFormSchema>;

export function SignInForm() {
  const router = useRouter();
  const { signInFromMagicLink, isSignInFromMagicLinkPending } =
    useSignInFromMagicLinkOut();

  const form = useForm<SignInFormSchema>({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit({ email }: SignInFormSchema) {
    try {
      await signInFromMagicLink({ email });

      form.reset();
      router.push("/entrar/sucesso");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404) {
          toast.error("Credencias inválidas");
        } else if (error.response?.status === 403) {
          toast.error(
            "Sua conta não está ativa, entre em contato com o suporte"
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
        <Button
          disabled={isSignInFromMagicLinkPending}
          type="submit"
          className="w-full mt-2 gap-2"
        >
          {isSignInFromMagicLinkPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            "Entrar"
          )}
        </Button>
      </form>
    </Form>
  );
}
