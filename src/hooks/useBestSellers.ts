import { useQuery } from "@tanstack/react-query";
import { apiBestSellers } from "../api/apiBestSellers";
import type { Product } from "../api/apiProducts";

interface UseBestSellersParams {
  category: string;
  type?: "BEST_SELLERS" | "GIFT_IDEAS" | "MOST_WISHED_FOR" | "MOVERS_AND_SHAKERS" | "NEW_RELEASES";
  country?: string;
  language?: string;
  page: number;
}

export const useBestSellers = ({ category, type, country, language, page }: UseBestSellersParams) => {
  return useQuery<Product[], Error>({
    queryKey: ["bestSellers", category, type, country, language, page],
    queryFn: () => apiBestSellers.get({ category, type, country, language, page: page.toString() }),
    staleTime: 1000 * 60 * 2,
    retry: 1,
  });
};
