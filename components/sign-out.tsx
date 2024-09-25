/* components/sign-out.tsx */

"use client";

import { signOut } from "next-auth/react";
export function SignOut() {
  const handleSignOut = async () => {
    signOut();
    // Appeler l'API pour invalider les chemins
    await fetch("/api/revalidate", {
      method: "POST",
    });
  };

  return (
    <button
      onClick={() => {
        handleSignOut();
      }}
      type="submit"
      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
    >
      Sign out
    </button>
  );
}
