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

  "psicologia-decision": {
    title: "Psicología de la Decisión",
    subtitle: "Cuando crees elegir libremente, pero la mente ya ha decidido.",
    banner: "/LLDAhor.png",
    details: {
      duration: "60 - 70 minutos",
      audience: "Adultos mayores de 14 años",
      style: "Mentalismo cognitivo",
      participation: "Media-Alta - Decisiones libres analizadas",
    },
    highlights: [
      "Análisis de patrones de decisión",
      "Predicción de elecciones 'libres'",
      "Paradojas del pensamiento",
      "Revelaciones sorprendentes",
    ],
    longDescription: `
¿Realmente elegimos libremente?  
¿O nuestras decisiones siguen patrones predecibles que podemos anticipar?

Este espectáculo explora fascinantemente cómo funciona realmente la toma de decisiones humana.
A través de elecciones que parecen completamente aleatorias, números improvisados y decisiones espontáneas, se revela un patrón persistente: la mente humana es más predecible de lo que imaginamos.

Lo que parece caótico contiene estructura.
Lo que parece libre sigue caminos establecidos.
Lo que parece azaroso se puede anticipar.

Un espectáculo inteligente, sorprendente e interactivo que combina psicología cognitiva con momentos de asombro genuino, donde cada revelación genera reflexión profunda.

Perfecto para auditorios que disfrutan de la exploración intelectual, la psicología y aquellos que desean comprender mejor cómo funciona su propia mente.

Una celebración del pensamiento… y de sus patrones fascinantes.
`,
  },

  "mentalismo-cercano": {
    title: "Mentalismo de Cerca",
    subtitle: "Influencia mental en cada interacción.",
    banner: "/Coctailhor.png",
    details: {
      duration: "1–2 horas (formato libre)",
      audience: "Eventos sociales y celebraciones",
      style: "Mentalismo interactivo",
      participation: "Muy alta - Uno a uno",
    },
    highlights: [
      "Lectura inmediata de personalidades",
      "Influencia psicológica sutil",
      "Mentalismo personalizado por grupo",
      "Perfecto para eventos informales",
    ],
    longDescription: `
Mentalismo cercano, directo e inmediato que sucede a pocos centímetros de los ojos del público.
Un formato flexible e íntimo, ideal para cócteles, reuniones, eventos privados y celebraciones donde las personas se mueven y interactúan naturalmente.

A través de la lectura aguda del lenguaje corporal, la microexpresión y patrones psicológicos, cada pequeño grupo vive momentos de mentalismo personalizado.

Predicciones imposibles basadas en análisis real.
Inspiración de pensamientos que parecen espontáneos.
Revelaciones personales que generan asombro genuino.

Mentalismo adaptado, íntimo y sofisticado que aporta un elemento de misterio y entretenimiento sin necesidad de amplificación ni dispositivos.

Create un ambiente de intriga, genera conversación y deja a cada participante con una anécdota única que llevará a casa.

El mentalismo perfecto para eventos donde la elegancia y la sutileza son valoradas.
`,
  },

  "mentalismo-corporativo": {
    title: "Mentalismo Corporativo",
    subtitle: "Inspiración, reflexión e impacto estratégico.",
    banner: "/MagEmpresashor.png",
    details: {
      duration: "20–60 minutos",
      audience: "Eventos corporativos y conferencias",
      style: "Mentalismo con propósito estratégico",
      participation: "Alta - Participación planificada",
    },
    highlights: [
      "Mentalismo adaptado al mensaje corporativo",
      "Dinámicas que refuerzan objetivos empresariales",
      "Memorable e impactante",
      "Profesional y estratégico",
    ],
    longDescription: `
Mentalismo diseñado específicamente para eventos corporativos, conferencias, cenas de empresa y presentaciones donde la capacidad mental se convierte en herramienta de comunicación estratégica.

No es entretenimiento aislado: es un mensaje vivo.
Un espectáculo que integra técnicas de influencia mental, análisis psicológico y momentos de asombro genuino con los objetivos clave que la organización desea transmitir.

Liderazgo inspirador.
Creatividad sin límites.
Toma de decisiones estratégica.
Unidad de equipo.
Potencial humano.

Cada concepto se puede explorar a través de dinámicas mentalistas que refuerzan el aprendizaje y generan reflexión profunda.

Ideal para lanzamientos de estrategia, reuniones de leadership, congresos, ferias empresariales y eventos donde se busca impacto duradero más allá del entretenimiento tradicional.

Una fusión de mentalismo, psicología y comunicación que transforma mensajes corporativos en experiencias memorables que los equipos llevarán consigo.

Perfecto para empresas que buscan sorprender, inspiran y comunicar con autenticidad.
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
