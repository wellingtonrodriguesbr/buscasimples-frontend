import { BannerCarousel } from "@/components/pages/home/banner-carousel";
import { Categories } from "@/components/pages/home/categories";
import { Faq } from "@/components/pages/home/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/pages/home/hero";
import { ProfessionalBenefits } from "@/components/pages/home/professional-benefits";

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
