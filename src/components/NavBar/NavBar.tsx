import React from "react";
import SearchBar from "../commons/SearchInput/SearchInput";
import Button from "../commons/button/Button";
import logo from "../../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 shadow-lg">
      {/* Topbar secondaire */}
      <div className="w-full bg-[var(--color-primary-500)] text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-end gap-6 px-6 py-2">
          <a 
            href="#" 
            className="hover:text-[var(--color-primary-100)] transition-colors duration-200 font-medium"
          >
            Help
          </a>
          <a 
            href="#" 
            className="hover:text-[var(--color-primary-100)] transition-colors duration-200 font-medium"
          >
            Account
          </a>
          <a 
            href="#" 
            className="hover:text-[var(--color-primary-100)] transition-colors duration-200 font-medium"
          >
            
            My orders
          </a>
        </div>
      </div>

      {/* Navbar principale */}
      <div className="w-full bg-white text-[var(--color-primary-500)] h-20 border-b border-[var(--color-neutral-200)] shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-14 w-auto rounded-sm cursor-pointer transition-transform duration-200 hover:scale-105"
            />
          </div>

          {/* Barre de recherche */}
          <div className="flex-1 mx-8 max-w-2xl">
            <SearchBar />
          </div>

          {/* Actions (Wishlist + Panier) */}
          <div className="flex items-center gap-4">
            {/* Wishlist */}
            <div className="relative">
              <Button
                variant="outline"
                className="
                  flex 
                  items-center 
                  gap-2 
                  px-3 py-3
                  
                  rounded-lg
                 
                  transition-all duration-200
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
                </svg>
                <span className="hidden sm:inline">Wishlist</span>
              </Button>
              <span className="
                absolute -top-2 -right-2
                bg-[var(--color-secondary-300)] text-white text-xs
                px-1.5 py-0.5 rounded-full font-semibold shadow-sm
              ">2</span>
            </div>

            {/* Panier */}
            <div className="relative">
              <Button
                variant="primary"
                className="
                  flex items-center gap-2
                  px-3 py-3 rounded-lg
                 
                  transition-all duration-200
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-cart"
                >
                  <circle cx="8" cy="21" r="1"/>
                  <circle cx="19" cy="21" r="1"/>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
                <span className="hidden sm:inline">Cart</span>
              </Button>
              <span className="
                absolute -top-2 -right-2
                bg-[var(--color-secondary-400)] text-white text-xs
                px-1.5 py-0.5 rounded-full font-semibold shadow-sm
              ">3</span>
            </div>
          </div>

        </div>
      </div>

      {/* Menu catégories */}
      <nav className="bg-[var(--color-primary-400)] text-white text-sm font-medium">
        <div className="max-w-7xl mx-auto flex gap-8 px-6 py-3 overflow-x-auto">
          <a 
            href="#" 
            className="
              hover:text-[var(--color-primary-100)] 
              transition-colors 
              duration-200 
              whitespace-nowrap
              hover:bg-[var(--color-primary-300)]
              px-3
              py-1
              rounded
            "
          >
            Électronique
          </a>
          <a 
            href="#" 
            className="
              hover:text-[var(--color-primary-100)] 
              transition-colors 
              duration-200 
              whitespace-nowrap
              hover:bg-[var(--color-primary-300)]
              px-3
              py-1
              rounded
            "
          >
            Mode
          </a>
          <a 
            href="#" 
            className="
              hover:text-[var(--color-primary-100)] 
              transition-colors 
              duration-200 
              whitespace-nowrap
              hover:bg-[var(--color-primary-300)]
              px-3
              py-1
              rounded
            "
          >
            Maison
          </a>
          <a 
            href="#" 
            className="
              hover:text-[var(--color-primary-100)] 
              transition-colors 
              duration-200 
              whitespace-nowrap
              hover:bg-[var(--color-primary-300)]
              px-3
              py-1
              rounded
            "
          >
            Livres
          </a>
          <a 
            href="#" 
            className="
              hover:text-[var(--color-primary-100)] 
              transition-colors 
              duration-200 
              whitespace-nowrap
              hover:bg-[var(--color-primary-300)]
              px-3
              py-1
              rounded
            "
          >
            Jeux & Apps
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;