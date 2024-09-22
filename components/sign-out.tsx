/* components/sign-out.tsx */

import { signOut } from "@/auth";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        type="submit"
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
      >
        Sign out
      </button>
    </form>
  );
}
