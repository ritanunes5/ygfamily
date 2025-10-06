import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  nome: z.string().trim().min(1, { message: "Nome completo é obrigatório" }).max(100),
  email: z.string().trim().email({ message: "Email inválido" }).max(255),
  servico: z.string().min(1, { message: "Selecione um serviço" }),
  mensagem: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const servicoOptions = [
  "Chamar para evento",
  "Tour pelo estabelecimento",
  "Criação de Conteúdos",
  "Consultoria Técnica",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      servico: "",
      mensagem: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    const webhookUrl = "YOUR_WEBHOOK_URL_HERE"; // Substituir pelo URL do Make ou Lindy

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: data.nome,
          email: data.email,
          servico: data.servico,
          mensagem: data.mensagem || "",
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      toast({
        title: "Obrigado!",
        description: "A sua proposta será enviada por email em breve.",
      });

      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erro",
        description: "Não foi possível enviar o pedido. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Peça já a sua proposta personalizada!
          </h2>
          <p className="text-muted-foreground text-lg">
            Preencha o formulário e receba uma proposta adaptada às suas necessidades
          </p>
        </div>

        <div className="card-glass rounded-xl p-8 border border-border/50">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Nome Completo *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite o seu nome completo"
                        {...field}
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Email *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        {...field}
                        className="bg-background/50 border-border/50 focus:border-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="servico"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Serviço Pretendido *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background/50 border-border/50 focus:border-primary">
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-card border-border">
                        {servicoOptions.map((servico) => (
                          <SelectItem key={servico} value={servico}>
                            {servico}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mensagem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">
                      Descrição / Mensagem Adicional
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Descreva os detalhes do seu pedido (opcional)"
                        className="min-h-[120px] bg-background/50 border-border/50 focus:border-primary resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 text-base"
              >
                {isSubmitting ? "Enviando..." : "Enviar Pedido"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
