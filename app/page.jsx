import "../public/globals.css";
import Product from "./_components/product";
import ProductCard from "./_components/productPage";

export default function Home() {
  return (
    <main className="
      flex flex-row flex-wrap gap-[1vw] justify-start px-[7.5vw]
    ">
      <Product />
    </main>
  );
}
