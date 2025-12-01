import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
      <h1 className="text-5xl font-bold mb-4 text-gold">404</h1>
      <h2 className="text-2xl mb-6">Página no encontrada</h2>
      <p className="mb-8 text-center max-w-md">
        La página que buscas no existe o ha sido movida. Vuelve al inicio para
        seguir disfrutando de la magia.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-gold text-black rounded font-semibold hover:bg-yellow-400 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
