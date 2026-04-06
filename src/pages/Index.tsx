import PortfolioNav from "@/components/PortfolioNav";
import HeroSection from "@/components/HeroSection";
import ProjectGrid from "@/components/ProjectGrid";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioNav />
      <HeroSection />
      <ProjectGrid />
      <AboutSection />
      <ContactSection />
      <footer className="px-8 py-8 text-center text-xs text-muted-foreground tracking-wider border-t border-border">
        © {new Date().getFullYear()} - Davey Sams • Designer
      </footer>
    </div>
  );
};

export default Index;
