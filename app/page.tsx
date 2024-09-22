/* app/page.tsx */

import SignIn from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen">
      <h1 className="text-center text-2xl">Landing Page</h1>
      <SignIn />
      <SignOut />
      
    </div>
  );
}
