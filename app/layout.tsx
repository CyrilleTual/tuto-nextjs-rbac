import Header from "@/components/header";
import "./globals.css";
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="h-screen flex flex-col" >
        <Header />
        <div className="flex items-center justify-center flex-grow">
           {children}
        </div>
      </body>
    </html>
  );
}
