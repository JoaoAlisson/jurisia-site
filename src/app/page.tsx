import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import DashboardShowcase from "@/components/DashboardShowcase";
import FeaturesGrid from "@/components/FeaturesGrid";
import Testimonials from "@/components/Testimonials";
import PricingCards from "@/components/PricingCards";
import ComparisonTable from "@/components/ComparisonTable";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <DashboardShowcase />
        <FeaturesGrid />
        <Testimonials />
        <PricingCards />
        <ComparisonTable />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
