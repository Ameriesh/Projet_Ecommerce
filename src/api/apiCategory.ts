import { apiService } from "./apiService";

export interface Category {
  id: string;
  name: string;
}

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await apiService.get<{ status: string; data: Category[] }>(
    "product-category-list",
    { country: "us", limit: "5" }
  );
  return res.data;
};
