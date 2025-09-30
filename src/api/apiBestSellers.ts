import { apiService } from "./apiService";
import type { Product } from "./apiProducts";
export interface BestSellers {
  status: string;
  asin:string;
  product_title: String;
  product_price:String;
  product_star_rating:String;
  product_num_ratings:445
  product_url:String;
  product_photo:String;
  rank_change_label:String;
}

export const fetchBestSellers = async (
  categoryId: string,
    page: number,
    limit: number
  
): Promise<BestSellers[]> => {
  const res = await apiService.get<{
    status: string;
    page: 1;
    limit: 10;
    
    best_sellers: BestSellers[];
  }>("best-sellers", {
    category_id: categoryId,
    page: toString(),
    limit: toString(),
    country: "us",
  });

  return res.best_sellers;
};
