import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import RootElement from "./pages/RootElement";
import Beranda from "./pages/Beranda";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootElement />}>
        <Route index element={<Beranda />} />
        <Route path="about" element={<Tentang />} />
        <Route path="contact" element={<Kontak />} />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
