import {
  CTASection,
  FAQSection,
  FeaturesSection,
  Footer,
  Header,
  HeroSection,
  HowItWorksSection,
  SecuritySection,
} from '@/components';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <SecuritySection />
      <FeaturesSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
