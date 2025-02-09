import ListingGrid from "./components/ListingGrid";

export default function Home() {
  return (
    <>
      <main>
        <div className="flex justify-center ">
          <p className="font-bold text-3xl font-serif">
            {" "}
            Welcome to Listing App{" "}
          </p>
        </div>

        <ListingGrid />
      </main>
    </>
  );
}
