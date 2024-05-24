import Nav from "@/components/NavMenu";
import Alert from "@/components/Alert";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left bg-orange-50 justify-between ">
      <Header />
    <div className="flex-grow relative">
      <Image src="/frontpage1.JPG" alt="Logo" layout="fill"priority />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 text-4xl font-bold text-black">
        <label className="text-4xl font-bold text-white">OutThere Social Club</label>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 text-4xl font-bold text-black">
        <label className="text-4xl font-bold text-white">Addressing the Loneliness Epidemic</label>
      </div>
    </div>

    </main>
  );
}
