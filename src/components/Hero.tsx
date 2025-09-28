import { motion } from "framer-motion";

// A smaller, reusable component for the animated background glows.
// This keeps the main component's JSX cleaner.
const DecorativeGlow = ({ className, animation, transition }) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={animation}
      transition={transition}
    />
  );
};

// The main Hero Section component.
const HeroSection = () => {
  // Animation settings for the glows
  const glowTransitions = {
    duration1: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    duration2: { duration: 10, repeat: Infinity, ease: "easeInOut" },
    duration3: { duration: 12, repeat: Infinity, ease: "easeInOut" },
  };

  // Animation settings for the main title
  const titleAnimation = {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };
  
  return (
    <section
      id="home"
      // FIX: Increased top-padding (pt) to prevent the title from being hidden under the navbar.
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 sm:pt-40 overflow-visible"
    >
      {/* Background Gradient Layer */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"
        style={{ background: "var(--gradient-subtle)" }}
      />
      
      {/* Decorative Glows Layer */}
      <div className="absolute inset-0 overflow-hidden">
        <DecorativeGlow 
          className="top-20 left-10 w-32 h-32 bg-primary/5"
          animation={{ y: [0, 20, 0] }}
          transition={glowTransitions.duration1}
        />
        <DecorativeGlow 
          className="bottom-20 right-10 w-40 h-40 bg-secondary/5"
          animation={{ x: [0, -20, 0] }}
          transition={glowTransitions.duration2}
        />
        <DecorativeGlow 
          className="top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-primary/3"
          animation={{ scale: [1, 1.1, 1] }}
          transition={glowTransitions.duration3}
        />
      </div>

      {/* Main Content Layer */}
      <div className="container mx-auto container-padding relative z-10 text-center max-w-4xl">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
          initial={titleAnimation.initial}
          animate={titleAnimation.animate}
          transition={titleAnimation.transition}
        >
          <span className="hero-text">The Ayodhya Mahal</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          A Royal Pure Vegetarian Dining Experience
        </motion.p>
        
        {/* Placeholder for other content like descriptions, buttons, etc. */}
        {/* For example:
        <div className="flex justify-center gap-4">
            <button>Visit Our Restaurant</button>
            <button>Order Home Delivery</button>
        </div> 
        */}
      </div>
    </section>
  );
};

export default HeroSection;
