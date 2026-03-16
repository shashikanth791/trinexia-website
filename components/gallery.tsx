"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// Placeholder images - in production, replace with actual event photos
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/event-1.jpg",
    alt: "Tech workshop session",
    category: "Workshop",
  },
  {
    id: 2,
    src: "/images/gallery/event-2.jpg",
    alt: "Gaming tournament action",
    category: "Gaming",
  },
  {
    id: 3,
    src: "/images/gallery/event-3.jpg",
    alt: "Award ceremony",
    category: "Ceremony",
  },
  {
    id: 4,
    src: "/images/gallery/event-4.jpg",
    alt: "Coding competition",
    category: "Coding",
  },
  {
    id: 5,
    src: "/images/gallery/event-5.jpg",
    alt: "Team collaboration",
    category: "Ideathon",
  },
  {
    id: 6,
    src: "/images/gallery/event-6.jpg",
    alt: "Esports finals",
    category: "Gaming",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      )
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
      )
    }
  }

  return (
    <section id="gallery" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-foreground/3 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-widest">
            Memories & Moments
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 glow-text">
            Gallery
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Relive the excitement from previous editions of TriNexia. These moments await you!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-xl cursor-pointer group glass-card ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <div
                className={`relative ${
                  index === 0 ? "aspect-square md:aspect-[4/3]" : "aspect-square"
                }`}
              >
                <div className="absolute inset-0 bg-muted/30 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">
                    {image.category}
                  </span>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-foreground font-medium tracking-wide">
                    View
                  </span>
                </div>
              </div>
              {/* Category badge */}
              <div className="absolute bottom-4 left-4 glass px-3 py-1.5 rounded-full">
                <span className="text-xs text-foreground/80">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Note */}
        <p className="text-center text-muted-foreground/60 text-sm mt-8">
          More photos will be added after TriNexia 2026
        </p>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 glass-card rounded-full hover:bg-foreground/10 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6 text-foreground" />
          </button>

          {/* Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 p-3 glass-card rounded-full hover:bg-foreground/10 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 p-3 glass-card rounded-full hover:bg-foreground/10 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>

          {/* Image */}
          <div className="relative w-full max-w-4xl mx-8 aspect-[4/3] glass-card rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-muted/20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-foreground font-display text-2xl">
                  {galleryImages[selectedImage].category}
                </span>
                <p className="text-muted-foreground mt-2">
                  {galleryImages[selectedImage].alt}
                </p>
              </div>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full">
            <span className="text-sm text-foreground/80">
              {selectedImage + 1} / {galleryImages.length}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}
