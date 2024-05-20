"use client";

import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RequestServiceDialogProps {
  workerName?: string;
}

const formSchema = z.object({
  typeOfRequest: z.string().min(5, {
    message: "Este campo é obrigatório",
  }),
  term: z.string().min(5, {
    message: "Este campo é obrigatório",
  }),
  description: z.string().min(10, {
    message: "Este campo é obrigatório",
  }),
});

type FormSchemaData = z.infer<typeof formSchema>;

export function RequestServiceForm({ workerName }: RequestServiceDialogProps) {
  const form = useForm<FormSchemaData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      typeOfRequest: "",
      term: "",
      description: "",
    },
  });

  const { data, isFetching } = useQuery({
    queryKey: ["new-request-service"],
    queryFn: async () => {},
  });

  function onSubmit(values: FormSchemaData) {
    console.log(values);
  }

  const {
    formState: { errors },
  } = form;
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2 space-y-4">
        <FormField
          control={form.control}
          name="typeOfRequest"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs md:text-sm font-normal leading-normal text-app-gray-600">
                Tipo de solicitação
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="O que você está buscando?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Apenas pesquisando">
                    Apenas pesquisando
                  </SelectItem>
                  <SelectItem value="Orçamento">Orçamento</SelectItem>
                  <SelectItem value="Contratar">Contratar</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="term"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs md:text-sm font-normal leading-normal text-app-gray-600">
                Prazo
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Qual sua urgência?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1 à 3 dias">1 à 3 dias</SelectItem>
                  <SelectItem value="1 semana">1 semana</SelectItem>
                  <SelectItem value="15 dias à 1 mês">
                    15 dias à 1 mês
                  </SelectItem>
                  <SelectItem value="Não tenho pressa">
                    Não tenho pressa
                  </SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">
                Nova solicitação de serviço
              </FormLabel>
              <FormControl>
                <Textarea
                  data-error={!!errors.description}
                  rows={8}
                  placeholder="Descreva o que você buscando / precisando..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {isFetching ? <Loader2 className="w-4 h-4 animate-spin" /> : "Enviar"}
        </Button>
      </form>
    </Form>
  );
}
