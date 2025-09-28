import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/30 shadow-elegant">
      <div className="content-width container-padding">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-4 cursor-pointer hover-lift"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative">
              <img
                src={logo}
                alt="The Ayodhya Mahal Logo"
                className="h-12 w-12 rounded-full object-cover shadow-gold"
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-secondary/20"></div>
            </div>
            <div className="text-2xl lg:text-3xl font-serif font-bold tracking-wide text-primary">
              The Ayodhya Mahal
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {["home", "about", "gallery", "services", "location"].map((item, i) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-foreground hover:text-primary font-medium text-lg relative group transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <motion.div
            className="hidden lg:flex items-center space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2 text-sm text-foreground/80 hover:text-primary transition-colors">
              <Phone className="h-4 w-4 text-secondary" />
              <span className="font-medium">+91 92145 05594</span>
            </div>
            <Button 
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold px-6 py-2 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => scrollToSection("location")}
            >
              Visit Us
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden py-4 border-t border-border mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <nav className="flex flex-col space-y-4">
                {["home", "about", "gallery", "services", "location"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
                <div className="pt-4 space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-foreground/80">
                    <Phone className="h-4 w-4 text-secondary" />
                    <span className="font-medium">+91 92145 05594</span>
                  </div>
                  <Button
                    className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold w-full py-3 rounded-lg shadow-lg transition-all duration-300"
                    onClick={() => scrollToSection("location")}
                  >
                    Visit Us
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
