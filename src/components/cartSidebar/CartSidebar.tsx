import React, { useState } from "react";
import { useEffect } from "react";
import { useCartStore } from "../../store/useCartStore";
import { toast } from "sonner";
import Button from "../commons/button/Button";

const CartSidebar: React.FC = () => {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const [isOpen, setIsOpen] = useState(true);

  const increment = (asin: string) => {
    const item = cart.find((p) => p.asin === asin);
    if (item) {
      addToCart(item);
      toast.success(`${item.title} augmenté de 1`, { duration: 2000 });
    }
  };

  const decrement = (asin: string) => {
    const item = cart.find((p) => p.asin === asin);
    if (item) {
      if (item.quantity > 1) {
        removeFromCart(asin); 
        addToCart({ ...item}); 
        toast.success(`${item.title} réduit de 1`, { duration: 2000 });
      } else {
        removeFromCart(asin);
        toast.error(`${item.title} supprimé`, { duration: 2000 });
      }
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
   useEffect(() => {
    if (cart.length > 0) setIsOpen(true);
    }, [cart]);

  // **Ne s’affiche pas si panier vide**
  // Total du panier
const totalPrice = cart.reduce((sum, item) => {
  // On suppose que item.price est une chaîne genre "$19.99"
  const numericPrice = parseFloat(item.price.replace(/[^0-9.-]+/g, "")) || 0;
  return sum + numericPrice * item.quantity;
}, 0);
    if (totalPrice === 0) return null;
  if (cart.length === 0 || !isOpen) return null;

   


  return (
    <div className="fixed right-0 top-20 h-auto max-h-[80vh] w-72 bg-white shadow-lg p-4 flex flex-col z-50 transition-all">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">Mon Panier ({totalItems})</h3>
        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800">
          X
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3">
        {cart.map((item) => (
          <div key={item.asin} className="flex items-center gap-3 border-b pb-2">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded"/>
            <div className="flex-1 flex flex-col">
              <span className="text-sm text-gray-600">{item.price}</span>
              <div className="flex gap-2 mt-1">
                <Button variant="secondary" onClick={() => decrement(item.asin)} className="px-2 py-1 text-sm">-</Button>
                <span>{item.quantity}</span>
                <Button onClick={() => increment(item.asin)} variant="secondary" className="px-2 py-1 text-sm">+</Button>
                <Button onClick={() => { removeFromCart(item.asin); toast(`${item.title} supprimé`, { duration: 2000 }); }} className="px-1 py-1 text-sm bg-red-700 hover:bg-red-900"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t pt-2">
        <div className="flex justify-between font-semibold text-lg">
            <span>Total :</span>
            <span>${totalPrice.toFixed(2)}</span>
        </div>
        </div>

        <div className="mt-4">
        <Button 
            onClick={() => {
            clearCart();
            toast.success("Panier vidé", { duration: 2000 });
            }}
            className="w-full bg-secondary-300 text-white py-2 rounded"
        >
            Vider le panier
        </Button>
        </div>

    </div>
  );
};

export default CartSidebar;
