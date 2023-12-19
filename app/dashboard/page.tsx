import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      DashboardPage
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}
