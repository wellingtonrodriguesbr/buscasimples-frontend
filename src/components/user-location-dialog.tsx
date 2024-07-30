"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { ChevronDown, Loader2, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useGetUserLocation } from "@/hooks/use-get-user-location";
import { Input } from "./ui/input";
import { formatCEP } from "@/utils/format-cep";
import { useState } from "react";

const formSchema = z.object({
  zipCode: z.coerce
    .string()
    .min(5, { message: "Digite um CEP válido" })
    .max(9, { message: "CEP tem apenas 8 dígitos" }),
});

type FormSchemaData = z.infer<typeof formSchema>;

export default function UserLocationDialog() {
  const [openDialog, setOpenDialog] = useState(false);

  const form = useForm<FormSchemaData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      zipCode: "",
    },
  });
  const zipCode = form.watch("zipCode");

  const { fetchUserLocation, userLocation, isFetching } = useGetUserLocation({
    zipCode,
  });

  async function onSubmit() {
    await fetchUserLocation();
    form.reset();
    setOpenDialog(false);
  }

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button type="button" className="gap-2" size="sm" variant="ghost">
          <MapPin className="size-4" />
          {userLocation
            ? `${userLocation?.city}-${userLocation?.state}`
            : "Adicionar localização"}
          <ChevronDown className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[350px] md:max-w-[500px] rounded-md">
        <DialogHeader>
          <DialogTitle className="text-left text-2xl">
            Adicionar sua localização
          </DialogTitle>
          <DialogDescription className="text-left">
            Digite seu CEP, apenas os números, sem pontos ou traços
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="sr-only">CEP</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="CEP"
                        {...field}
                        value={formatCEP(field.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <Button type="submit" className="w-full">
              {isFetching ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                "Buscar endereço"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
