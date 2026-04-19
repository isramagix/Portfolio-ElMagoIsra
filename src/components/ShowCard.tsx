import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface ShowCardProps {
  title: string;
  description: string;
  image:
    | string
    | {
        mobile?: string;
        tablet?: string;
        desktop?: string;
      };
  to?: string;
  buttonText?: string;
}

export default function ShowCard({
  title,
  description,
  image,
  to = "/",
  buttonText = "Ver más",
}: ShowCardProps) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const img =
    typeof image === "string"
      ? { mobile: image, tablet: image, desktop: image }
      : {
          mobile: image.mobile || image.desktop || image.tablet,
          tablet: image.tablet || image.desktop || image.mobile,
          desktop: image.desktop || image.tablet || image.mobile,
        };

  return (
    <div
      className="group relative h-80 md:h-96 overflow-hidden rounded-2xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(to)}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <picture>
          {img.desktop && (
            <source media="(min-width: 1024px)" srcSet={img.desktop} />
          )}
          {img.tablet && (
            <source media="(min-width: 640px)" srcSet={img.tablet} />
          )}
          <img
            src={img.mobile}
            alt={title}
            loading="lazy"
            role="img"
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        </picture>
      </div>

      {/* Overlay oscuro con gradiente */}
      <div
        className={`absolute inset-0 bg-linear-to-t from-black/95 via-black/50 to-black/20 transition-all duration-500 ${
          isHovered ? "from-gold/10" : ""
        }`}
      ></div>

      {/* Efecto de brillo en los bordes */}
      <div
        className={`absolute inset-0 border-2 border-gold rounded-2xl transition-all duration-300 opacity-0 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          boxShadow: isHovered
            ? `0 0 30px rgba(212, 167, 78, 0.4), inset 0 0 30px rgba(212, 167, 78, 0.1)`
            : "none",
        }}
      ></div>

      {/* Contenido */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        {/* Línea decorativa superior */}
        <div
          className={`mb-6 h-0.5 bg-linear-to-r from-gold via-gold-light to-transparent transition-all duration-500 transform ${
            isHovered ? "w-16" : "w-8"
          }`}
        ></div>

        {/* Título */}
        <h2
          className={`text-4xl md:text-5xl font-title font-bold mb-4 transition-all duration-300 ${
            isHovered ? "translate-y-0 text-gold" : "text-white"
          }`}
        >
          {title}
        </h2>

        {/* Descripción con efecto de aparición */}
        <div
          className={`mb-6 overflow-hidden transition-all duration-500 ${
            isHovered ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gold-light text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Botón con efecto */}
        <button
          className={`group/btn relative px-6 py-3 w-fit overflow-hidden rounded-lg transition-all duration-300 transform ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            navigate(to);
          }}
        >
          {/* Fondo animado */}
          <div className="absolute inset-0 bg-gold transition-all duration-300"></div>
          <div className="absolute inset-0 bg-linear-to-r from-gold via-gold-light to-gold opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

          {/* Texto */}
          <span className="relative text-black font-semibold flex items-center gap-2 group-hover/btn:gap-3 transition-all">
            {buttonText}
            <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
              →
            </span>
          </span>
        </button>

        {/* Números decorativos */}
        <div
          className={`absolute top-6 right-6 text-gold text-9xl font-title opacity-10 transition-all duration-500 ${
            isHovered ? "opacity-20 scale-110" : "scale-100"
          }`}
        >
          {String(1).padStart(2, "0")}
        </div>
      </div>

      {/* Efecto de brillo al pasar el mouse */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(212, 167, 78, 0.1), transparent)",
        }}
      ></div>
    </div>
  );
}
