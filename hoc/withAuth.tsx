/* hoc/withAuth.tsx */
"use client";

import { useSession } from "next-auth/react"; 
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (Component: React.FC, allowedRoles: string[]) => {
  const AuthenticatedComponent: React.FC<React.ComponentProps<typeof Component>> = (props) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "loading") return; // Do nothing while loading
      if (!session) {
        router.push("/unauthorized");
      } else if (!allowedRoles.includes(session.user.role)) {
       router.push("/unauthorized");
      }
    }, [session, status, router]);

    if (status === "loading" || !session) {
      return <p>Loading...</p>;
    }

    return <Component {...props} />;
  };

  AuthenticatedComponent.displayName = `withAuth(${Component.displayName || Component.name || "Component"})`;

  return AuthenticatedComponent;
};

export default withAuth;