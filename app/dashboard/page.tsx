import Link from "next/link";
import myImage from "../../public/myimage.jpg";
import Image from "next/image";

const link =
  "https://www.aplyca.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fc63hsprlvlya%2FIacLLeOBR5WCvdCPqKuff%2F6860b5cc464c4f54703a2befa3f706b4%2Fnextjs3.webp&w=2048&q=75";

export default function DashboardPage() {
  return (
    <div>
      DashboardPage
      <Image src={myImage} alt="my image" />
      <Image src={link} width={200} height={200} alt="hello" />
      <div className="relative h-60 w-60 mt-10 mb-10">
        <Image src={link} fill alt="hello" />
      </div>
    </div>
  );
}
