/* app/user/page.tsx */

import WithAuth from "@/hoc/withAuth";

function UserPage() {
  return <h1 className="text-center text-2xl">User Page</h1>;
}
export default WithAuth(UserPage, ["admin", "guru", "user"]);
