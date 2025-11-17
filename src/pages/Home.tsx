import bg from "../assets/fondo2.png";
export default function Home() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0"></div>

      {/* Contenido */}
      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-title mb-4">El Mago Isra</h1>

        <p className="text-lg md:text-xl text-gold-light mb-6">
          Mago y mentalista
        </p>

        <p className="text-xl md:text-2xl text-text-secondary italic max-w-2xl">
          “Lo imposible… más cerca de lo que imaginas.”
        </p>
      </div>
    </section>
  );
}
