export default function Galeria() {
  return (
    <div className="min-h-screen pt-32 px-4 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-title text-gold mb-6">Galería</h1>
      <p className="text-lg text-center text-text-secondary mb-10">
        Próximamente podrás ver fotos y vídeos de espectáculos, eventos y
        momentos mágicos.
      </p>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Aquí irán las imágenes */}
      </div>
    </div>
  );
}
