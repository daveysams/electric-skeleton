import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import PortfolioNav from "@/components/PortfolioNav";
import { caseStudies } from "@/data/caseStudies";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const study = caseStudies.find((cs) => cs.slug === slug);

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <PortfolioNav />
        <div className="pt-32 text-center px-8">
          <h1 className="font-display text-3xl text-foreground">Case study not found</h1>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">← Back to work</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PortfolioNav />

      <div className="max-w-6xl mx-auto px-8 md:px-12 pt-28 pb-6">
        <FadeIn>
          <Link to="/#work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Selected Work
          </Link>
        </FadeIn>
      </div>

      {/* Hero image */}
      <section className="max-w-6xl mx-auto px-8 md:px-12 pb-8">
        <FadeIn delay={0.1}>
          <div className="aspect-[16/9] rounded-lg overflow-hidden bg-secondary">
            <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
          </div>
        </FadeIn>
      </section>

      {/* Title */}
      <section className="max-w-6xl mx-auto px-8 md:px-12 pb-6">
        <FadeIn delay={0.15}>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">{study.category}</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground">{study.title}</h1>
        </FadeIn>
      </section>

      {/* Two-column section */}
      <section className="max-w-6xl mx-auto px-8 md:px-12 pb-16">
        <div className="grid gap-12 md:grid-cols-2">
          <FadeIn delay={0.2}>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-4">The Challenge</h2>
              <p className="font-claude-response-body break-words whitespace-pre-line leading-[1.7] py-0">{study.challenge}</p>

              <h2 className="font-display text-xl font-bold text-foreground mt-8 mb-4">Approach & Design</h2>
              <p className="text-foreground whitespace-pre-line">{study.approach}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-6 md:text-center">
                Project Overview
              </h2>
              <div className="space-y-4 md:text-center">
                <div>
                  <p className="text-sm font-semibold text-foreground"><span className="italic text-left">Client</span></p>
                  <p className="text-foreground text-center">{study.client}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground"><span className="italic">Brief:</span></p>
                  <p className="font-body text-foreground text-left">{study.persona}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground"><span className="italic">Tools:</span></p>
                  <div className="mt-1 flex flex-wrap gap-2 md:justify-center">
                    {study.tags.map((tag, index) => (
                      <span key={`${tag}-${index}`} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground"><span className="italic">Outcome:</span></p>
                  <p className="text-foreground text-left whitespace-pre-line">{study.outcome}</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="max-w-6xl mx-auto px-8 md:px-12 pb-12">
        <FadeIn delay={0.35}>
          <div className="rounded-lg border-l-4 border-primary bg-primary/10 p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Key Takeaway</p>
            <p className="mt-2 font-display text-lg font-bold text-foreground">{study.keyTakeaway}</p>
          </div>
        </FadeIn>
      </section>

      {/* Image gallery placeholders */}
      <section className="max-w-6xl mx-auto px-8 md:px-12 pb-20">
        <FadeIn delay={0.4}>
          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: study.imageCount ?? 3 }, (_, i) => {
              const galleryImg = study.galleryImages?.[i];
              return (
                <div
                  key={i}
                  className={`aspect-[4/3] rounded-lg bg-secondary flex items-center justify-center overflow-hidden ${
                    (study.imageCount ?? 3) % 2 !== 0 && i === (study.imageCount ?? 3) - 1 ? "md:col-span-2" : ""
                  }`}
                >
                  {galleryImg ? (
                    <img src={galleryImg} alt={`${study.title} – image ${i + 1}`} className="w-full h-full object-cover" />
                  ) : (
                    <p className="text-sm text-muted-foreground">Project image {i + 1}</p>
                  )}
                </div>
              );
            })}
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 text-center text-xs text-muted-foreground tracking-wider border-t border-border">
        © {new Date().getFullYear()} - Davey Sams • Designer
      </footer>
    </div>
  );
};

export default CaseStudy;
