import { apiService } from "./apiService";
import type { Product } from "./apiProducts";

interface BestSellersParams {
  category: string;
  type?: "BEST_SELLERS" | "GIFT_IDEAS" | "MOST_WISHED_FOR" | "MOVERS_AND_SHAKERS" | "NEW_RELEASES";
  page?: string;
  country?: string;
  limit?: string;
  language?: string;
  fields?: string;
}

export const apiBestSellers = {
  get: async (params: BestSellersParams): Promise<Product[]> => {
    const {
      category,
      type = "BEST_SELLERS",
      page = "1",
      country = "US",
      limit = "5",
      language,
      fields = "product_title,product_url,product_photo,product_price",
    } = params;

    const searchParams: Record<string, string> = {
      category,
      type,
      page,
      country,
      limit,
      fields,
    };

    if (language) searchParams.language = language;
    const res = await apiService.get<{ products: Product[] }>("best-sellers", searchParams);

    return res.products;
  },
};
