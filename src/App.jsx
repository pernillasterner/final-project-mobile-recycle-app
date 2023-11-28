import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { NavBar } from "./components/NavBar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Home />
      <Footer />
      <AppRoutes />
    </BrowserRouter>
  );
};
