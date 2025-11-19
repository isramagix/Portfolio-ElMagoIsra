import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface ShowDetailProps {
  title: string;
  subtitle: string;
  longDescription: string;
  banner?: string;
  highlights: string[];
  details: {
    duration: string;
    audience: string;
    style: string;
    participation: string;
  };
}

export const ShowDetail = ({
  title,
  subtitle,
  longDescription,
  banner,
  highlights,
  details,
}: ShowDetailProps) => {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 50);
  }, []);

  return (
    <div
      className={`min-h-screen pt-32 px-4 max-w-3xl mx-auto transition-opacity duration-700 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Imagen principal */}
      {banner && (
        <div className="w-full flex justify-center mb-10">
          <img
            src={banner}
            alt={title}
            className="
              w-full max-w-lg 
              rounded-xl border border-gold shadow-lg shadow-black/40
              object-contain
              opacity-90 hover:opacity-100 transition
            "
          />
        </div>
      )}

      {/* Título */}
      <h1
        className="
          text-4xl md:text-5xl font-title text-gold text-center mb-3
          tracking-wide drop-shadow-[0_0_10px_rgba(255,215,0,0.15)]
          animate-fadeUp
        "
      >
        {title}
      </h1>

      {/* Subtítulo */}
      <p className="text-center text-text-secondary italic text-xl mb-8 animate-fadeUp delay-200">
        {subtitle}
      </p>

      {/* Separador */}
      <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10" />

      {/* Detalles clave */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 gap-6 
          bg-black/30 border border-white/10 rounded-xl p-6 mb-10
          backdrop-blur
        "
      >
        <DetailItem label="Duración" value={details.duration} />
        <DetailItem label="Público" value={details.audience} />
        <DetailItem label="Estilo" value={details.style} />
        <DetailItem label="Participación" value={details.participation} />
      </div>

      {/* Highlights */}
      <div className="mb-10">
        <h2 className="text-2xl font-title text-gold mb-4">Lo que vivirás</h2>

        <ul className="space-y-3">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-text-secondary">
              <span className="text-gold text-xl mt-[2px]">•</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Descripción larga */}
      <p
        className="
          text-text-secondary text-lg md:text-xl leading-relaxed whitespace-pre-line
          animate-fadeUp delay-200
        "
      >
        {longDescription}
      </p>

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => navigate("/contacto")}
          className="
            text-gold border border-gold px-8 py-3 rounded-lg 
            hover:bg-gold hover:text-black transition-all duration-300
            hover:scale-105 active:scale-95 shadow-lg shadow-black/30
            text-lg
          "
        >
          Solicitar información
        </button>
      </div>

      {/* Botón volver */}
      <div className="flex justify-center mt-6 pb-10">
        <button
          onClick={() => navigate(-1)}
          className="
            text-text-secondary underline hover:text-gold transition
          "
        >
          Volver atrás
        </button>
      </div>
    </div>
  );
};

/* Componente para cada detalle */
const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-gold font-title text-lg">{label}</p>
    <p className="text-text-secondary">{value}</p>
  </div>
);
