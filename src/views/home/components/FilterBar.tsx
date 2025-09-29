import React, { useState } from "react";
import Button from "../../../components/commons/button/Button";
import Input from "../../../components/commons/input/Input";
interface FilterBarProps {
  categories: string[];
  brands: string[];
  onFilter: (filters: { category: string; brand: string; minPrice: number; maxPrice: number }) => void;
}

const FilterBar = ({ categories, brands, onFilter }: FilterBarProps) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleApply = () => {
    onFilter({
      category: selectedCategory,
      brand: selectedBrand,
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
    });
  };

  return (
    <div className="flex flex-col gap-4 p-4 w-64 bg-gray-50 rounded-md shadow-md">
      <h3 className="font-semibold text-lg">Filtrer les produits</h3>

      {/* Catégorie */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">Catégorie</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Toutes les catégories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Marque */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">Marque</label>
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Toutes les marques</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Prix */}
      <div className="flex flex-col gap-1">
        <label className="font-medium">Prix min</label>
        <Input
          type="number"
          placeholder="Prix min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="font-medium">Prix max</label>
        <Input
          type="number"
          placeholder="Prix max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Bouton appliquer */}
      <Button variant="primary" onClick={handleApply} className="mt-2">
        Appliquer
      </Button>
    </div>
  );
};

export default FilterBar;
