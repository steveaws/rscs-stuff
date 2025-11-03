// components/Logout.tsx

"use client";

import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";

export default function Logout({ userId }: { userId: string }) {
  const router = useRouter();

  return (
            
    <button
      onClick={async () => {
        await signOut();
        router.push("/login");
      }}
      className="px-2 bg-white text-black"
    >
      Logout <span className="text-blue-600 hover:text-blue-800 underline" >{userId}</span>
    </button>
  );
}
