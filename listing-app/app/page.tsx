import Image from "next/image";
import ListingGrid from "./components/ListingGrid";

export default function Home() {
  return (
    <>
      <div className=" flex h-screen  justify-center items-center">
        <p className="font-bold text-3xl font-serif"> Welcome to Listing App </p>

        <ListingGrid />
      </div>
    </>
  );
}
