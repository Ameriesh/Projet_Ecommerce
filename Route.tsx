import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./src/views/home/HomePage"

export default function AppRoutes(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
              
            </Routes>
        </BrowserRouter>
    )
}