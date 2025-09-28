import { Utensils, Home, Clock, Star, Leaf, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      icon: Utensils,
      title: "Pure Vegetarian Thali",
      description: "Authentic vegetarian thali prepared with the finest ingredients and traditional recipes",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Star,
      title: "Jain Options Available",
      description: "Special Jain-friendly menu options prepared according to Jain dietary requirements",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Home,
      title: "Home Delivery",
      description: "Enjoy our delicious food in the comfort of your home with our reliable delivery service",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Clock,
      title: "Dinner Service",
      description: "Open for dinner service from 11:00 AM to 11:00 PM, seven days a week",
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    },
    {
      icon: Leaf,
      title: "No Alcohol Policy",
      description: "We maintain a family-friendly environment with no alcohol served on premises",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Every dish is prepared with quality ingredients and exceptional attention to detail",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    }
  ];

  const scrollToLocation = () => {
    const element = document.getElementById("location");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-spacing bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 hero-text">
              Our Services & Offerings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what makes The Ayodhya Mahal the perfect choice for your dining experience
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="card-elegant bg-card p-6 rounded-lg text-center">
                  <div className={`inline-flex p-4 rounded-full ${service.bgColor} mb-4`}>
                    <IconComponent className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3 text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Special Offerings Section */}
          <div className="bg-card card-elegant p-8 lg:p-12 rounded-lg text-center">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-6 text-primary">
              Why Choose The Ayodhya Mahal?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Pure Vegetarian</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-secondary">7</div>
                <div className="text-sm text-muted-foreground">Days a Week</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">12</div>
                <div className="text-sm text-muted-foreground">Hours Daily</div>
              </div>
            </div>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              Whether you're looking for a casual meal or an indulgent dining experience, 
              our menu provides value and variety. We strive to create a welcoming environment 
              for everyone, with features designed to enhance your dining experience from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="royal" size="lg" onClick={scrollToLocation}>
                Visit Our Restaurant
              </Button>
              <Button variant="gold" size="lg">
                Call for Home Delivery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}