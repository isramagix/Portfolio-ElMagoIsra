import { useEffect, useState } from "react";

export default function Eventos() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const eventos = [
    {
      id: 1,
      title: "Más Allá de la Mente",
      date: "15 de Mayo",
      time: "20:30h",
      location: "Teatro Principal - Madrid",
      image: "/MADLM.png",
      ticketsAvailable: true,
      ticketLink: "https://entradas.ejemplo.com",
      description:
        "Una noche de mentalismo puro donde desafiaremos los límites de la mente humana.",
    },
    {
      id: 2,
      title: "Psicología de la Decisión",
      date: "22 de Mayo",
      time: "21:00h",
      location: "Auditorio Coliseum - Barcelona",
      image: "/LLDA.png",
      ticketsAvailable: true,
      ticketLink: "https://entradas.ejemplo.com",
      description:
        "Descubre cómo tus decisiones son más predecibles de lo que crees.",
    },
    {
      id: 3,
      title: "Mentalismo de Cerca - Cóctel",
      date: "10 de Junio",
      time: "19:00h",
      location: "Club Privado - Valencia",
      image: "/Coctail.png",
      ticketsAvailable: false,
      ticketLink: null,
      description:
        "Evento privado con acceso limitado. Contacta para disponibilidad.",
    },
  ];

  return (
    <section className="min-h-screen bg-dark-base pt-24 pb-20 px-4">
      {/* Background blobs */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-gold/3 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              background: "linear-gradient(135deg, #f3f3f3, #d4a74e, #f3f3f3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 30px rgba(212, 167, 78, 0.3)",
            }}
          >
            PRÓXIMOS EVENTOS
          </h1>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-gold to-transparent mx-auto mb-6"></div>
          <p className="text-gold-light text-lg">Mentalismo en vivo</p>
        </div>

        {/* Grid de eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventos.map((evento, i) => (
            <div
              key={evento.id}
              className={`transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <div className="group glass glass-gold rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-gold/30 transition-all duration-300">
                {/* Imagen */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={evento.image}
                    alt={evento.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Etiqueta de disponibilidad */}
                  <div className="absolute top-4 right-4">
                    {evento.ticketsAvailable ? (
                      <span className="inline-block px-4 py-2 bg-gold text-black text-sm font-bold rounded-full">
                        ✓ Entradas disponibles
                      </span>
                    ) : (
                      <span className="inline-block px-4 py-2 bg-gold/20 text-gold text-sm font-bold rounded-full border border-gold/50">
                        Evento privado
                      </span>
                    )}
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8">
                  {/* Título */}
                  <h2 className="text-3xl font-bold text-gold mb-4">
                    {evento.title}
                  </h2>

                  {/* Descripción */}
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {evento.description}
                  </p>

                  {/* Detalles */}
                  <div className="space-y-3 mb-8 pb-8 border-b border-gold/20">
                    <div className="flex items-center gap-3">
                      <span className="text-gold text-xl">📅</span>
                      <div>
                        <p className="text-text-secondary text-sm">Fecha</p>
                        <p className="text-text-primary font-semibold">
                          {evento.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-gold text-xl">⏰</span>
                      <div>
                        <p className="text-text-secondary text-sm">Hora</p>
                        <p className="text-text-primary font-semibold">
                          {evento.time}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-gold text-xl">📍</span>
                      <div>
                        <p className="text-text-secondary text-sm">Ubicación</p>
                        <p className="text-text-primary font-semibold">
                          {evento.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Botón CTA */}
                  {evento.ticketsAvailable ? (
                    <a
                      href={evento.ticketLink as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-block px-6 py-3 bg-gold text-black font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 hover:scale-105 transition-all duration-300 text-center"
                    >
                      Comprar Entradas →
                    </a>
                  ) : (
                    <a
                      href="/contacto"
                      className="w-full inline-block px-6 py-3 border-2 border-gold text-gold font-bold rounded-lg hover:bg-gold hover:text-black transition-all duration-300 text-center"
                    >
                      Consultar Disponibilidad
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sección vacía si no hay más eventos */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-text-secondary text-lg mb-8">
            ¿No ves tu evento favorito? Contacta para solicitudes especiales
          </p>
          <a
            href="/contacto"
            className="inline-block px-8 py-4 bg-gold text-black font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 hover:scale-105 transition-all duration-300"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}
