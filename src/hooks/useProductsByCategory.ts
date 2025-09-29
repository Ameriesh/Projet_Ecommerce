import { useQuery } from "@tanstack/react-query";
import { fetchProductsByCategory} from "../api/apiProducts";
import type { Product } from "../api/apiProducts";

export const useProductsByCategory = (categoryId: string, page = 1, limit = 5) => {
  return useQuery<Product[], Error>({
    queryKey: ["products", categoryId, page],
    queryFn: () => fetchProductsByCategory(categoryId, page, limit),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
