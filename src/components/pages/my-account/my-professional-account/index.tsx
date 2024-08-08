import { MyProfessionalAccountForm } from "./my-professional-account-form";
import { ProfilePhoto } from "./profile-photo";

export function MyProfessionalAccount() {
  return (
    <section className="w-full max-w-screen-sm mx-auto px-4 mt-8">
      <h1 className="font-semibold text-2xl md:text-3xl">
        Informações profissionais
      </h1>
      <div className="mt-12">
        <ProfilePhoto />
        <MyProfessionalAccountForm />
      </div>
    </section>
  );
}
