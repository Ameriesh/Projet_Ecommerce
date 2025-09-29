import type { FC } from "react";

type CardProps = {
  title: string;
  image: string;
  actionButton?: React.ReactNode;
};

const CardP: FC<CardProps> = ({ title, image, actionButton }) => {
  return (
    <div className="card group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden w-full max-w-xs hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-semibold text-lg mb-3 line-clamp-2 text-gray-900 group-hover:text-gray-700 transition-colors">
          {title}
        </h3>
        
        {actionButton && (
          <div className="mt-auto w-full">
            {actionButton}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardP;