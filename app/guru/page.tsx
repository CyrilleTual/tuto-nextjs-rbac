/* app/guru/page.tsx*/

import { auth } from "@/auth";
import WithAuth from "@/hoc/withAuth";

function GuruPage() {
  return <h1 className="text-center text-2xl">Guru Page</h1>;
}

async function getSesion() {
  return await auth();
}

export default WithAuth(GuruPage, await getSesion(), ["admin", "guru"]);
