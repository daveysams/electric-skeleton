import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";

const ProjectGrid = () => {
  return (
    <section id="work" className="px-8 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] mb-6 text-foreground"
        >
          Selected Work
        </motion.p>
        <p className="text-foreground font-body mb-16 font-normal">Design, motion, and the spaces where they overlap.</p>

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
