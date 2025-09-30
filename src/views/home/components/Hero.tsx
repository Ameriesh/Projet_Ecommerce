import React, { useState, useEffect } from "react";
import books from "../../../assets/images/b.jpg";
import games from "../../../assets/images/g.jpg";
import clothing from "../../../assets/images/c.jpg";
import tech from "../../../assets/images/t.jpg";
import CardP from "../../../components/commons/cart/CardProps";
import Button from "../../../components/commons/button/Button";

interface CategoryBanner {
  id: string;
  name: string;
  image: string;
}

const categories: CategoryBanner[] = [
  { id: "books", name: "Books", image: books },
  { id: "apps-games", name: "Apps & Games", image: games },
  { id: "clothing-shoes", name: "Clothing & Shoes", image: clothing },
  { id: "technology", name: "Technology", image: tech },
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide toutes les 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <section className="relative w-full h-[600px] mb-32">
      {/* Carousel principal */}
      <div className="absolute inset-0 overflow-hidden rounded-b-3xl">
        {categories.map((cat, index) => (
          <div
            key={cat.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentIndex 
                ? "opacity-100 transform translate-x-0" 
                : "opacity-0 transform translate-x-4"
            }`}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover"
            />
            {/* Overlay dégradé moderne */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
            
            {/* Contenu textuel sur le hero */}
            <div className="absolute left-12 bottom-1/3 max-w-md text-white">
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                Discover Amazing {cat.name}
              </h1>
              <p className="text-lg mb-6 opacity-90">
                Explore our curated collection of premium {cat.name.toLowerCase()} 
                with exclusive offers and fast delivery.
              </p>
              <Button variant="primary">
                Shop Now
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Contrôles de navigation seulement (sans dots) */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 group z-20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 group z-20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Cards flottantes HORIZONTALES - sans barre de défilement */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/3 w-11/12 max-w-7xl z-10 px-4">
        <div className="flex justify-between items-center gap-6">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="flex-1 transform hover:-translate-y-2 transition-transform duration-300 min-w-0"
            >
              <CardP
                title={cat.name}
                image={cat.image}
                actionButton={
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* Effet de brillance au survol */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-b-3xl">
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-12 scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </section>
  );
};

export default Hero;