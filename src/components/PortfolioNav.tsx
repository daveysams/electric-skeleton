import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const PortfolioNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (id: string) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  const handleHome = () => {
    if (location.pathname === "/") {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-12 backdrop-blur-md bg-[#0f1524]">
      
      <button
        onClick={handleHome}
        className="font-display text-xl tracking-wide text-foreground hover:text-primary transition-colors">
        ElctrcSkltn
      </button>
      <div className="flex gap-8 font-body text-sm tracking-widest uppercase">
        {["Work", "About", "Contact"].map((item) =>
          <button
            key={item}
            onClick={() => handleNav(item.toLowerCase())}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            {item}
          </button>
        )}
      </div>
    </motion.nav>
  );
};

export default PortfolioNav;
