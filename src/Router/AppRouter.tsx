import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Shows from "../pages/Shows";
import { ShowsDetailPage } from "../pages/ShowsDetailPage";
import Contact from "../pages/Contact";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shows" element={<Shows />} />
      <Route path="/shows/:slug" element={<ShowsDetailPage />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
  );
}
