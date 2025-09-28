import { Clock, MapPin, Utensils, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-spacing bg-muted/30 relative z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background pointer-events-none" />

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 hero-text">
              About The Ayodhya Mahal
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A cherished culinary haven where tradition meets innovation in the heart of Ayodhya
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
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
                  here for a quick bite or a leisurely gathering, the inviting atmosphere ensures a memorable dining experience.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-semibold text-primary">
                  Our Specialties
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Each dish is thoughtfully crafted with quality ingredients and authentic flavors that 
                  bring out the best in every cuisine we serve. Our commitment to quality and exceptional service makes us a must-visit destination.
                </p>
              </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Clock, title: "Operating Hours", details: "Mon - Sun: 11:00 AM - 11:00 PM", highlight: "Always ready to serve you", color: "primary" },
                { icon: Utensils, title: "Pure Vegetarian", details: "100% Vegetarian Thali, Jain Options", highlight: "No alcohol served", color: "secondary" },
                { icon: MapPin, title: "Prime Location", details: "Awadhpuri Colony, Ayodhya", highlight: "Easy to find & visit", color: "accent" },
                { icon: Heart, title: "Our Promise", details: "Quality ingredients, Authentic flavors", highlight: "Memorable experiences", color: "destructive" },
              ].map((feature, idx) => (
                <div key={idx} className="card-elegant bg-card p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 bg-${feature.color}/10 rounded-lg`}>
                      <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                    </div>
                    <h4 className="font-semibold text-card-foreground">{feature.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {feature.details}<br />
                    <span className={`text-${feature.color} font-medium`}>{feature.highlight}</span>
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Description */}
          <motion.div
            className="bg-card card-elegant p-8 rounded-lg hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-semibold text-primary mb-4">Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              For those who appreciate quality food, a warm atmosphere, and attentive service, 
              The Ayodhya Mahal in Awadhpuri Colony, Ayodhya is a must-visit destination. 
              With its extensive menu, accessible location, and dedication to customer satisfaction, 
              The Ayodhya Mahal promises an unforgettable dining experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
