import { useParams } from "react-router-dom";
import { ShowDetail } from "../components/ShowDetail";

interface Show {
  title: string;
  longDescription: string;
  banner: string;
}

interface Show {
  title: string;
  subtitle: string;
  longDescription: string;
  banner: string;
  details: {
    duration: string;
    audience: string;
    style: string;
    participation: string;
  };
  highlights: string[];
}

const showsData: Record<string, Show> = {
  "mas-alla-de-la-mente": {
    title: "Más Allá de la Mente",
    subtitle: "Exploración profunda del potencial mental humano.",
    banner: "/MADLMhor.png",
    details: {
      duration: "60 - 70 minutos",
      audience: "Adultos mayores de 16 años",
      style: "Mentalismo psicológico y emocional",
      participation: "Alta - Completamente participativo",
    },
    highlights: [
      "Influencia mental y lectura psicológica",
      "Predicciones basadas en análisis cognitivo",
      "Participación auténtica del público",
      "Revelaciones profundas y personales",
    ],
    longDescription: `
Un viaje que explora los límites invisibles del potencial mental humano.
Un espectáculo donde la psicología, la percepción y la intuición se entrelazan para crear experiencias que desafían lo que creemos posible.

A través de técnicas de lectura profunda de lenguaje corporal, patrones de pensamiento y dinámicas psicológicas, los espectadores experimentan predicciones exactas y conexiones que parecen imposibles.

Los participantes activos son protagonistas, no meros observadores.
Sus decisiones, sus pensamientos, sus recuerdos se convierten en la materia del espectáculo.

Cada función es única porque cada público es distinto.
No hay guiones: hay comprensión profunda y adaptación constante.

Un espectáculo sofisticado que combina investigación psicológica contemporánea con técnicas clásicas de mentalismo, creando una experiencia que permanece en la memoria y despierta reflexiones duraderas.

Una invitación a cuestionar los límites de lo que la mente puede hacer…
cuando se le permite explorar sin restricciones.
`,
  },

  mentalissimo: {
    title: "Mentalissimo",
    subtitle: "Un viaje a través del azar, el destino y lo imposible.",
    banner: "/mentalissimo-placeholder.png",
    details: {
      duration: "60 minutos",
      audience: "Todos los públicos",
      style: "Mentalismo experiencial",
      participation: "Alta - Participación continua",
    },
    highlights: [
      "Predicciones exactas y adivinaciones",
      "Teletransportaciones de objetos",
      "Exploración del azar y el destino",
      "Experiencia inmersiva y sorprendente",
    ],
    longDescription: `
Una experiencia de mentalismo para todos los públicos donde cuestionamos el azar, el destino y los límites de la realidad.

Durante una hora, nos embarcaremos en un viaje donde cada momento desafía lo que creemos posible.
Predicciones que se cumplen de formas imposibles.
Adivinaciones que revelan secretos guardados.
Teletransportaciones de objetos que desafían las leyes físicas.

¿Es todo aleatorio? ¿O existe un patrón invisible que podemos manipular?
¿Es el destino fijo o podemos cambiar el curso de los eventos?

Mentalissimo explora estas preguntas a través de momentos de asombro genuino, interactividad continua y revelaciones que permanecen en la mente mucho después del espectáculo.

Un show emocionante, sorprendente e inspirador que desafía la percepción de la realidad y nos invita a cuestionar todo aquello que damos por sentado.

Perfecto para quienes disfrutan del misterio, la magia y desean vivir una experiencia que realmente los sorprenda.

Bienvenido a Mentalissimo: donde todo es posible.
`,
  },
};

export const ShowsDetailPage = () => {
  const { slug } = useParams();
  const show = showsData[slug as string];

  if (!show) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gold">
        Show no encontrado.
      </div>
    );
  }

  return (
    <ShowDetail
      title={show.title}
      subtitle={show.subtitle}
      longDescription={show.longDescription}
      banner={show.banner}
      details={show.details}
      highlights={show.highlights}
    />
  );
};
