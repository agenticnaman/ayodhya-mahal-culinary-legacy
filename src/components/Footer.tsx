import { MapPin, Clock, Phone, Utensils, Star, Home, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border relative z-10">
      <div className="container mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Restaurant Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-4"
            >
              <h3 className="text-2xl lg:text-3xl font-serif font-bold hero-text mb-2">
                The Ayodhya Mahal
              </h3>
              <p className="text-muted-foreground">
                A Royal Pure Vegetarian Dining Experience
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Located in the vibrant heart of Awadhpuri Colony, The Ayodhya Mahal is a 
                cherished culinary haven where tradition meets innovation. Known for its 
                commitment to quality ingredients and exceptional service.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center space-x-2 text-primary">
                  <Utensils className="h-4 w-4" />
                  <span>Pure Vegetarian</span>
                </div>
                <div className="flex items-center space-x-2 text-primary">
                  <Star className="h-4 w-4" />
                  <span>Jain Options</span>
                </div>
                <div className="flex items-center space-x-2 text-primary">
                  <Home className="h-4 w-4" />
                  <span>Home Delivery</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1 }} 
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-serif font-semibold mb-4 text-card-foreground">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {["home","about","gallery","services","location"].map((sec) => (
                  <button
                    key={sec}
                    onClick={() => scrollToSection(sec)}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-serif font-semibold mb-4 text-card-foreground">
                Contact Info
              </h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p>Opposite Jal Sansthaan, Amaniganj</p>
                    <p>Awas Vikas Yojana, Faizabad</p>
                    <p>Awadhpuri Colony, Ayodhya</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                  <p>Mon - Sun: 11:00 AM - 11:00 PM</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">+91 92145 05594</p>
                    <p>Call for Reservations & Delivery</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="font-semibold text-card-foreground mb-1">Order Online:</p>
                  <a 
                    href="https://www.swiggy.com/city/faizabad/the-ayodhya-mahal-subhash-nagar-rest1130341?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors block"
                  >
                    🟠 Swiggy
                  </a>
                  <a 
                    href="https://www.zomato.com/faizabad-ayodhya/the-ayodhya-mahal-faizabad-ayodhya-locality/order" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors block"
                  >
                    🍽️ Zomato
                  </a>
                  <div className="flex items-center space-x-3 pt-2">
                    <Instagram className="h-4 w-4 text-primary" />
                    <a 
                      href="https://www.instagram.com/theayodhyamahal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:text-secondary transition-colors"
                    >
                      Follow us on Instagram
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }} 
          viewport={{ once: true }}
          className="py-6 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} The Ayodhya Mahal. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>Pure Vegetarian Restaurant</span>
              <span>•</span>
              <span>Jain-Friendly Options</span>
              <span>•</span>
              <span>Home Delivery Available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
