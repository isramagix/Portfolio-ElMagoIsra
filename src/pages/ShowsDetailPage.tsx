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
    subtitle: "Un viaje profundo a la intuición humana.",
    banner: "/MADLMhor.png",
    details: {
      duration: "60 - 70 minutos",
      audience: "Adultos mayores de 16 años",
      style: "Mentalismo elegante y emocional",
      participation: "Alta",
    },
    highlights: [
      "Conexiones imposibles e intuitivas",
      "Revelaciones profundamente personales",
      "Participación activa del público",
      "Momentos únicos e irrepetibles",
    ],
    longDescription: `
Un viaje que combina intuición, emoción y misterio desde el primer instante.
Un espectáculo donde la mente humana se convierte en el escenario principal y cada pensamiento puede transformarse en un milagro.

A través de conexiones imposibles, coincidencias que desafían las
probabilidades y revelaciones profundamente personales, el público descubre 
que la frontera entre lo real y lo imposible es más fina de lo que imaginaba.

Los espectadores participan activamente, influyendo en decisiones,
creando resultados únicos e irrepetibles y siendo protagonistas de
experiencias que jamás habrían imaginado vivir.

Nada está preparado. Nada está escrito.  
Cada función es distinta, construida con las emociones, recuerdos y elecciones
de quienes la presencian.

Un espectáculo íntimo, elegante y profundamente humano que combina
psicología, percepción, intuición y arte dramático para crear una experiencia
que trasciende lo puramente mágico.

Un viaje emocional, sorprendente…  
y que permanecerá en la memoria mucho después de terminar.
`,
  },

  "logica-del-azar": {
    title: "La Lógica del Azar",
    subtitle: "Donde el caos encuentra su destino.",
    banner: "/LLDAhor.png",
    details: {
      duration: "60 - 70 minutos",
      audience: "Adultos mayores de 12 años",
      style: "Cartomagia moderna",
      participation: "Media-Alta",
    },
    highlights: [
      "Decisiones aparentemente aleatorias",
      "Coincidencias que desafían la lógica",
      "Humor y tensión en equilibrio",
      "Finales totalmente inesperados",
    ],
    longDescription: `
Un espectáculo donde lo imposible se esconde detrás de decisiones que parecen 
completamente aleatorias. Cartas elegidas libremente, números improvisados, 
elecciones que nadie podría prever… y, sin embargo, el destino parece tener 
un plan oculto.

Situaciones caóticas que terminan encajando con precisión quirúrgica.
Coincidencias tan perfectas que desafían cualquier idea de probabilidad.

El espectador cree decidirlo todo.  
El azar domina la escena.  
Pero, cuando todo parece imposible, la lógica aparece de forma inevitable.

Un show inteligente, divertido y participativo donde el humor, la tensión y 
las revelaciones finales se entrelazan para crear momentos únicos e 
irrepetibles.

Perfecto para quienes disfrutan de la cartomagia moderna, las paradojas 
matemáticas y las experiencias donde el público participa activamente en 
cada giro inesperado.

Una celebración del azar…  
y de lo sorprendente que puede ser cuando decide ponerse de tu lado.
`,
  },

  "magia-coctel": {
    title: "Magia de Cóctel",
    subtitle: "Elegancia y sorpresa a pocos centímetros.",
    banner: "/Coctailhor.png",
    details: {
      duration: "1–2 horas (formato libre)",
      audience: "Eventos sociales y celebraciones",
      style: "Magia de cerca",
      participation: "Muy alta",
    },
    highlights: [
      "Efectos visuales e imposibles",
      "Magia personalizada para cada grupo",
      "Ritmo dinámico y adaptable",
      "Ideal para bodas y eventos privados",
    ],
    longDescription: `
Magia cercana, directa y elegante que sucede a escasos centímetros de los 
ojos del público.  
Un formato dinámico, ideal para cócteles, bodas, eventos privados y 
celebraciones donde los invitados se mueven y socializan.

Cada pequeño grupo se convierte en el centro de un milagro:  
cartas que cambian en sus propias manos, objetos que se transforman,
predicciones imposibles, efectos visuales y rápidos que dejan una huella 
duradera.

Magia personalizada, flexible y diseñada para adaptarse al ritmo del evento,
permitiendo que cada invitado viva su propio momento mágico sin necesidad
de escenarios ni amplificación.

Una experiencia íntima, sofisticada y memorable que aporta elegancia,
diversión y sorpresa sin interrumpir la esencia del evento.  
Ideal para romper el hielo, generar conversación y crear recuerdos únicos.

La magia perfecta para convertir cualquier velada en algo especial.
`,
  },

  "magia-empresas": {
    title: "Magia para Empresas",
    subtitle: "Comunicar, inspirar y sorprender con propósito.",
    banner: "/MagEmpresashor.png",
    details: {
      duration: "20–60 minutos",
      audience: "Eventos corporativos",
      style: "Magia profesional y comunicativa",
      participation: "Alta",
    },
    highlights: [
      "Magia adaptada al mensaje de tu empresa",
      "Dinamismo y comunicación efectiva",
      "Ideal para presentaciones y cenas",
      "Show profesional y memorable",
    ],
    longDescription: `
Una propuesta diseñada especialmente para eventos corporativos, conferencias 
y presentaciones donde la magia se convierte en una herramienta poderosa de 
comunicación.

No es solo entretenimiento: es un mensaje.  
Un espectáculo que combina efectos visuales, dinámicas participativas y 
momentos de asombro con las ideas clave que la empresa desea transmitir.

Innovación, trabajo en equipo, liderazgo, creatividad o misión corporativa:
cada concepto puede integrarse de forma elegante y sorprendente dentro del 
show, reforzando los valores de la marca a través de experiencias 
memorables.

Ideal para cenas de empresa, lanzamientos de producto, ferias, congresos,
reuniones de equipo y eventos donde se busca un impacto más profundo y 
profesional.

Una fusión de magia, storytelling y comunicación que transforma cualquier 
mensaje en algo vivo, inspirador y difícil de olvidar.

Perfecto para empresas que quieren sorprender sin dejar de transmitir.
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
