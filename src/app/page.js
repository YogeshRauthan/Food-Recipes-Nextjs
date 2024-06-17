import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gradient-to-r from-yellow-400 to-orange-400">
      <h1 className="my-5 text-3xl font-bold text-gray-800">Welcome To Food Recipe App</h1>
      <Link href={'/recipe-list'}><Button>Click Here to Explore Recipes</Button></Link>
    </div>
  );
}
