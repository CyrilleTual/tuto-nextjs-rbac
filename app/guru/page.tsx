import WithAuth from "@/hoc/withAuth";

function GuruPage() {
  return <h1 className="text-center text-2xl">Guru Page</h1>;
}

export default WithAuth(GuruPage, ["admin", "guru"]);
