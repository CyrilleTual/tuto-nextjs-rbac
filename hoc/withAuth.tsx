/* hoc/withAuth.tsx */

import Unauthorized from "@/components/unauthorized";
import { auth } from "../auth";

async function WithAuth<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>,
  allowedRoles: string[] = []
) {
  const session = await auth();

  return function AuthWrapper(props: T) {
    return session?.user.role && allowedRoles.includes(session.user.role) ? (
      <WrappedComponent {...props} />
    ) : <Unauthorized />;
  };
}

export default WithAuth;
