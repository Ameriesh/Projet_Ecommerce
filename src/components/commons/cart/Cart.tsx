import type { FC } from "react";
import Button from "../button/Button";

type CardProps = {
  title: string;
  price: string;
  image: string;
  url?: string;
  onAddToCart?: () => void;
};

const Card: FC<CardProps> = ({ title, price, image, url, onAddToCart }) => {
  return (
    <div className="card group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full hover:-translate-y-1">
      {/* Container d'image avec hauteur fixe */}
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
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-900 group-hover:text-gray-700 transition-colors">
          {title}
        </h3>

        <p className="text-primary-600 font-bold text-xl mb-4">{price}</p>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          
          <Button 
            variant="primary" 
            onClick={onAddToCart}
            className="flex-1"
            
          >
            Add cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;