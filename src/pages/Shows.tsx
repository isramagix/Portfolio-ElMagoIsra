import ShowCard from "../components/ShowCard";
import { useEffect, useState } from "react";

export default function Shows() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const shows = [
    {
      title: "Más Allá de la Mente",
      slug: "mas-alla-de-la-mente",
      description:
        "Exploración profunda del mentalismo psicológico. Conexiones imposibles, predicciones exactas y una participación auténtica del público que cuestiona los límites de la mente humana.",
      image: {
        desktop: "/MADLM.png",
        tablet: "/MADLMhor.png",
        mobile: "/MADLMhor.png",
      },
    },
    {
      title: "Psicología de la Decisión",
      slug: "psicologia-decision",
      description:
        "¿Realmente elegimos libremente? Un mentalismo cognitivo que explora patrones de decisión y revela cómo nuestras elecciones son más predecibles de lo que imaginamos.",
      image: {
        desktop: "/LLDA.png",
        tablet: "/LLDAhor.png",
        mobile: "/LLDAhor.png",
      },
    },
    {
      title: "Mentalismo de Cerca",
      slug: "mentalismo-cercano",
      description:
        "Mentalismo íntimo y personalizado para eventos corporativos, sociales y celebraciones. Lectura de personalidades, influencia sutil y momentos únicos a pocos centímetros.",
      image: {
        desktop: "/Coctail.png",
        tablet: "/Coctailhor.png",
        mobile: "/Coctailhor.png",
      },
    },
    {
      title: "Mentalismo Corporativo",
      slug: "mentalismo-corporativo",
      description:
        "Mentalismo estratégico adaptado a eventos empresariales. Un espectáculo profesional que comunica valores, inspira reflexión y deja impacto duradero en tu audiencia.",
      image: {
        desktop: "/MagEmpresas.png",
        tablet: "/MagEmpresashor.png",
        mobile: "/MagEmpresashor.png",
      },
    },
  ];

  return (
    <div className="min-h-screen pt-32 px-4 max-w-7xl mx-auto pb-20">
      {/* Título con efectos */}
      <div
        className={`mb-20 transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1
          className="text-6xl md:text-7xl font-title text-center mb-2"
          style={{
            background: "linear-gradient(135deg, #f3f3f3, #d4a74e, #f3f3f3)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ACTUACIONES
        </h1>
        <p className="text-center text-gold-light text-xl mt-2">
          Experiencias de mentalismo que desafían la realidad
        </p>
        <div className="flex justify-center mt-6">
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-gold to-transparent"></div>
        </div>
      </div>

      {/* Grid de cards con animaciones escalonadas */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {shows.map((show, i) => (
          <div
            key={i}
            className={`transition-all duration-700 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
            style={{
              transitionDelay: `${i * 150}ms`,
            }}
          >
            <ShowCard
              image={show.image}
              title={show.title}
              description={show.description}
              to={`/shows/${show.slug}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
