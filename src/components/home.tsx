import { BannerCarousel } from "@/components/banner-carousel";
import { Categories } from "@/components/categories";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ProfessionalBenefits } from "@/components/professional-benefits";

export function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BannerCarousel />
      <Categories />
      <ProfessionalBenefits />
      <Faq />
      <Footer />
    </main>
  );
}
