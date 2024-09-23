

import Link from "next/link";

const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-11 p-5 bg-red-100 text-red-700">
      <h1 className="text-4xl font-bold mb-4">Accès non autorisé</h1>
      <p className="text-lg mb-6">
        Désolé, vous n&apos;avez pas la permission d&apos;accéder à cette page.
      </p>
      <Link
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        href="/"
      >
        Home
      </Link>
    </div>
  );
};

export default Unauthorized;
