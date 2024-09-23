import Unauthorized from "@/components/unauthorized";
import { auth } from "../auth";

async function WithAuth(
  WrappedComponent: React.ComponentType<any>,
  allowedRoles: string[] = []
) {
  const session = await auth();

  return function AuthWrapper(props: any) {
    return session?.user.role && allowedRoles.includes(session.user.role) ? (
      <WrappedComponent {...props} />
    ) : <Unauthorized />;
  };
}

export default WithAuth;
