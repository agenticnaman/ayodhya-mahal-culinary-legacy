import { Clock, MapPin, Utensils, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-spacing bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 hero-text">
              About The Ayodhya Mahal
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A cherished culinary haven where tradition meets innovation in the heart of Ayodhya
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
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
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="card-elegant bg-card p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-card-foreground">Operating Hours</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Open Monday to Sunday
                  <br />
                  11:00 AM - 11:00 PM
                  <br />
                  <span className="text-primary font-medium">Always ready to serve you</span>
                </p>
              </div>

              <div className="card-elegant bg-card p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Utensils className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-card-foreground">Pure Vegetarian</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  100% Pure Vegetarian Thali
                  <br />
                  Jain-friendly options available
                  <br />
                  <span className="text-secondary font-medium">No alcohol served</span>
                </p>
              </div>

              <div className="card-elegant bg-card p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <h4 className="font-semibold text-card-foreground">Prime Location</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Awadhpuri Colony, Ayodhya
                  <br />
                  Convenient for locals & tourists
                  <br />
                  <span className="text-accent font-medium">Easy to find & visit</span>
                </p>
              </div>

              <div className="card-elegant bg-card p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-destructive/10 rounded-lg">
                    <Heart className="h-6 w-6 text-destructive" />
                  </div>
                  <h4 className="font-semibold text-card-foreground">Our Promise</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Quality ingredients
                  <br />
                  Authentic flavors
                  <br />
                  <span className="text-destructive font-medium">Memorable experiences</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Description */}
          <div className="bg-card card-elegant p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-4">Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              For those who appreciate quality food, a warm atmosphere, and attentive service, 
              The Ayodhya Mahal in Awadhpuri Colony, Ayodhya is a must-visit destination. 
              With its extensive menu, accessible location, and dedication to customer satisfaction, 
              The Ayodhya Mahal promises an unforgettable dining experience. Whether you're a local 
              or a visitor, join us to discover why we're the preferred choice for discerning diners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}