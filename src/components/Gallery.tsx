import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
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
      title: "Main Dining Hall"
    },
    {
      src: interior2,
      alt: "Luxurious restaurant interior with gold accents",
      title: "Royal Ambiance"
    },
    {
      src: interior3,
      alt: "Comfortable seating arrangements with modern amenities",
      title: "Modern Comfort"
    },
    {
      src: interior4,
      alt: "Intimate dining spaces with elegant decor",
      title: "Private Dining"
    }
  ];

  return (
    <section id="gallery" className="section-spacing">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold mb-6 hero-text">
              Our Royal Interior
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Step into our elegantly designed dining spaces where every detail reflects 
              the royal heritage of Ayodhya
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg card-elegant cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-3">
                    <ZoomIn className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-serif font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl max-h-full">
                <button
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
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
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}