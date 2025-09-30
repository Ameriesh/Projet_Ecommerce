import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./src/views/home/HomePage"
import FavoritesPage from "./src/views/home/cartPage/FavoritePage";
import CartPage from "./src/views/home/cartPage/CartPage";

export default function AppRoutes(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/favorites" element={<FavoritesPage></FavoritesPage>}></Route>
                <Route path="/cart" element={<CartPage></CartPage>}></Route>
              
            </Routes>
        </BrowserRouter>
    )
}