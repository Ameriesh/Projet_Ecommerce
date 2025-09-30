import { create } from "zustand";

type CartItem = {
  asin: string;       // identifiant unique du produit
  title: string;
  price: string;
  image: string;
  url?: string;
  quantity: number;
};

type WishlistItem = Omit<CartItem, "quantity">;

interface CartState {
  quantity: number;
  cart: CartItem[];
  wishlist: WishlistItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (asin: string) => void;
  addToWishlist: (item: WishlistItem, quantity: number) => void;
  removeFromWishlist: (asin: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  wishlist: [],
  quantity: 0,

  addToCart: (item) =>
    set((state) => {
      const exists = state.cart.find((p) => p.asin === item.asin);
      if (exists) {
        // si déjà dans le panier → incrémenter la quantité
        return {
          cart: state.cart.map((p) =>
            p.asin === item.asin ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),

  removeFromCart: (asin) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.asin !== asin),
    })),

  addToWishlist: (item) =>
    set((state) => {
      if (state.wishlist.find((p) => p.asin === item.asin)) return state;
      return { wishlist: [...state.wishlist, item] };
    }),

  removeFromWishlist: (asin) =>
    set((state) => ({
      wishlist: state.wishlist.filter((p) => p.asin !== asin),
    })),

  clearCart: () => set({ cart: [] }),
}));
