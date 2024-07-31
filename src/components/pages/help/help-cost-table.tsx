import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export function HelpCostTable() {
  const total = DATA.reduce((acc, currentValue) => {
    return (acc += currentValue.amount);
  }, 0);

  return (
    <Table>
      <TableCaption className="text-center max-w-sm mx-auto">
        Clicando em cima do nome da ferramenta, você será redirecionado(a) para
        a página de preços de cada uma.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="min-w-[100px]">Ferramenta</TableHead>
          <TableHead>Definição</TableHead>
          <TableHead>Frequência</TableHead>
          <TableHead className="text-right text-nowrap">
            Valor (em dólares)
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {DATA.map((item) => (
          <TableRow key={item.tool}>
            <TableCell className="font-medium text-nowrap">
              <Link
                href={item.link}
                target="_blank"
                className="hover:underline underline-offset-2"
              >
                {item.tool}
              </Link>
            </TableCell>
            <TableCell className="text-nowrap">{item.definition}</TableCell>
            <TableCell>{FREQUENCY[item.frequency] ?? "-"}</TableCell>
            <TableCell className="text-right">
              {new Intl.NumberFormat("es-US", {
                style: "currency",
                currency: "USD",
              }).format(item.amount)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            {new Intl.NumberFormat("es-US", {
              style: "currency",
              currency: "USD",
            }).format(total)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

const DATA = [
  {
    tool: "Vercel",
    link: "https://vercel.com/pricing",
    definition: "Hospedagem do front-end da plataforma (Parte visual)",
    frequency: "",
    amount: 0,
  },
  {
    tool: "Render",
    link: "https://render.com/pricing",
    definition: "Hospedagem do servidor da plataforma",
    frequency: "MONTH",
    amount: 7,
  },
  {
    tool: "Render",
    link: "https://render.com/pricing",
    definition: "Hospedagem do banco de dados da plataforma",
    frequency: "MONTH",
    amount: 7,
  },
  {
    tool: "Resend",
    link: "https://resend.com/pricing",
    definition: "Serviço utilizado para envio de e-mails",
    frequency: "",
    amount: 0,
  },
  {
    tool: "CloudFlare",
    link: "https://www.cloudflare.com/pt-br/developer-platform/r2/",
    definition:
      "Serviço para armazenamento das imagens dos profissionais da plataforma",
    frequency: "",
    amount: 0,
  },
];

const FREQUENCY: Record<string, string> = {
  MONTH: "Mensal",
  YEAR: "Anual",
  SINGLE: "Pagamento único",
};
