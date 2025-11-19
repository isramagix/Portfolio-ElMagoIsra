import ShowCard from "../components/ShowCard";

export default function Shows() {
  const shows = [
    {
      title: "Más Allá de la Mente",
      slug: "mas-alla-de-la-mente",
      description:
        "Un espectáculo de mentalismo íntimo, elegante y sorprendente. Predicciones imposibles, conexiones emocionales y experiencias que desafían la lógica.",
      image: {
        desktop: "/MADLM.png",
        tablet: "/MADLMhor.png",
        mobile: "/MADLMhor.png",
      },
    },
    {
      title: "La Lógica del Azar",
      slug: "logica-del-azar",
      description:
        "Magia con cartas y situaciones imposibles donde el azar se vuelve un aliado. Una experiencia divertida, inteligente y participativa.",
      image: {
        desktop: "/LLDA.png",
        tablet: "/LLDAhor.png",
        mobile: "/LLDAhor.png",
      },
    },
    {
      title: "Magia de Cóctel",
      slug: "magia-coctel",
      description:
        "Magia cercana para restaurantes, bodas y eventos privados. Efectos directos, rápidos y visuales mientras los invitados disfrutan de su velada.",
      image: {
        desktop: "/Coctail.png",
        tablet: "/Coctailhor.png",
        mobile: "/Coctailhor.png",
      },
    },
    {
      title: "Magia para Empresas",
      slug: "magia-empresas",
      description:
        "Shows personalizados para eventos corporativos. Presentaciones, dinámicas de equipo y efectos adaptados al mensaje de tu empresa.",
      image: {
        desktop: "/MagEmpresas.png",
        tablet: "/MagEmpresashor.png",
        mobile: "/MagEmpresashor.png",
      },
    },
  ];

  return (
    <div className="min-h-screen pt-32 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-title text-gold mb-12 text-center">
        Espectáculos
      </h1>

      <div className="grid gap-10 md:grid-cols-2">
        {shows.map((show, i) => (
          <ShowCard
            key={i}
            image={show.image}
            title={show.title}
            description={show.description}
            to={`/shows/${show.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
