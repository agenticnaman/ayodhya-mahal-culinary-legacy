import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Location() {
  return (
    <section id="location" className="section-spacing">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 hero-text">
              Visit Us Today
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Ayodhya, we're easily accessible and ready to welcome you
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Address */}
              <div className="card-elegant bg-card p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-semibold mb-2 text-card-foreground">
                      Our Location
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Opposite Jal Sansthaan, Amaniganj<br />
                      Awas Vikas Yojana, Faizabad<br />
                      Awadhpuri Colony, Ayodhya<br />
                      Uttar Pradesh, India
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('https://maps.google.com/?q=The+Ayodhya+Mahal', '_blank')}
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="card-elegant bg-card p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-semibold mb-2 text-card-foreground">
                      Operating Hours
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Sunday</span>
                        <span className="font-medium">11:00 AM - 11:00 PM</span>
                      </div>
                      <p className="text-sm text-primary font-medium">
                        Open all days of the week for your convenience
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="card-elegant bg-card p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-semibold mb-2 text-card-foreground">
                      Contact Us
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      <span className="font-semibold text-foreground">+91 92145 05594</span><br />
                      Call us for reservations or home delivery
                    </p>
                    <div className="space-y-2">
                      <a href="tel:+919214505594">
                        <Button variant="gold" size="sm" className="w-full">
                          📞 Call for Reservations
                        </Button>
                      </a>
                      <div className="flex space-x-2">
                        <a 
                          href="https://www.swiggy.com/city/faizabad/the-ayodhya-mahal-subhash-nagar-rest1130341?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="outline" size="sm" className="w-full">
                            🟠 Swiggy
                          </Button>
                        </a>
                        <a 
                          href="https://www.zomato.com/faizabad-ayodhya/the-ayodhya-mahal-faizabad-ayodhya-locality/order" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="outline" size="sm" className="w-full">
                            🍽️ Zomato
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-lg font-serif font-semibold mb-4 text-foreground">
                  What Makes Us Special
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Pure Vegetarian</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Jain Options</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Home Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span>No Alcohol</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="card-elegant">
              <div className="bg-card p-4 rounded-lg">
                <h3 className="text-xl font-serif font-semibold mb-4 text-card-foreground">
                  Find Us on Map
                </h3>
                <div className="relative overflow-hidden rounded-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.61318614805785!2d82.16840120579516!3d26.782294605393393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07fd9ae2e829%3A0x23fa3f75b12d653f!2sThe%20Ayodhya%20Mahal!5e0!3m2!1sen!2sin!4v1759028442121!5m2!1sen!2sin" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="The Ayodhya Mahal Location"
                    className="w-full rounded-lg"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Located in a convenient area with easy access for both locals and tourists visiting Ayodhya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}