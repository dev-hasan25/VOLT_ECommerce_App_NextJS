import Image from "next/image" 
import { FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import {productData} from "./productJson"



const Product = () => {

  let ProductList = productData.map((product) => { 
    return (

      <div key={product.id}
        className= " w-[13.15vw]  h-auto  rounded-2xl  text-lg font-mono text-gray-700  text-ellipsis relative  bg-[#f4f8f9]    border-solid border-[1px] border-[rgb(174, 174, 174)] "
      >
        <Image
            src= {product.imageSrc}
            alt={"product Image"}
            width={0}
            height={0}
              style={{ width: '100%', height: 'auto' }}  
            className="rounded-t-2xl"
          />
          <div className="p-2.5"> 
            <p>{product.category}</p>
            <h1 className="max-h-16 leading-8  text-ellipsis overflow-hidden " >
              {product.title}
          </h1>
            <br />
            <h1><b>{product.price} $</b></h1>
      </div>
      <div
        className=" 
          rounded-b-2xl w-full h-16 
          flex flex-row justify-center items-center
        "
        style={{backgroundColor: "rgb(246,29,62)", }}
      >
        <MdAddShoppingCart style={{color: "white", fontSize:26}}/>
        <h1 className="mx-5 text-white">Add to Cart</h1>
      </div>
        <div
          className="
            primary
            bg-white   hover:bg-[#f61d3e] 
            text-[#f61d3e]  text-[28px] hover:text-white
            w-auto   h-auto 
            p-[7px] 
            absolute   top-[20px]   right-[10px] 
            border-solid    border-[#f61d3e]     border-[1px]   rounded-full 
          "
        >
          <FaRegHeart />
        </div>
    </div>
  )})

  return <>{ ProductList }</>
  
}

export default Product