"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div>
      Login
      <div>
        <button onClick={() => router.push("/")}>Go Home</button>
      </div>
    </div>
  );
}
