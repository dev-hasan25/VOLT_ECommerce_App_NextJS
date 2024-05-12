import Image from "next/image" 
import Link from "next/link";
import { FaRegHeart  } from "react-icons/fa";
import { MdAddShoppingCart , MdShare } from "react-icons/md";
import "../public/globals.css"



const Product =  (props) => {


  const prod = JSON.parse(props.products);
  

  let ProductList = prod.map((product) => { 
    
    return (

      <div
        key={product.id}
        id="productCard"
        className=" group
          w-[15vw]  h-auto  rounded-xl 
          text-lg  text-gray-700  text-ellipsis relative  
          bg-white   border-solid border-[1px] border-[rgb(174, 174, 174)] 
        "
      >

        { /* product image */}
        
        <Link href="/" id="productImage" className="
            w-full h-[120px] mt-[20px] 
            bg-[white] rounded-t-xl flex flex-row justify-center
          ">
            <Image
              src= {product.image}
              alt={"product Image"}
              width= {0}
              height={0}
            style={{
                width: "auto",
                height: "120px",
                objectFit: "contain",
              }}
              unoptimized
            />
        </Link>
        


        { /* product Title */}

        <div className="p-[10px]" >

          <Link href= {`/${product.category}`}>
            <p className="font-bold text-[15px]">{product.category}</p>
          </Link>

          <div className="h-2 " />

          <Link href= "/product" >
            <h1 className=" font-medium text-[16px] line-clamp-2 h-[55px] text-ellipsis overflow-hidden " >
              {product.title}
            </h1>
          </Link>


          <div className="h-4" />
          

          { /* product price & rating */}
          
          <div className="flex flex-row justify-between  items-center">
            <div className="flex flex-row justify-between  items-center ">
              <p><b>{Math.ceil(product.price)}LE</b> </p>
              <div className="w-6" />
              <p> <del> {`${ Math.trunc(((product.price) * 1.25)) } LE`} </del> </p>
            </div>

            <div className="flex flex-row justify-between  items-center text-[16px] font-semibold">
              <p> { `⭐${product.rating.rate }` } </p>
            </div>
          </div>
        
        
        
          { /* product love & share */}

          <div id="iconsShow"  className=" 
            text-[#ff1744]
            text-[20px]
            w-auto   h-auto
            absolute   top-[20px]   right-[10px]
            cursor-pointer invisible group-hover:visible
          ">
            <div
              className="
              primary  bg-[#ff1744] hover:bg-[#e30f40]  text-white  p-[10px]     rounded-full 
            " >
              <FaRegHeart />
            </div>
            
            <div className="h-4" />
            
            <div
              className="
              primary  bg-[#ff1744]  hover:bg-[#e30f40] text-white  p-[10px]     rounded-full 
            " >
            {/* <div
              className="
              primary  bg-white   hover:bg-[#ff1744]  hover:text-white p-[7px]  
              border-solid    border-[#ff1744]     border-[1px]   rounded-full 
            " > */}
              <MdShare  />
            </div>
            
          </div>

        </div>




        

        { /* product Add to cart */}

        <div className="
          rounded-b-lg  bg-[#ff1744] hover:bg-[#e30f40] w-full h-auto
          flex flex-row justify-around  items-center
          text-white  text-[16px]  font-bold  p-[10px]
          cursor-pointer tracking-widest
        ">
          Add To Cart
          <MdAddShoppingCart className="text-[25px] font-bold"/>
        </div>
        
      </div>
      
    )
  })

  return <>{ ProductList }</>
  
}

export default Product