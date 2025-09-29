import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../api/apiCategory";
import type { Category } from "../api/apiCategory";

export const useCategories = () => {
  return useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });
};
