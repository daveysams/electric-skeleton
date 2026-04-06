import { motion } from "framer-motion";
import icon1 from "@/assets/icon-1.svg";
import handWaving from "@/assets/hand-waving-light.svg";
import { ArrowUpRight } from "lucide-react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-8 md:px-12 bg-inherit"
      style={{ background: "var(--hero-gradient)" }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-foreground">
            Hi, I'm{" "}
            <span className="text-gradient-gold italic text-inherit pr-[6px]">Davey</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-display leading-snug text-foreground">
            Designer, videographer, creative problem solver.
          </p>
          <p className="text-sm tracking-wide text-foreground">
            I build visuals across graphic design, video production, and animation that are accessible, considered, refined.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-body text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors duration-300 rounded-sm mt-2"
          >
            get in touch
            <img src={handWaving} alt="" className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative line + sparkle like An Bui */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="hero-line h-16" />
        <img src={icon1} alt="" className="w-5 h-auto" />
        <ChevronDown
          className="text-primary w-5 h-5 animate-bounce mt-4 cursor-pointer"
          onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
