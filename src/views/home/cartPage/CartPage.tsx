import React from "react";
import { useCartStore } from "../../../store/useCartStore";
import Button from "../../../components/commons/button/Button";
import { toast } from "sonner";
import Navbar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/footer/Footer";

const CartPage: React.FC = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const addToCart = useCartStore((state) => state.addToCart);

  const totalPrice = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^\d.-]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-gray-500">
        <h2 className="text-2xl font-semibold mb-2">Votre panier est vide</h2>
        <p>Ajoutez des produits au panier pour les retrouver ici.</p>
      </div>
    );
  }

  return (
    <>
        <Navbar />
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Mon Panier ({cart.length} articles)</h2>
      <div className="grid grid-cols-1 gap-4">
        {cart.map((item) => (
          <div key={item.asin} className="flex gap-4 items-center border rounded p-4">
            <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded"/>
            <div className="flex-1 flex flex-col gap-1">
              <span className="font-medium">{item.title}</span>
              <span className="text-gray-600">{item.price} x {item.quantity}</span>
              <div className="flex gap-2 mt-2">
                <Button
                  onClick={() => {
                    addToCart(item);
                    toast.success(`${item.title} augmenté de 1`, { duration: 2000 });
                  }}
                  className="px-2 py-1 text-sm"
                >
                  +
                </Button>
                <Button
                  onClick={() => {
                    if (item.quantity > 1) {
                      removeFromCart(item.asin);
                      addToCart({ ...item });
                      toast(`${item.title} réduit de 1`, { duration: 2000 });
                    } else {
                      removeFromCart(item.asin);
                      toast(`${item.title} supprimé du panier`, { duration: 2000 });
                    }
                  }}
                  className="px-2 py-1 text-sm"
                >
                  -
                </Button>
                <Button
                    variant="secondary"
                  onClick={() => {
                    removeFromCart(item.asin);
                    toast(`${item.title} supprimé du panier`, { duration: 2000 });
                  }}
                  className="px-2 py-1 text-sm text-white"
                >
                  Supprimer
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <span className="font-bold text-lg">Total: ${totalPrice.toFixed(2)}</span>
        <Button
            variant="secondary"
          onClick={() => {
            clearCart();
            toast.success("Panier vidé", { duration: 2000 });
          }}
          className=" text-white py-2 px-4 rounded"
        >
          Vider le panier
        </Button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default CartPage;
