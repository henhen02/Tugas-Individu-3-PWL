import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../provider/themeProvider";

const RootElement = () => {
  return (
    <ThemeProvider>
      <NavBar />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default RootElement;
