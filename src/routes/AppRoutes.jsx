import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { P2PPage } from "../pages/P2PPage/P2PPage";
import { RefurbishedPage } from "../pages/RefurbishedPage/RefurbishedPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { CartPage } from "../pages/CartPage/CartPage";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import { NotFound404 } from "../pages/NotFound404";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/peertopeer" element={<P2PPage />} />
      <Route path="/refurbished" element={<RefurbishedPage />}></Route>
      <Route path="/about-us" element={<AboutUs />}></Route>
      <Route path="/product/:prodId" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};
