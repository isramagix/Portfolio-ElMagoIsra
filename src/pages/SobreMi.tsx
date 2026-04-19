import { useEffect, useState } from "react";

export default function SobreMi() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const highlights = [
    { icon: "🎭", text: "Mentalismo Psicológico" },
    { icon: "🧠", text: "Análisis Cognitivo" },
    { icon: "✨", text: "Experiencias Únicas" },
    { icon: "🎯", text: "Impacto Duradero" },
  ];

  return (
    <div className="min-h-screen pt-32 px-4 pb-20">
      {/* Fondo decorativo */}
      <div className="fixed inset-0 -z-1 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gold/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Encabezado con efecto */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1
            className="text-7xl md:text-8xl font-title font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #d4a74e, #f5c96b, #d4a74e)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            SOBRE MÍ
          </h1>
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="h-0.5 w-20 bg-linear-to-r from-transparent to-gold"></div>
            <p className="text-gold-light text-xl font-light">
              Isra, Mentalista Profesional
            </p>
            <div className="h-0.5 w-20 bg-linear-to-l from-transparent to-gold"></div>
          </div>
        </div>

        {/* Grid de highlights */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 transition-all duration-700 delay-200 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {highlights.map((h, i) => (
            <div
              key={i}
              className="glass glass-gold rounded-xl p-6 text-center group hover:scale-105 transition-transform card-hover"
              style={{
                transitionDelay: `${i * 100}ms`,
              }}
            >
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">
                {h.icon}
              </div>
              <p className="text-gold-light text-sm font-semibold">{h.text}</p>
            </div>
          ))}
        </div>

        {/* Contenido principal */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="glass glass-gold rounded-2xl p-12 md:p-16 space-y-8">
            {/* Párrafo principal */}
            <div className="border-l-4 border-gold pl-6">
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                Soy Isra,{" "}
                <span className="text-gold font-bold">mentalista</span>. Combino
                intuición, psicología, y momentos profundamente personales para
                crear experiencias que no solo sorprenden… sino que{" "}
                <span className="text-gold-light">se sienten</span>.
              </p>
            </div>

            {/* Párrafo con columnas en desktop */}
            <div className="md:columns-2 gap-8 text-text-secondary leading-relaxed">
              <p className="text-lg mb-6">
                Desde muy joven descubrí que la magia no es solo trucos: es una
                forma de comunicación, una herramienta para conectar con las
                personas y una manera única de transformar un instante cotidiano
                en un recuerdo imposible.
              </p>

              <p className="text-lg">
                Con los años he desarrollado un estilo propio:{" "}
                <span className="text-gold font-bold">
                  elegante, cercano, participativo e íntimo,
                </span>{" "}
                donde cada espectador tiene un papel importante y cada show se
                adapta al público y al lugar.
              </p>
            </div>

            {/* Sección de experiencia */}
            <div className="bg-black/40 rounded-xl p-8 my-8 border border-gold/20">
              <h3 className="text-2xl font-title text-gold mb-6 flex items-center gap-3">
                <span className="text-3xl">🎪</span> MI EXPERIENCIA
              </h3>
              <div className="space-y-4 text-text-secondary">
                <p>
                  He actuado en eventos privados, bodas, salas pequeñas y
                  eventos corporativos. Sea cual sea el formato, mi objetivo es
                  siempre el mismo:{" "}
                  <span className="text-gold">
                    crear un momento único que solo existe una vez.
                  </span>
                </p>
                <p>
                  Mis espectáculos mezclan mentalismo emocional y magia de cerca
                  potente, siempre con un enfoque respetuoso y natural. Me gusta
                  que la magia se viva, no solo que se vea.
                </p>
              </div>
            </div>

            {/* Frase destacada */}
            <div className="text-center py-8 border-y border-gold/30">
              <p
                className="text-3xl md:text-4xl font-title text-gold italic leading-relaxed"
                style={{
                  textShadow: "0 0 20px rgba(212, 167, 78, 0.3)",
                }}
              >
                "La magia no es lo que ocurre en mis manos, sino lo que
                despierta en tu mente."
              </p>
            </div>

            {/* CTA final */}
            <div className="text-center pt-8">
              <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
                Si quieres saber más sobre mi trabajo o estás organizando un
                evento, estaré encantado de escucharte y crear algo especial
                para ti.
              </p>
              <a
                href="/contacto"
                className="inline-block group px-8 py-4 bg-gold text-black font-bold rounded-lg hover:bg-gold-light transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/30"
              >
                Contacta Conmigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
