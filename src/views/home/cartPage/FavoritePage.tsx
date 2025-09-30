import React from "react";
import { useCartStore } from "../../../store/useCartStore";
import Button from "../../../components/commons/button/Button";
import { toast } from "sonner";
import Navbar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/footer/Footer";

const FavoritesPage: React.FC = () => {
  const wishlist = useCartStore((state) => state.wishlist);
  const removeFromWishlist = useCartStore((state) => state.removeFromWishlist);
  const addToCart = useCartStore((state) => state.addToCart);

  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-gray-500">
        <h2 className="text-2xl font-semibold mb-2">Votre liste de favoris est vide</h2>
        <p>Ajoutez des produits à vos favoris pour les retrouver ici.</p>
      </div>
    );
  }

  return (
    <>
        <Navbar />
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Mes Favoris ({wishlist.length})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishlist.map((item) => (
          <div key={item.asin} className="border rounded p-4 flex flex-col gap-2">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded"
            />
            <span className="font-medium line-clamp-2">{item.title}</span>
            <span className="text-gray-600">{item.price}</span>
            <div className="mt-2 flex gap-2">
              <Button
                onClick={() => {
                  addToCart(item);
                  toast.success(`${item.title} ajouté au panier`, { duration: 2000 });
                }}
                className="flex-1  text-white py-2 rounded"
              >
                Ajouter au panier
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  removeFromWishlist(item.asin);
                  toast(`${item.title} supprimé des favoris`, { duration: 2000 });
                }}
                className="flex-1  text-white py-2 rounded"
              >
                Supprimer
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default FavoritesPage;
