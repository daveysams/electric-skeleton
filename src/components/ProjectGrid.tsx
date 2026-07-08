import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";

const ProjectGrid = () => {
  return (
    <section id="work" className="px-8 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        // className="mb-16"
        className="space-y-6"
      >
        <h2 className="text-4xl md:text-5xl leading-tight text-foreground">
          Selected <span className="italic text-gradient-gold">Work</span>
        </h2>
        <p className="mb-16 font-body leading-relaxed text-foreground">
          Design, motion, and the spaces where they overlap.
        </p>
        <p></p>
        </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="rounded-lg overflow-hidden bg-card" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/1208044877?badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              title="Showreel 2026"
            />
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-foreground mt-6 text-center">
            Showreel
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {caseStudies.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={`/work/${project.slug}`} className="group cursor-pointer block">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
                </div>
                <div className="mt-5 flex items-start justify-between">
                  <h3 className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1.5 shrink-0 ml-4">
                    {project.category}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
