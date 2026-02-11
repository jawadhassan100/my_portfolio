import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Code2, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Education", to: "education" },
  { name: "Resume", to: "resume" },
  { name: "Contact", to: "contact" },
];

interface NavbarProps {
  onThemeToggle?: () => void;
  theme?: 'dark' | 'light';
}

export function Navbar({ onThemeToggle, theme = 'dark' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "dark:bg-background/80 bg-white/80 backdrop-blur-md py-4 shadow-lg dark:shadow-primary/5 shadow-gray-200" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <motion.div 
            className="p-2 rounded-lg bg-gradient-to-br from-primary to-purple-600 text-white"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Code2 size={24} />
          </motion.div>
          <span className="text-xl font-bold font-display tracking-tight group-hover:text-primary transition-colors">
            Jawad<span className="text-primary">.dev</span>
          </span>
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </ScrollLink>
          ))}
          
          {/* Theme Toggle - Desktop */}
          {onThemeToggle && (
            <motion.button
              onClick={onThemeToggle}
              className="relative w-14 h-8 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 p-1 transition-all duration-500"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              <motion.div
                className="w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center"
                animate={{
                  x: theme === 'light' ? 24 : 0
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {theme === 'dark' ? (
                  <Moon className="w-3.5 h-3.5 text-gray-800" />
                ) : (
                  <Sun className="w-3.5 h-3.5 text-yellow-500" />
                )}
              </motion.div>
            </motion.button>
          )}
          
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
          >
            <motion.button 
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 text-white transition-all hover:shadow-lg hover:shadow-primary/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
            </motion.button>
          </ScrollLink>
        </div>

        {/* Mobile Menu Toggle and Theme Button */}
        <div className="flex items-center gap-4 md:hidden">
          {onThemeToggle && (
            <motion.button
              onClick={onThemeToggle}
              className="relative w-14 h-7 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 p-1 transition-all duration-500"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-white shadow-lg flex items-center justify-center"
                animate={{
                  x: theme === 'light' ? 28 : 0
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {theme === 'dark' ? (
                  <Moon className="w-3 h-3 text-gray-800" />
                ) : (
                  <Sun className="w-3 h-3 text-yellow-500" />
                )}
              </motion.div>
            </motion.button>
          )}
          
          <button
            className="p-2 text-foreground hover:bg-accent rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-foreground/80 hover:text-primary py-2 block transition-colors"
                >
                  {link.name}
                </ScrollLink>
              ))}
              <div className="pt-4 border-t border-border">
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-4 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg hover:shadow-primary/25 transition-all"
                >
                  View Work
                </ScrollLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}