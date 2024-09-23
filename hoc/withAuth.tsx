/* hoc/withAuth.tsx */

import Unauthorized from "@/components/unauthorized";
import { Session } from "next-auth";

function WithAuth<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>,
  session: Session | null,
  allowedRoles: string[] = []
) {
  return function AuthWrapper(props: T) {
    return session?.user?.role && allowedRoles.includes(session.user.role) ? (
      <WrappedComponent {...props} />
    ) : <Unauthorized />;
  };
}

export default WithAuth;
