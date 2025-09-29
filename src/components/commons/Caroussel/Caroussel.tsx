import React, { useState } from "react";
import Card from "../cart/Cart";
import type { Product } from "../../../api/apiProducts";

interface CarouselSpacingProps {
  title: string;
  items: Product[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  error: unknown;
}

const CarouselSpacing: React.FC<CarouselSpacingProps> = ({
  title,
  items,
  page,
  setPage,
  isLoading,
  error,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (currentIndex + 4 >= items.length) {
      setPage(page + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const canGoNext = currentIndex < items.length - 4 || items.length > 4;
  const canGoPrev = currentIndex > 0;

  return (
    <section className="mb-16 px-4">
      {/* En-tête */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-1xl font-bold text-secondary-500">{title}</h2>
        
        {/* Indicateurs de navigation */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">
            {Math.min(currentIndex + 1, items.length)} sur {items.length}
          </span>
          <div className="flex gap-1">
            <button
              onClick={prev}
              disabled={!canGoPrev}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 ${
                canGoPrev
                  ? "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-110"
                  : "bg-gray-50 text-gray-400 cursor-not-allowed"
              }`}
              aria-label="Produits précédents"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={next}
              disabled={!canGoNext}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 ${
                canGoNext
                  ? "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-110"
                  : "bg-gray-50 text-gray-400 cursor-not-allowed"
              }`}
              aria-label="Produits suivants"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Messages d'état */}
      {error ? (
        <div className="text-center py-8">
          <div className="text-red-500 text-lg mb-2">😕</div>
          <p className="text-red-600 font-medium">
            Erreur lors du chargement des produits
            {typeof error === "string" ? `: ${error}` : ""}
          </p>
        </div>
      ) : null}

      {isLoading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-2"></div>
          <p className="text-gray-600">Chargement des produits...</p>
        </div>
      )}

      {/* Carousel */}
      <div className="relative">
        {/* Boutons de navigation flottants */}
        {canGoPrev && (
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg hover:shadow-xl rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 z-20 transition-all duration-200 hover:scale-110 hover:bg-gray-50"
            aria-label="Produits précédents"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Conteneur des cartes */}
        <div className="flex gap-6 overflow-hidden px-2">
          {items.slice(currentIndex, currentIndex + 4).map((item) => (
            <div 
              key={item.asin} 
              className="flex-none transition-transform duration-300 hover:-translate-y-1"
              style={{ width: "calc(25% - 18px)" }} // 4 cartes avec espacement
            >
              <Card
                title={item.product_title}
                price={item.product_price}
                image={item.product_photo}
                url={item.product_url}
                onAddToCart={() => console.log(`${item.product_title} ajouté`)}
              />
            </div>
          ))}
        </div>

        {/* Bouton suivant flottant */}
        {canGoNext && (
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg hover:shadow-xl rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 z-20 transition-all duration-200 hover:scale-110 hover:bg-gray-50"
            aria-label="Produits suivants"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Indicateurs de progression (optionnel) */}
      {items.length > 4 && (
        <div className="flex justify-center mt-6 gap-1">
          {Array.from({ length: Math.ceil(items.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * 4)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / 4) === index
                  ? "bg-primary-600 w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Aller à la page ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CarouselSpacing;