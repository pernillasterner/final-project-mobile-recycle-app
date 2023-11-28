import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { P2PPage } from "../pages/P2PPage/P2PPage";
import { RefurbishedPage } from "../pages/RefurbishedPage/RefurbishedPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { CartPage } from "../pages/CartPage/CartPage";
import { PromptPage } from "../pages/PromptPage/PromptPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/peertopeer" element={<P2PPage />} />
      <Route path="/refurbished" element={<RefurbishedPage />}></Route>
      <Route path="/product/:prodId" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<PromptPage message={"404"} />} />
      <Route path="/thank-you" element={<PromptPage message={"thank-you"} />} />
    </Routes>
  );
};
