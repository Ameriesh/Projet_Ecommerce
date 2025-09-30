import type { FC } from "react";
import { useCartStore } from "../../../store/useCartStore";
import Button from "../button/Button";
import { toast } from "sonner";

type CardProps = {
  asin: string; // ajout de l'identifiant
  title: string;
  price: string;
  image: string;
  url?: string;
  quantity?: number; // quantité optionnelle pour le panier
};

const Card: FC<CardProps> = ({ asin, title, price, image, url }) => {
  // Récupération des fonctions du store
 const { cart, wishlist, addToCart, removeFromCart, addToWishlist, removeFromWishlist } = useCartStore();

  const inCart = cart.some((p) => p.asin === asin);
  const inWishlist = wishlist.some((p) => p.asin === asin);

  const handleAddToCart = () => {
    if (!inCart){
      addToCart({ asin, title, price, image, url });
      toast.success(`${title} a été ajouté au panier !`,{duration: 2000});
    } 
    
    else {

      removeFromCart(asin)
      toast.error(`${title} Article supprimé du panier`,{duration: 2000});
    }; 
  };

  const handleWishlist = () => {
    if (!inWishlist){
       addToWishlist({ asin, title, price, image, url }, 0);
       toast.success(`${title} a été ajouté à la wishlist !`,{duration: 2000})
       }
    else{ 
        removeFromWishlist(asin)
        toast.error(`${title} supprimé de la wishlist`,{duration: 2000});
    };
  };

  return (
    <div className="card group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full hover:-translate-y-1">
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenu */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="font-semibold text-1xl mb-2 line-clamp-2 text-gray-900 group-hover:text-gray-700 transition-colors">
          {title}
        </h3>
        <p className="text-secondary-500 font-bold text-2xl mb-4">{price}</p>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          {/* Wishlist */}
          <Button
            variant="primary"
            onClick={handleWishlist}
              
            className={`
              flex items-center justify-center
              w-10 h-10 p-0
              rounded-lg
              ${inWishlist ? "bg-rose-100 text-rose-500 border-rose-200" : "bg-gray-100 text-gray-500 border-gray-200"}
              hover:scale-105
              transition-all duration-200
            `}
            aria-label="Ajouter à la wishlist"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
          </Button>

          {/* Add to Cart */}
          <Button
            variant="primary"
            onClick={handleAddToCart}
            className={`
              flex items-center justify-center
              flex-1 py-2
              rounded-lg
              ${inCart ? "bg-primary-400 text-white" : "bg-primary-300 text-white"}
              hover:scale-105
              transition-all duration-200
            `}
            aria-label="Ajouter au panier"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shopping-cart mr-2"
            >
              <circle cx="8" cy="21" r="1"/>
              <circle cx="19" cy="21" r="1"/>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
            </svg>
            {inCart ? "Remove in card" : "Add cart"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
