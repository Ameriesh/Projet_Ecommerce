import React, { useState } from "react";
import Navbar from "../../components/NavBar/NavBar";
import CarouselSpacing from "../../components/commons/Caroussel/Caroussel";
import { fetchProductsByCategory } from "../../api/apiProducts";
import type { Product } from "../../api/apiProducts";
import { useQuery } from "@tanstack/react-query";
import Hero from "./components/Hero";
import Footer from "../../components/footer/Footer";
import CartSidebar from "../../components/cartSidebar/CartSidebar";
import { fetchBestSellers } from "../../api/apiBestSellers";
import type {BestSellers} from "../../api/apiBestSellers";

// Liste des catégories à afficher
const bestToShow = [
  { id: "software/229535", name: "videogames" },
 
];
const categoriesToShow = [
  { id: "172282", name: "Électronique" },
  { id: "283155", name: "Livres" },
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <CartSidebar />

      {/* Hero Section */}
      <section className="relative">
        <Hero />
      </section><br></br><br></br>

      <main className="relative z-10">
        {/* Carousels par catégorie */}
        <section className="max-w-7xl mx-auto px-6 py-16 space-y-20">
          {categoriesToShow.map((cat) => (
            <CarouselByCategory key={cat.id} category={cat} />
          ))}
        </section>
        <section className="max-w-7xl mx-auto px-6 py-16 space-y-20">
          {bestToShow.map((cat) => (
            <CarouselBestSellers
              key={cat.id}
              categoryId={cat.id}
              categoryName={cat.name}
            />
          ))}
        </section>

        {/* CTA */}
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
};

export default HomePage;


const CarouselByCategory: React.FC<{ category: { id: string; name: string } }> = ({ category }) => {
  const [page, setPage] = useState(1);

  const { data: products = [], isLoading, error } = useQuery<Product[], Error>({
    queryKey: ["products", category.id, page],
    queryFn: () => fetchProductsByCategory(category.id, page, 10),
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  // Limite les produits à afficher dans le carousel
  const limitedProducts = products.slice(0, 12);

  return (
    <CarouselSpacing
      title={category.name}
      items={limitedProducts}
      page={page}
      setPage={setPage}
      isLoading={isLoading}
      error={error}
    />
  );
};

interface CarouselBestSellersProps {
  categoryId: string;
  categoryName: string;
}

const CarouselBestSellers: React.FC<CarouselBestSellersProps> = ({ categoryId, categoryName }) => {
  const [page, setPage] = useState(1);

  const { data: products = [], isLoading, error } = useQuery<BestSellers[], Error>({
    queryKey: ["bestSellers", categoryId, page],
    queryFn: () => fetchBestSellers(categoryId, page, 10),
    staleTime: 1000 * 60 * 10, // 10 minutes
    refetchOnWindowFocus: false,
  });

  // Limite le nombre de produits à afficher
  const limitedSellers = products.slice(0, 12);

  return (
    <CarouselSpacing
      title={`Best Sellers - ${categoryName}`}
      items={limitedSellers}
      page={page}
      setPage={setPage}
      isLoading={isLoading}
      error={error}
    />
  );
};



