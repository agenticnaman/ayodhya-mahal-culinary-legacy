import { ArrowDown, Star, Utensils, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"
        style={{
          background: "var(--gradient-subtle)"
        }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            <span className="hero-text">The Ayodhya Mahal</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-4 font-light">
            A Royal Pure Vegetarian Dining Experience
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm lg:text-base">
            <div className="flex items-center space-x-2 text-primary">
              <Utensils className="h-5 w-5" />
              <span>Pure Vegetarian Thali</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <Star className="h-5 w-5" />
              <span>Jain Options Available</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <Home className="h-5 w-5" />
              <span>Home Delivery</span>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the royal flavors of Ayodhya in our elegantly designed restaurant. 
            Savor authentic vegetarian cuisine in a warm, refined ambiance that makes every meal memorable.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="royal" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => document.getElementById("location")?.scrollIntoView({ behavior: "smooth" })}
            >
              Visit Our Restaurant
            </Button>
            <Button 
              variant="gold" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Order Home Delivery
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors group"
            aria-label="Scroll to about section"
          >
            <span className="text-sm">Discover Our Story</span>
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}