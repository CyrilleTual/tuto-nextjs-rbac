/* app/guru/page.tsx*/
"use client"
import WithAuth from "@/hoc/withAuth";

const GuruPage : React.FC = () => {  
  return <h1 className="text-center text-2xl">Guru Page</h1>;
}

export default WithAuth(GuruPage, ["admin", "guru"]);
