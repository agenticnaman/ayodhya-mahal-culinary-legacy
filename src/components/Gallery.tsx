import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { motion } from "framer-motion";
import interior1 from "@/assets/interior-1.webp";
import interior2 from "@/assets/interior-2.webp";
import interior3 from "@/assets/interior-3.webp";
import interior4 from "@/assets/interior-4.webp";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: interior1,
      alt: "Elegant dining area with teal seating and warm lighting",
      title: "Main Dining Hall",
    },
    {
      src: interior2,
      alt: "Luxurious restaurant interior with gold accents",
      title: "Royal Ambiance",
    },
    {
      src: interior3,
      alt: "Comfortable seating arrangements with modern amenities",
      title: "Modern Comfort",
    },
    {
      src: interior4,
      alt: "Intimate dining spaces with elegant decor",
      title: "Private Dining",
    },
  ];

  return (
    <section id="gallery" className="section-spacing bg-muted/30 relative overflow-hidden">
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
              Our Royal Interior
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-constrained leading-relaxed">
              Step into our elegantly designed dining spaces where every detail reflects
              the royal heritage of Ayodhya
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl card-elegant cursor-pointer hover-lift border border-border/20 bg-card/30 backdrop-blur-sm"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-card/95 rounded-full p-4 shadow-xl border border-secondary/20">
                    <ZoomIn className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-serif font-bold mb-2 text-secondary">{image.title}</h3>
                  <p className="text-base opacity-90 leading-relaxed">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-full"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="absolute -top-12 right-0 text-secondary hover:text-primary transition-colors bg-card/10 rounded-full p-2 backdrop-blur-sm"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close gallery"
                >
                  <X className="h-8 w-8" />
                </button>
                <img
                  src={selectedImage}
                  alt="Restaurant interior"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
