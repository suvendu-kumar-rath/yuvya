import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WhoWeServeSection } from "@/components/WhoWeServeSection";
import { ProofSection } from "@/components/ProofSection";
import { ProductTeaserSection } from "@/components/ProductTeaserSection";
import { TeamSection } from "@/components/TeamSection";
import { GlobalVisionSection } from "@/components/GlobalVisionSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhoWeServeSection />
        <ProofSection />
        <ProductTeaserSection />
        <TeamSection />
        <GlobalVisionSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
