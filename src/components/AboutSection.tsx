import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="px-8 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] mb-6 text-foreground">About</p>
          <h2 className="text-4xl md:text-5xl leading-tight text-foreground">
            Design with <span className="italic text-gradient-gold">purpose</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 font-body leading-relaxed text-foreground"
        >
          <p>
            I'm a multidisciplinary designer working across visual identity, motion graphics, web design, video production and post-production.
          </p>
          <p>
            My background in learning design helps shape how I think about each project, translating complex information into visuals that are accurate, accessible, and engaging.
          </p>
          <p>
            I'm drawn to work that needs to communicate something real whether the output is a brand system, an animated explainer, or a video series.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
