import Hero from '@/components/home/Hero';
import Introduction from '@/components/home/Introduction';
import MovementStatement from '@/components/home/MovementStatement';
import SolutionsShowcase from '@/components/home/SolutionsShowcase';
import Process from '@/components/home/Process';
import WhyAzureOcean from '@/components/home/WhyAzureOcean';
import GlobalConnectivity from '@/components/home/GlobalConnectivity';
import IndustriesPreview from '@/components/home/IndustriesPreview';
import VisualBreak from '@/components/home/VisualBreak';
import QuoteCTA from '@/components/home/QuoteCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <MovementStatement />
      <SolutionsShowcase />
      <Process />
      <WhyAzureOcean />
      <GlobalConnectivity />
      <IndustriesPreview />
      <VisualBreak />
      <QuoteCTA />
    </>
  );
}
