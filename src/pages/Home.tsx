import bg from "../assets/fondo2.png";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay con gradiente más dramático */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-black/80"></div>

      {/* Efecto de luz superior */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute top-20 right-20 w-60 h-60 bg-gold/3 rounded-full blur-3xl opacity-30"></div>

      {/* Contenido */}
      <div
        className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        {/* Título principal con glow */}
        <div className="mb-8">
          <h1
            className={`text-7xl md:text-8xl font-title font-bold mb-4 transition-all duration-1000 ${
              isLoaded ? "animate-glow" : ""
            }`}
            style={{
              textShadow:
                "0 0 40px rgba(212, 167, 78, 0.5), 0 0 80px rgba(212, 167, 78, 0.2)",
            }}
          >
            ISRA
          </h1>
          <div className="h-1 w-32 bg-linear-to-r from-transparent via-gold to-transparent mx-auto mb-8 animate-pulse"></div>
        </div>

        {/* Subtítulo */}
        <p
          className={`text-3xl md:text-4xl text-gold-light mb-8 font-light tracking-widest transition-all duration-700 delay-300 ${
            isLoaded ? "animate-slide-in-right" : "opacity-0"
          }`}
        >
          MENTALISTA
        </p>

        {/* Descripción corta con efecto */}
        <p
          className={`text-2xl md:text-3xl text-gold italic max-w-3xl mx-auto mb-12 font-light transition-all duration-700 delay-500 ${
            isLoaded ? "animate-slide-in-left" : "opacity-0"
          }`}
          style={{
            textShadow: "0 2px 20px rgba(212, 167, 78, 0.3)",
          }}
        >
          "La mente es el escenario más misterioso que existe."
        </p>

        {/* Botón CTA impactante */}
        <div
          className={`flex justify-center gap-6 transition-all duration-700 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="/shows"
            className="group relative px-10 py-4 text-lg font-semibold rounded-lg overflow-hidden bg-gold text-black hover:shadow-lg hover:shadow-gold/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Descubrí más
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-10 py-4 text-lg font-semibold border-2 border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 hover:scale-105 rounded-lg"
          >
            Contáctame
          </button>
        </div>
      </div>
    </section>
  );
}
