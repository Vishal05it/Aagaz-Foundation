import { HeroSlider } from "../components/sections/HeroSlider";
import { ServicesGrid } from "../components/sections/ServicesGrid";
import { AboutSection } from "../components/sections/AboutSection";
import { GallerySection } from "../components/sections/GallerySection";
import { BlogSection } from "../components/sections/BlogSection";
import { FAQSection } from "../components/sections/FAQSection";
import { ContactSection } from "../components/sections/ContactSection";
import { LeftFixedEnquiryPanel } from "../components/common/LeftFixedEnquiryPanel";
import { IntroSection } from "../components/sections/IntroSection";
import { PortfolioSection } from "../components/sections/PortfolioSection";
import { ShortsVideoSection } from "../components/sections/ShortsVideoSection";
import { WhyChooseSection } from "../components/sections/WhyChooseSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ClientsStrip } from "../components/sections/ClientsStrip";
import { FeaturedInStrip } from "../components/sections/FeaturedInStrip";
import { StatsSection } from "../components/sections/StatsSection";
import { InstagramFeed } from "../components/sections/InstagramFeed";
import { ActionBlocksSection } from "../components/sections/ActionBlocksSection";

import { SEO } from "../components/common/SEO";

export const HomePage = () => {
  return (
    <>
      <SEO
        title="Empowerment Through Education — Donate, Volunteer, Apply"
        description="Aaghaz Foundation has been empowering meritorious students across India since 2004 through scholarships, student aid, the Rahmani 30 coaching tie-up and the LCGC learning centre in Lucknow. Donate, volunteer or apply for student aid."
      />
      <LeftFixedEnquiryPanel />
      <HeroSlider />

      <StatsSection />
      <ActionBlocksSection />

      <IntroSection />
      <FeaturedInStrip />

      <PortfolioSection />
      <ShortsVideoSection />

      <ServicesGrid />
      <WhyChooseSection />
      <TestimonialsSection />

      <AboutSection />
      <GallerySection />

      <BlogSection />
      <InstagramFeed />
      <ClientsStrip />
      <FAQSection />
      <ContactSection />
    </>
  );
};
