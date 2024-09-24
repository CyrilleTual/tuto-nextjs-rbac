/* app/layout.tsx */

import Header from "@/components/header";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <SessionProvider>
        <body className="h-screen flex flex-col">
          <Header />
          <div className="flex items-center justify-center flex-grow">
            {children}
          </div>
        </body>
      </SessionProvider>
    </html>
  );
}
