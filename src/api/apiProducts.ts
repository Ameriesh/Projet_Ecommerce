import { apiService } from "./apiService";

export interface Product {
  asin: string;
  product_title: string;
  product_price: string;
  product_photo: string;
  product_url: string;
}

export const fetchProductsByCategory = async (
  categoryId: string,
  page = 1,
  limit = 5
): Promise<Product[]> => {
  const res = await apiService.get<{ status: string; data: { products: Product[] } }>(
    "products-by-category",
    {
      category_id: categoryId,
      page: page.toString(),
      limit: limit.toString(),
      country: "us",
      sort_by: "RELEVANCE",
      product_condition: "ALL",
      is_prime: "false",
      deals_and_discounts: "NONE",
    }
  );

  return res.data.products;
};
