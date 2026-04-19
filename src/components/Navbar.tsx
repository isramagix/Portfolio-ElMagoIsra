import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-gold/30 shadow-lg shadow-black/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* LOGO / TITLE con glow */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-title text-gold font-bold hover:text-gold-light transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
          style={{ textShadow: "0 0 15px rgba(212, 167, 78, 0.4)" }}
        >
          ISRA
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-lg">
          <Link
            to="/"
            className="text-text-primary relative group hover:text-gold transition-colors duration-300"
          >
            Inicio
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-gold to-transparent group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link
            to="/shows"
            className="text-text-primary relative group hover:text-gold transition-colors duration-300"
          >
            Actuaciones
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-gold to-transparent group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link
            to="/galeria"
            className="text-text-primary relative group hover:text-gold transition-colors duration-300"
          >
            Galería
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-gold to-transparent group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link
            to="/sobre-mi"
            className="text-text-primary relative group hover:text-gold transition-colors duration-300"
          >
            Sobre mí
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-gold to-transparent group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link
            to="/eventos"
            className="text-text-primary relative group hover:text-gold transition-colors duration-300"
          >
            Próximos eventos
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-gold to-transparent group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link
            to="/contacto"
            className="text-text-primary relative group hover:text-gold transition-colors duration-300"
          >
            Contacto
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-gold to-transparent group-hover:w-full transition-all duration-300"></div>
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button
          className="md:hidden text-gold text-3xl hover:scale-125 transition-transform duration-300"
          onClick={toggleMenu}
        >
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
          border-t border-gold/30
          text-center flex flex-col gap-6
          bg-linear-to-b from-black/60 to-black/40
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
          Actuaciones
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
