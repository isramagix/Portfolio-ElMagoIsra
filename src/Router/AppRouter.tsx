import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shows from "../pages/Shows";
import { ShowsDetailPage } from "../pages/ShowsDetailPage";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Galeria from "../pages/Galeria";
import SobreMi from "../pages/SobreMi";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shows" element={<Shows />} />
      <Route path="/shows/:slug" element={<ShowsDetailPage />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/sobre-mi" element={<SobreMi />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
