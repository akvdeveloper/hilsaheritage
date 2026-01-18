import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import heroBanquet from '@/assets/hero-banquet.jpg';
import hotelExterior from '@/assets/hotel-exterior.jpg';
import luxuryRoom from '@/assets/luxury-room.jpg';
import weddingSetup from '@/assets/wedding-setup.jpg';
import fineDining from '@/assets/fine-dining.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'banquets', name: 'Banquets' },
    { id: 'rooms', name: 'Rooms' },
    { id: 'dining', name: 'Dining' },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const galleryImages = [
    { src: heroBanquet, category: 'weddings', title: 'Grand Wedding Setup' },
    { src: hotelExterior, category: 'banquets', title: 'Hotel Exterior' },
    { src: luxuryRoom, category: 'rooms', title: 'Presidential Suite' },
    { src: weddingSetup, category: 'weddings', title: 'Reception Arrangement' },
    { src: fineDining, category: 'dining', title: 'Fine Dining Experience' },
    { src: heroBanquet, category: 'banquets', title: 'Banquet Hall Decor' },
    { src: weddingSetup, category: 'weddings', title: 'Wedding Stage' },
    { src: luxuryRoom, category: 'rooms', title: 'Luxury Room Interior' },
    { src: fineDining, category: 'dining', title: 'Gourmet Cuisine' },
    { src: hotelExterior, category: 'banquets', title: 'Evening Ambiance' },
    { src: heroBanquet, category: 'weddings', title: 'Floral Decorations' },
    { src: weddingSetup, category: 'banquets', title: 'Corporate Event Setup' },
  ];

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <>
      <title>Gallery - Royal Palace Hotel & Banquets | Photo Gallery</title>
      <meta name="description" content="Browse our stunning gallery showcasing weddings, events, and celebrations at Royal Palace Hotel & Banquets. See why we're the premier venue for your special occasions." />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanquet})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <p className="text-accent font-display text-lg tracking-[0.3em] uppercase mb-4 animate-fade-in opacity-0" style={{ animationDelay: '200ms' }}>
            Visual Journey
          </p>
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in-up opacity-0" style={{ animationDelay: '400ms' }}>
            Our Gallery
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-display text-sm tracking-wide transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden shadow-card cursor-pointer animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-display text-lg">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={handlePrevImage}
            className="absolute left-6 text-white hover:text-accent transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-6 text-white hover:text-accent transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="max-w-5xl max-h-[80vh] px-4">
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center font-display text-xl mt-4">
              {filteredImages[selectedImage].title}
            </p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-section mb-6">
            Inspired by What You <span className="text-accent">See</span>?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Let us create the same magic for your special occasion. Book a visit to experience our venue in person.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="xl">
              Plan Your Event
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Gallery;
