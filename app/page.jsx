import "../src/public/globals.css";
import Product from "../src/components/product";


export default async function Home() {


  const allProductsApi = await fetch(
      'https://fakestoreapi.com/products',
      { cache: "no-store" })
    .then(res => res.json())
  
  
  return (

    <main className="
      flex flex-row gap-[1%] justify-center  px-[5%]
    ">
      
      <div className="
        flex flex-row flex-wrap gap-[1%] justify-center
      ">
          <Product products = {JSON.stringify(allProductsApi)}/>
      </div>
      
    </main>
  );
}
