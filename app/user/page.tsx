/* app/user/page.tsx */

import { auth } from "@/auth";
import WithAuth from "@/hoc/withAuth";

function UserPage() {
  return <h1 className="text-center text-2xl">User Page</h1>;
}

async  function getSesion (){
  return await auth();
}

export default WithAuth(UserPage, await getSesion(), ["admin", "guru", "user"]);
