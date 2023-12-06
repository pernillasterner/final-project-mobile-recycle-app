import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { NavBar } from "./components/NavBar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { useSelector } from "react-redux";

export const App = () => {
  const isModalActive = useSelector((state) => state.modal.isActive);

  return (
    <BrowserRouter>
      <NavBar />
      {!isModalActive && (
        <>
          <main>
            <AppRoutes />
          </main>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};
