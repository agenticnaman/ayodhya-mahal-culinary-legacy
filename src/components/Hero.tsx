<section
  id="home"
  className="relative min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-32 overflow-visible"
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

  <div className="container mx-auto container-padding relative z-10 text-center max-w-4xl">
    <motion.h1
      className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <span className="hero-text">The Ayodhya Mahal</span>
    </motion.h1>

    {/* rest of content unchanged */}
  </div>
</section>
