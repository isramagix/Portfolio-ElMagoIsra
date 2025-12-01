export default function SobreMi() {
  return (
    <div className="min-h-screen pt-32 px-4 flex flex-col items-center">
      {/* Título */}
      <h1 className="text-4xl md:text-5xl font-title text-gold mb-8 text-center">
        Sobre mí
      </h1>

      {/* Contenido */}
      <div className="max-w-3xl text-text-secondary text-lg leading-relaxed space-y-6 text-center">
        <p>
          Soy Isra, mago y mentalista. Combino intuición, psicología, cartomagia
          moderna y momentos profundamente personales para crear experiencias
          que no solo sorprenden… sino que se sienten.
        </p>

        <p>
          Desde muy joven descubrí que la magia no es solo trucos: es una forma
          de comunicación, una herramienta para conectar con las personas y una
          manera única de transformar un instante cotidiano en un recuerdo
          imposible.
        </p>

        <p>
          Con los años he desarrollado un estilo propio:{" "}
          <span className="text-gold font-title">
            elegante, cercano, participativo e íntimo,
          </span>{" "}
          donde cada espectador tiene un papel importante y cada show se adapta
          al público y al lugar.
        </p>

        <p>
          He actuado en restaurantes, eventos privados, bodas, teatros, salas
          pequeñas y eventos corporativos, llevando mi magia a grupos reducidos
          o auditorios completos. Sea cual sea el formato, mi objetivo es
          siempre el mismo:{" "}
          <span className="text-gold">
            crear un momento único que solo existe una vez.
          </span>
        </p>

        <p>
          Mis espectáculos mezclan mentalismo emocional, cartomagia estructurada
          y magia de cerca potente, siempre con un enfoque respetuoso y natural.
          Me gusta que la magia se viva, no solo que se vea.
        </p>

        <p className="italic text-gold text-xl mt-6">
          “La magia no es lo que ocurre en mis manos, sino lo que despierta en
          las tuyas.”
        </p>

        <p>
          Si quieres saber más sobre mi trabajo o estás organizando un evento,
          estaré encantado de escucharte y crear algo especial para ti.
        </p>
      </div>

      {/* Aquí podrías añadir una foto tuya */}
      {/* <img src="/tu-foto.jpg" className="rounded-xl mt-12 border border-gold shadow-lg" /> */}
    </div>
  );
}
