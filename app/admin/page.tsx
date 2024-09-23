/* app/admin/page.tsx */
import WithAuth from "../../hoc/withAuth";

const AdminPage : React.FC = () => {
  return <h1 className="text-center text-2xl">Admin Page</h1>;
}

export default WithAuth(AdminPage, ["admin"]);
