/* app/admin/page.tsx */
import { auth } from "@/auth";
import WithAuth from "../../hoc/withAuth";

const AdminPage : React.FC = () => {
  return <h1 className="text-center text-2xl">Admin Page</h1>;
}

async function getSesion() {
  return await auth();
}

export default WithAuth(AdminPage, await getSesion(), ["admin"]);
