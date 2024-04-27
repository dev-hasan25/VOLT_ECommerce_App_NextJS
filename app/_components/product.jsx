import Image from "next/image" 
import Link from "next/link";
import { FaRegHeart  } from "react-icons/fa";
import { MdAddShoppingCart , MdShare } from "react-icons/md";
import { productData } from "./productJson"



const Product = () => {

  let ProductList = productData.map((product) => { 
    return (

      <div
        key={product.id}
        id="productCard"
        className= " w-[16vw]  h-auto  rounded-xl  text-lg font-mono text-gray-700  text-ellipsis relative  bg-white   border-solid border-[1px] border-[rgb(174, 174, 174)] "
      >
        <Link href="/" >
          <Image
            src= {product.imageSrc}
            alt={"product Image"}
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}  
            className="rounded-t-xl "
          />
        </Link>
        
        <div className="p-2.5" >

          <Link href= {`/${product.category}`}>
            <p className="font-bold text-[16px]">{product.category}</p>
          </Link>

          <div className="h-4 " />

          <Link href= "/product" >
            <h1 className="max-h-14 leading-7 font-bold text-[18px] text-ellipsis overflow-hidden " >
              {product.title}
            </h1>
          </Link>

          <div className="h-4 " />

        </div>

      
        <div className="
          rounded-b-lg  bg-[#f61d3e] w-full h-auto
          flex flex-row justify-between  items-center
          text-white
          text-[18px]  font-bold  py-[5px] px-[20px]
        ">
          <p>{product.price} $</p>
          <p><del>1500 $</del></p>
        </div>
        

        <div className="
          text-[#f61d3e]
          text-[26px]
          w-auto   h-auto
          absolute   top-[20px]   right-[10px]
          flex flex-col justify-start
          cursor-pointer
        ">

          <div
            className="
            primary  bg-white   hover:bg-[#f61d3e]   hover:text-white  p-[7px] 
            border-solid    border-[#f61d3e]     border-[2px]   rounded-full 
          " >
            <MdAddShoppingCart />
          </div>
          
          <div className="h-4" />
          
          <div
            className="
            primary  bg-white   hover:bg-[#f61d3e]   hover:text-white  p-[7px] 
            border-solid    border-[#f61d3e]     border-[2px]   rounded-full 
          " >
            <FaRegHeart />
          </div>
          
          <div className="h-4" />
          
          <div
            className="
            primary  bg-white   hover:bg-[#f61d3e]  hover:text-white p-[7px]  
            border-solid    border-[#f61d3e]     border-[2px]   rounded-full 
          " >
            <MdShare  />
            </div>
          
        </div>

    </div>
  )})

  return <>{ ProductList }</>
  
}

export default Product