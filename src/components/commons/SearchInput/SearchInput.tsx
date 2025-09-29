import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Input from "../input/Input";
import Button from "../button/Button";
import type { Category } from "../../../api/apiCategory";
import { fetchCategories } from "../../../api/apiCategory";

const SearchBar: React.FC = () => {
  const { data: categories = [], isLoading, error } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });

  const limitedCategories = categories.slice(8, 10);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Search:", query, selectedCategory);
  };

  if (isLoading) {
    return (
      <div className="flex w-full max-w-3xl border border-[var(--color-neutral-200)] rounded-lg overflow-hidden shadow-sm animate-pulse">
        <div className="h-10 bg-[var(--color-neutral-100)] w-32"></div>
        <div className="flex-1 bg-[var(--color-neutral-100)]"></div>
        <div className="w-12 bg-[var(--color-neutral-100)]"></div>
      </div>
    );
  }

  if (error) {
    const message = error instanceof Error ? error.message : "Erreur inconnue";
    return (
      <div className="text-[var(--color-error-500)] text-center p-4 border border-[var(--color-error-200)] rounded-lg bg-[var(--color-error-50)]">
        Erreur de chargement: {message}
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-3xl border border-[var(--color-neutral-300)] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Dropdown catégorie stylé */}
      <div className="relative">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="
            appearance-none
            bg-secondary-300
            hover:bg-[var(--color-secondary-300)]
            px-4 py-2
            font-medium
            border-r border-[var(--color-neutral-300)]
            cursor-pointer
            focus:outline-none
            focus:ring-2
            focus:ring-[var(--color-secondary-300)]
            focus:border-transparent
            text-white
            transition-all
            duration-200
            h-10
            min-w-32
          "
        >
          <option value="All">All categories</option>
          {limitedCategories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
        {/* Flèche custom */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            className="w-4 h-4 text-white font-bold"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Input */}
      <div className="flex-1">
        <Input
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            border-none 
            rounded-none 
            focus:ring-0
            h-10
            px-4
            shadow-none
            hover:border-none
          "
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
      </div>

      {/* Bouton search */}
      <Button
        variant="secondary"
        onClick={handleSearch}
        className="
          px-6 
          py-2 
          rounded-none 
          h-10
         
          transition-all
          duration-200
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </Button>
    </div>
  );
};

export default SearchBar;