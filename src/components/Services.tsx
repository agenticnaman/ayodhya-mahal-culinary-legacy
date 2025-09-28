import { Utensils, Home, Clock, Star, Leaf, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: Utensils,
      title: "Pure Vegetarian Thali",
      description:
        "Authentic vegetarian thali prepared with the finest ingredients and traditional recipes",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Star,
      title: "Jain Options Available",
      description:
        "Special Jain-friendly menu options prepared according to Jain dietary requirements",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Home,
      title: "Home Delivery",
      description:
        "Enjoy our delicious food in the comfort of your home with our reliable delivery service",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Clock,
      title: "Dinner Service",
      description:
        "Open for dinner service from 11:00 AM to 11:00 PM, seven days a week",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Leaf,
      title: "No Alcohol Policy",
      description:
        "We maintain a family-friendly environment with no alcohol served on premises",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Every dish is prepared with quality ingredients and exceptional attention to detail",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  const scrollToLocation = () => {
    const element = document.getElementById("location");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="section-spacing bg-background relative overflow-hidden">
      <div className="content-width container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-6 text-primary">
              Our Services & Offerings
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-constrained leading-relaxed">
              Discover what makes The Ayodhya Mahal the perfect choice for your dining experience
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-elegant bg-card/60 backdrop-blur-sm p-8 rounded-2xl border border-border/20 hover-lift group"
                >
                  <div className={`inline-flex p-5 rounded-2xl ${service.bgColor} mb-6 shadow-md group-hover:shadow-lg transition-all duration-300`}>
                    <IconComponent className={`h-10 w-10 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-4 text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Special Offerings Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-card card-elegant p-8 lg:p-12 rounded-2xl shadow-lg text-center"
          >
            <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-6 text-primary">
              Why Choose The Ayodhya Mahal?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <motion.div whileHover={{ scale: 1.1 }} className="space-y-2">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Pure Vegetarian</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="space-y-2">
                <div className="text-3xl font-bold text-secondary">7</div>
                <div className="text-sm text-muted-foreground">Days a Week</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="space-y-2">
                <div className="text-3xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Hours Daily</div>
              </motion.div>
            </div>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you're looking for a casual meal or an indulgent dining experience, 
              our menu provides value and variety. We strive to create a welcoming environment 
              for everyone, with features designed to enhance your dining experience from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                className="btn-primary text-lg px-10 py-6 h-auto rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={scrollToLocation}
              >
                Visit Our Restaurant
              </Button>
              <Button
                className="btn-secondary text-lg px-10 py-6 h-auto rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Call for Home Delivery
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
