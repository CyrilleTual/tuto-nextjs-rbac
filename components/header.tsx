/* components/Header.tsx */

import { auth } from "@/auth";
import Link from "next/link";

export default async function Header() {
  const session = await auth();

  return (
    <header className="bg-gray-800 p-4">
      <nav>
        <ul className="flex space-x-4 justify-around">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/admin" className="text-white hover:text-gray-300">
              Admin
            </Link>
          </li>
          <li>
            <Link href="/user" className="text-white hover:text-gray-300">
              User
            </Link>
          </li>
          <li>
            <Link href="/guru" className="text-white hover:text-gray-300">
              Guru
            </Link>
          </li>
        </ul>
      </nav>
      <div className="bg-slate-600 text-slate-200 text-center p-4 mt-4 rounded-lg shadow-md">
        {!session?.user ? (
          <p>Vous n&apos;êtes pas authentifié</p>
        ) : (
          <>
            <p>
              Bienvenue, vous êtes connecté avec le compte {session.user.email}
            </p>
            <p>Vous avez un role de {session.user.role}</p> 
          </>
        )}
      </div>
    </header>
  );
}
