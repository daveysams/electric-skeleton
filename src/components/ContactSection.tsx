import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="px-8 md:px-12 py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-foreground">Contact</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-foreground">
            Get in <span className="italic text-gradient-gold">touch</span>
          </h2>
          <p className="max-w-md mx-auto text-foreground">
            If you're looking for someone to join your team, I'd love to have a conversation.
          </p>

          <motion.a
            href="mailto:daveysams@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-body text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors duration-300 rounded-sm"
          >
            get in touch
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>

          <div className="flex justify-center gap-8 pt-8">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/davey-sams-designer/" },
              { label: "Behance", href: "https://www.behance.net/daveysams#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors font-semibold"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
