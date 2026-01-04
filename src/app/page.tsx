import {
  CreatorSection,
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
      <CreatorSection />
      <CTASection />
      <Footer />
    </main>
  );
}
