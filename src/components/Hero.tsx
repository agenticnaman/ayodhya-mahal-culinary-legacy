import { ArrowDown, Star, Utensils, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"
        style={{
          background: "var(--gradient-subtle)",
        }}
      />

      {/* Decorative Glow Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-secondary/5 blur-3xl"
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-primary/3 blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="hero-text">The Ayodhya Mahal</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl lg:text-2xl text-muted-foreground mb-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A Royal Pure Vegetarian Dining Experience
          </motion.p>

          {/* Features */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12 text-sm lg:text-base"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {[
              { icon: <Utensils className="h-5 w-5" />, text: "Pure Vegetarian Thali" },
              { icon: <Star className="h-5 w-5" />, text: "Jain Options Available" },
              { icon: <Home className="h-5 w-5" />, text: "Home Delivery" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center space-x-2 text-primary"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Experience the royal flavors of Ayodhya in our elegantly designed restaurant. 
            Savor authentic vegetarian cuisine in a warm, refined ambiance that makes every meal memorable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button
              variant="royal"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              onClick={() =>
                document.getElementById("location")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Visit Our Restaurant
            </Button>
            <Button
              variant="gold"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Order Home Delivery
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToAbout}
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group"
            aria-label="Scroll to about section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="text-sm">Discover Our Story</span>
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
