import Link from "next/link";

export default function IdPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return <div>ID Page - {id}</div>;
}
