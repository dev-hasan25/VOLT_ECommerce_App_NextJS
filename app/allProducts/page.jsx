import Product from "@/src/components/product";
import SidePanel from "@/src/components/sidePanel";

const allProductsApi = await fetch(
    'https://fakestoreapi.com/products',
    { cache: "no-store" })
    .then(res => res.json())
  


const AllProducts = () => {

  return (
    <div className="
        flex flex-row gap-[1%] justify-center px-[5%]
    ">
    
    <SidePanel />

    <div className="
      flex flex-row flex-wrap gap-[1vw] justify-start
    ">
        <Product products = {JSON.stringify(allProductsApi)}/>
    </div>
    
  </div>
  )
}

export default AllProducts