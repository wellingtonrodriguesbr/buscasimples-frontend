"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyPixCodeButton() {
  const [copiedCode, setCopiedCode] = useState(false);

  async function handleCopyCode() {
    await navigator.clipboard.writeText("codigo-pix");
    setCopiedCode(true);
    setTimeout(() => {
      setCopiedCode(false);
    }, 1500);
  }

  return (
    <Button onClick={handleCopyCode} className="w-full flex md:hidden">
      {copiedCode ? <Check className="size-4" /> : <Copy className="size-4" />}
      {copiedCode ? "Código copiado" : "Copiar código pix"}
    </Button>
  );
}
