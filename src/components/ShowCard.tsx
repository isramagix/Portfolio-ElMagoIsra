interface ShowCardProps {
  title: string;
  description: string;
  image:
    | string
    | {
        mobile?: string;
        tablet?: string;
        desktop?: string;
      };
  buttonText?: string;
  onClick?: () => void;
}

export default function ShowCard({
  title,
  description,
  image,
  buttonText = "Ver más",
  onClick,
}: ShowCardProps) {
  // Normalizamos la imagen para evitar comprobaciones repetidas
  const img =
    typeof image === "string"
      ? { mobile: image, tablet: image, desktop: image }
      : {
          mobile: image.mobile || image.desktop || image.tablet,
          tablet: image.tablet || image.desktop || image.mobile,
          desktop: image.desktop || image.tablet || image.mobile,
        };

  return (
    <div
      className="
        group border border-gold rounded-xl p-0 
        bg-black/30 backdrop-blur-sm transition 
        flex flex-col lg:flex-row
        overflow-hidden
      "
    >
      {/* Imagen lateral */}
      <div className="lg:w-1/2 w-full h-40 lg:h-auto shrink-0 overflow-hidden rounded-t-xl lg:rounded-t-none lg:rounded-l-xl">
        <picture>
          {/* Desktop */}
          {img.desktop && (
            <source media="(min-width: 1024px)" srcSet={img.desktop} />
          )}

          {/* Tablet */}
          {img.tablet && (
            <source media="(min-width: 640px)" srcSet={img.tablet} />
          )}

          {/* Mobile */}
          <img
            src={img.mobile}
            alt={title}
            className="
              w-full h-full 
              object-contain md:object-cover object-center 
              bg-black opacity-80 group-hover:opacity-100 transition
            "
          />
        </picture>
      </div>

      {/* Contenido */}
      <div className="p-8 flex flex-col justify-center lg:w-1/2 w-full">
        <h2 className="text-2xl font-title text-gold mb-4 group-hover:scale-[1.02] transition">
          {title}
        </h2>

        <p className="text-text-secondary mb-6">{description}</p>

        <button
          onClick={onClick}
          className="
            text-gold border border-gold px-4 py-2 rounded-lg 
            transition hover:bg-gold hover:text-black
          "
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
