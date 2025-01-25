import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import HelmetProviderContext from "../utils/HelmetProviderContext/HelmetProviderContext";

const MainLayout = () => {
  return (
    <>
      <HelmetProviderContext>
        <NavBar />
        <Outlet />
        <Footer />
      </HelmetProviderContext>
    </>
  );
};

export default MainLayout;
