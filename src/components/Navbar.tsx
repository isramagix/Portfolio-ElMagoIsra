import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* LOGO / TITLE */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-title text-gold"
        >
          El Mago Isra
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-lg">
          <Link to="/" className="hover:text-gold transition">
            Inicio
          </Link>
          <Link to="/shows" className="hover:text-gold transition">
            Espectáculos
          </Link>
          <Link to="/galeria" className="hover:text-gold transition">
            Galería
          </Link>
          <Link to="/sobre-mi" className="hover:text-gold transition">
            Sobre mí
          </Link>
          <Link to="/contacto" className="hover:text-gold transition">
            Contacto
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button className="md:hidden text-gold text-3xl" onClick={toggleMenu}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden
          transition-all duration-300
          overflow-hidden
          ${open ? "max-h-96 py-6" : "max-h-0"} 
        border-t border-white/10
          text-center flex flex-col gap-6
        `}
      >
        <Link
          onClick={closeMenu}
          to="/"
          className="hover:text-gold transition text-lg"
        >
          Inicio
        </Link>
        <Link
          onClick={closeMenu}
          to="/shows"
          className="hover:text-gold transition text-lg"
        >
          Espectáculos
        </Link>
        <Link
          onClick={closeMenu}
          to="/galeria"
          className="hover:text-gold transition text-lg"
        >
          Galería
        </Link>
        <Link
          onClick={closeMenu}
          to="/sobre-mi"
          className="hover:text-gold transition text-lg"
        >
          Sobre mí
        </Link>
        <Link
          onClick={closeMenu}
          to="/contacto"
          className="hover:text-gold transition text-lg"
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}
