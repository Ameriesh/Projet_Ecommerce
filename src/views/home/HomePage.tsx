import React, { useState } from "react";
import Navbar from "../../components/NavBar/NavBar";
import CarouselSpacing from "../../components/commons/Caroussel/Caroussel";
import { fetchProductsByCategory } from "../../api/apiProducts";
import type { Product } from "../../api/apiProducts";
import { useQuery } from "@tanstack/react-query";
import Hero from "./components/Hero";
import Footer from "../../components/footer/Footer";
import BestSellersCarousel from "./components/BestSellersCaroussel";

// Liste fixe des catégories avec les IDs Amazon numériques
const categoriesToShow = [
  { id: "172282", name: "Électronique" },
  { id: "283155", name: "Livres"},
];

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <Hero />
      </section><br></br><br></br>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Featured Categories Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          

          {/* Products Carousels */}
          <div className="space-y-20">
            {categoriesToShow.map((cat) => (
              <CarouselByCategory key={cat.id} category={cat} />
            ))}
          </div>
        </section>
        <BestSellersCarousel />

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20 mt-16">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à faire de bonnes affaires ?
            </h2>
            <p className="text-primary-100 text-lg mb-8">
              Rejoignez des milliers de clients satisfaits et découvrez nos offres exclusives
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 hover:scale-105 transform">
              Commencer mes achats
            </button>
          </div>
        </section>
      </main>

      <Footer />
      
    </div>
  );
}

// Composant qui gère le lazy loading des produits pour chaque carousel
const CarouselByCategory: React.FC<{ category: { id: string; name: string; description?: string } }> = ({ category }) => {
  const [page, setPage] = useState(1);

  // Récupération des produits via React Query
  const { data: products = [], isLoading, error } = useQuery<Product[], Error>({
    queryKey: ["products", category.id, page],
    queryFn: () => fetchProductsByCategory(category.id, page, 8), // Augmenté à 8 produits pour un meilleur défilement
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  return (
    <section className="relative">
      {/* En-tête de section avec fond décoratif */}
      

      <CarouselSpacing
        title={category.name}
        items={products}
        page={page}
        setPage={setPage}
        isLoading={isLoading}
        error={error}
      />
    </section>
  );
};

export default HomePage;