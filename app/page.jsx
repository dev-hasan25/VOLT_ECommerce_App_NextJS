import "../public/globals.css";
import Product from "./_components/product";
import ProductCard from "./_components/ProductCard";

export default function Home() {
  return (
    <main className="
    flex flex-row flex-wrap gap-[1vw] justify-center px-[7.5vw]
    ">
      <Product />
    </main>
  );
}
