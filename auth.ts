/* auth.ts */

import NextAuth, { type DefaultSession } from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./lib/connect"


// Ajoute le rôle de l'utilisateur à la session
declare module "next-auth" {
    interface Session {
        user: {
            role: string
        } & DefaultSession["user"]
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Google
    ],
    callbacks: {
        async session({ session }) {
            // Récupère l'utilisateur depuis la base de données pour obtenir son rôle
            const dbUser = await prisma.user.findUnique({
                where: { email: session.user.email },
            });
            session.user.role = dbUser?.role || "user"; // Définit le rôle à partir de la base de données si disponible
            return session;
        },
    }
})

