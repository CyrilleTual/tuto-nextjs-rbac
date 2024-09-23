"use client";
import { useRouter } from "next/navigation"; 

const Unauthorized = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Revenir à la page précédente
  };

  return (
    <div className="flex flex-col items-center justify-center mx-11 p-5 bg-red-100 text-red-700">
      <h1 className="text-4xl font-bold mb-4">Accès non autorisé</h1>
      <p className="text-lg mb-6">
        Désolé, vous n'avez pas la permission d'accéder à cette page.
      </p>
      <button
        onClick={handleGoBack}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Retourner à la page précédente
      </button>
    </div>
  );
};

export default Unauthorized;
