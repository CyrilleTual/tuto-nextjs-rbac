/* app/page.tsx */

import { auth } from "@/auth";
import SignIn from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex flex-col gap-8 items-center justify-center  ">
      <h1 className="text-center text-2xl">Landing Page</h1>
      {!session?.user ? <SignIn /> : <SignOut />}
    </div>
  );
}
