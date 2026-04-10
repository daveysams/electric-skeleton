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
          <Link to="/#work" className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors">
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
          <p className="text-xs uppercase tracking-widest text-foreground mb-3">{study.category}</p>
          <h1 className="font-display text-4xl md:text-5xl text-foreground">{study.title}</h1>
        </FadeIn>
      </section>

      {/* Two-column section */}
      {/* Two-column: narrative left, project overview right */}
      <div className="px-6 md:px-12 max-w-6xl mx-auto mb-24">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left column — narrative */}
          <div className="lg:col-span-7 space-y-12">
            <FadeIn delay={0.3}>
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-5">
                  The Challenge
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  {study.challenge.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </FadeIn>

            <div className="w-16 border-t border-primary" />

            <FadeIn delay={0.4}>
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-5">
                  Approach &amp; Design
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  {study.approach.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right column — project overview */}
          <aside className="lg:col-span-5">
            <FadeIn delay={0.3}>
              <div className="bg-card rounded-xl p-8 md:p-10 sticky top-24  border-r-4 border-primary">
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
                  Project Overview
                </h2>

                <dl className="space-y-6">
                  <div>
                    <dt className="text-sm uppercase tracking-wider text-foreground font-display font-semibold italic mb-1">
                      Client
                    </dt>
                    <dd className="text-foreground text-lg">{study.client}</dd>
                  </div>

                  <div className="border-t border-primary pt-6">
                    <dt className="text-sm uppercase tracking-wider text-foreground font-display font-semibold italic mb-1">
                      Brief
                    </dt>
                    <dd className="text-foreground/80 leading-relaxed">
                      {study.persona}
                    </dd>
                  </div>

                  <div className="border-t border-primary pt-6">
                    <dt className="text-sm uppercase tracking-wider text-foreground font-display font-semibold italic mb-1">
                      Tools
                    </dt>
                    <dd className="flex flex-wrap gap-2 mt-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-sm bg-secondary text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>

                  <div className="border-t border-primary pt-6">
                    <dt className="text-sm uppercase tracking-wider text-foreground font-display font-semibold italic mb-1">
                      Outcome
                    </dt>
                    <dd className="text-foreground/80 leading-relaxed space-y-3">
                      {study.outcome.split("\n\n").map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </FadeIn>
          </aside>
        </div>
      </div>

      {/* Key Takeaway */}
      <div className="px-6 md:px-12 max-w-6xl mx-auto mb-24">
        <FadeIn delay={0.5}>
          <div className="bg-card rounded-xl p-8 md:p-12 border-l-4 border-primary">
            <p className="text-primary font-medium mb-3">Key Takeaway</p>
            <p className="font-display text-xl md:text-2xl text-foreground leading-relaxed">
              {study.keyTakeaway}
            </p>
          </div>
        </FadeIn>
      </div>

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
                    <p className="text-sm text-foreground">Project image {i + 1}</p>
                  )}
                </div>
              );
            })}
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="px-8 py-8 text-center text-xs text-foreground tracking-wider border-t border-border">
        © {new Date().getFullYear()} - Davey Sams • Designer
      </footer>
    </div>
  );
};

export default CaseStudy;
