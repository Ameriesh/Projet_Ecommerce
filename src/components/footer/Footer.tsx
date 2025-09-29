function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                      <h3 className="font-bold text-lg mb-4">Notre Marketplace</h3>
                      <p className="text-gray-400">
                        Votre destination de shopping en ligne de confiance depuis 2024.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Catégories</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Électronique</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Livres</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Mode</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Maison</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Aide</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Livraison</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Retours</a></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Légal</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">CGV</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 Marketplace. Tous droits réservés.</p>
                  </div>
                </div>
              </footer>

    )
}

export default Footer