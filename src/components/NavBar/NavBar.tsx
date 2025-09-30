import React, { useState } from "react";
import SearchBar from "../commons/SearchInput/SearchInput";
import Button from "../commons/button/Button";
import logo from "../../assets/images/logo.png";
import { useCartStore } from "../../store/useCartStore";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const wishlistCount = useCartStore((state) => state.wishlist.length);
  const cartCount = useCartStore((state) => state.cart.length);

  return (
    <header className="w-full sticky top-0 z-50 shadow-lg">
      {/* Topbar secondaire - caché sur mobile */}
      <div className="hidden lg:block w-full bg-[var(--color-primary-500)] text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-6 py-2">
          {/* Informations de contact à gauche */}
          <div className="flex gap-4 lg:gap-6 text-xs lg:text-sm">
            <div className="flex items-center gap-1 lg:gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="hover:text-[var(--color-primary-100)] transition-colors duration-200">
                +1 (555) 123-4567
              </span>
            </div>
            
            <div className="flex items-center gap-1 lg:gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span className="hover:text-[var(--color-primary-100)] transition-colors duration-200">
                contact@entreprise.com
              </span>
            </div>
          </div>

          {/* Liens de navigation à droite */}
          <div className="flex gap-4 lg:gap-6">
            <a 
              href="#" 
              className="hover:text-[var(--color-primary-100)] transition-colors duration-200 font-medium flex items-center gap-1 text-xs lg:text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-help-circle"
              >
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <path d="M12 17h.01"/>
              </svg>
              <span className="hidden sm:inline">Help</span>
            </a>
            <a 
              href="#" 
              className="hover:text-[var(--color-primary-100)] transition-colors duration-200 font-medium flex items-center gap-1 text-xs lg:text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span className="hidden sm:inline">Account</span>
            </a>
            <a 
              href="#" 
              className="hover:text-[var(--color-primary-100)] transition-colors duration-200 font-medium flex items-center gap-1 text-xs lg:text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-package"
              >
                <path d="m7.5 4.27 9 5.15"/>
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
                <path d="m3.3 7 8.7 5 8.7-5"/>
                <path d="M12 22V12"/>
              </svg>
              <span className="hidden sm:inline">My orders</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar principale */}
      <div className="w-full bg-white text-[var(--color-primary-500)] h-16 lg:h-20 border-b border-[var(--color-neutral-200)] shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 py-2">
          {/* Logo et bouton menu mobile */}
          <div className="flex items-center gap-4">
            {/* Bouton menu hamburger pour mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
            </button>

            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="logo"
                className="h-12 lg:h-16 w-auto rounded-sm cursor-pointer transition-transform duration-200 hover:scale-105"
              />
            </div>
          </div>

          {/* Barre de recherche - Centrée sur desktop, cachée sur mobile quand menu ouvert */}
          <div className={`flex-1 mx-4 lg:mx-8 max-w-2xl transition-all duration-300 ${
            isMobileMenuOpen ? 'hidden lg:block' : 'block'
          }`}>
            <SearchBar />
          </div>

          {/* Actions (Wishlist + Panier) */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Wishlist */}
            <div className="relative">
              <Link to="/favorites">
              <Button
                variant="primary"
                className="
                  flex items-center justify-center
                  w-8 h-8 lg:w-10 lg:h-10 p-0
                  rounded-full
                  bg-gray-100 hover:bg-gray-200
                  text-gray-600 hover:text-rose-500
                  transition-all duration-200
                  hover:scale-105
                "
                aria-label="Wishlist"
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
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </Button>
              </Link>
              {wishlistCount > 0 && (
              <span className="
                absolute -top-1 -right-1
                bg-rose-500 text-white text-[8px] lg:text-[10px]
                w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center rounded-full font-bold
                shadow-sm border-2 border-white
                animate-pulse
              ">
                {wishlistCount}
              </span>
              )}
            </div>
              

            {/* Panier */}
            <div className="relative">
              <Link to="/cart">
              <Button
                variant="primary"
                className="
                  flex items-center justify-center
                  w-8 h-8 lg:w-10 lg:h-10 p-0
                  rounded-full
                  bg-gray-100 hover:bg-gray-200
                  text-gray-600 hover:text-blue-600
                  transition-all duration-200
                  hover:scale-105
                "
                aria-label="Shopping cart"
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
                >
                  <circle cx="8" cy="21" r="1"/>
                  <circle cx="19" cy="21" r="1"/>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
              </Button>
              </Link>
              {cartCount > 0 && (
              <span className="
                absolute -top-1 -right-1
                bg-blue-600 text-white text-[8px] lg:text-[10px]
                w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center rounded-full font-bold
                shadow-sm border-2 border-white
                animate-bounce
              ">{cartCount}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Menu catégories - Desktop visible, mobile dans le menu déroulant */}
      <nav className={`bg-[var(--color-primary-300)] text-white text-sm font-medium ${
        isMobileMenuOpen ? 'block' : 'hidden lg:block'
      }`}>
        {/* Version desktop */}
        <div className="hidden lg:flex max-w-7xl mx-auto gap-6 lg:gap-8 px-4 lg:px-6 py-3 overflow-x-auto">
          {['Électronique', 'Mode', 'Maison', 'Livres', 'Jeux & Apps'].map((category) => (
            <a 
              key={category}
              href="#" 
              className="
                hover:text-[var(--color-primary-100)] 
                transition-colors 
                duration-200 
                whitespace-nowrap
                hover:bg-[var(--color-primary-400)]
                px-3
                py-2
                rounded-lg
                font-medium
              "
            >
              {category}
            </a>
          ))}
        </div>

        {/* Version mobile - Menu déroulant */}
        <div className="lg:hidden bg-[var(--color-primary-400)]">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            {['Électronique', 'Mode', 'Maison', 'Livres', 'Jeux & Apps', 'Help', 'Account', 'My orders'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="
                  block
                  text-white 
                  hover:text-[var(--color-primary-100)] 
                  transition-colors 
                  duration-200 
                  py-2
                  px-4
                  rounded-lg
                  hover:bg-[var(--color-primary-500)]
                  font-medium
                "
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            
            {/* Informations de contact mobile */}
            <div className="pt-4 mt-4 border-t border-[var(--color-primary-400)] space-y-3">
              <div className="flex items-center gap-2 px-4 text-[var(--color-primary-100)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center gap-2 px-4 text-[var(--color-primary-100)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>contact@entreprise.com</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;