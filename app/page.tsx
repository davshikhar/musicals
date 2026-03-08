import Image from "next/image";
import { Appbar } from "./components/Appbar";

export default function Home() {
  return (
    <div className="text-center mt-20 text-2xl font-bold">
      Hi there! welcome to the portfolio of a software engineer.
      <Appbar/>
    </div>
  );
}
