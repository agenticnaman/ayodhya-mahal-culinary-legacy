import { Clock, MapPin, Utensils, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: Clock,
      title: "Operating Hours",
      description: "Open Monday to Sunday\n11:00 AM - 11:00 PM\nAlways ready to serve you",
      bgClass: "bg-primary/10",
      textClass: "text-primary"
    },
    {
      icon: Utensils,
      title: "Pure Vegetarian",
      description: "100% Pure Vegetarian Thali\nJain-friendly options available\nNo alcohol served",
      bgClass: "bg-secondary/10",
      textClass: "text-secondary"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Awadhpuri Colony, Ayodhya\nConvenient for locals & tourists\nEasy to find & visit",
      bgClass: "bg-primary/10",
      textClass: "text-primary"
    },
    {
      icon: Heart,
      title: "Our Promise",
      description: "Quality ingredients\nAuthentic flavors\nMemorable experiences",
      bgClass: "bg-secondary/10",
      textClass: "text-secondary"
    }
  ];

  return (
    <section id="about" className="section-spacing bg-muted/30">
      <div className="content-width container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-6 text-primary">
              About The Ayodhya Mahal
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-constrained leading-relaxed">
              A cherished culinary haven where tradition meets innovation in the heart of Ayodhya
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-semibold text-primary">
                  Overview and Location
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nestled near opposite Jal Sansthaan, Amaniganj, Awas Vikas Yojana, Faizabad in Awadhpuri Colony, 
                  The Ayodhya Mahal is a convenient stop for both locals and visitors exploring the city.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The restaurant's interior is elegantly designed to provide a cozy yet refined ambiance, 
                  with warm lighting and tasteful decor that make every meal feel special. Whether you're 
                  here for a quick bite or a leisurely gathering, the inviting atmosphere at The Ayodhya 
                  Mahal ensures a memorable dining experience.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-semibold text-primary">
                  Our Specialties
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Each dish is thoughtfully crafted with quality ingredients and authentic flavors that 
                  bring out the best in every cuisine we serve. Our commitment to quality ingredients, 
                  and exceptional service makes us a must-visit destination.
                </p>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={idx} 
                    className="card-elegant bg-card/60 backdrop-blur-sm p-8 rounded-xl border border-border/20 hover-lift"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`${feature.bgClass} p-3 rounded-xl shadow-md`}>
                        <Icon className={`h-7 w-7 ${feature.textClass}`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-card-foreground mb-2">{feature.title}</h4>
                        <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Bottom Description */}
          <motion.div
            className="bg-card card-elegant p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-semibold text-primary mb-4">Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              For those who appreciate quality food, a warm atmosphere, and attentive service, 
              The Ayodhya Mahal in Awadhpuri Colony, Ayodhya is a must-visit destination. 
              With its extensive menu, accessible location, and dedication to customer satisfaction, 
              The Ayodhya Mahal promises an unforgettable dining experience. Whether you're a local 
              or a visitor, join us to discover why we're the preferred choice for discerning diners.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
