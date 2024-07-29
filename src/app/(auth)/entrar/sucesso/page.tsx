import { AuthSuccess } from "@/components/auth-success";

export default function SignInSuccessPage() {
  return (
    <main>
      <AuthSuccess
        title="E-mail enviado com sucesso!"
        description="Enviamos um e-mail para você com o link de acesso a plataforma."
      />
    </main>
  );
}
