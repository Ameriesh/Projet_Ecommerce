import React, { useState } from "react";
import { useBestSellers } from "../../../hooks/useBestSellers";
import CarouselSpacing from "../../../components/commons/Caroussel/Caroussel";


const bestSellerCategories = [
  "software",
  "books",
  "electronics",
  "toys",
  "home-garden",
  "video-games",
];

const BestSellersCarousel: React.FC = () => {
  const [category, setCategory] = useState("software");
  const [page, setPage] = useState(1);

  const { data: products = [], isLoading, error } = useBestSellers({
    category,
    page,
  });

  return (
    <section className="my-12 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Best Sellers</h2>

        {/* Sélecteur de catégorie */}
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1); // reset pagination
          }}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300"
        >
          {bestSellerCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <CarouselSpacing
        title={`Top ${category.charAt(0).toUpperCase() + category.slice(1)}`}
        items={products}
        page={page}
        setPage={setPage}
        isLoading={isLoading}
        error={error}
      />
    </section>
  );
};

export default BestSellersCarousel;
