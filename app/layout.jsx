import "../src/public/globals.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../src/public/logo.png"
import { FaRegHeart, FaRegUser} from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlineEmail, MdOutlineSearch } from "react-icons/md";
import { LuBell } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { BsFillGridFill } from "react-icons/bs";
import {FavoritiesList} from "./favorities/page.jsx"




export const metadata = {
  title: "VOLT",
  description: "Fastest Shopping App In Egypt",
};


export default function RootLayout({ children }) {
  return (
      
      <html lang= "en" >
        <body className=" font-[Cambria] bg-[#f6f6f7] text-white" >

          <header className=" sticky top-0 z-40 ">

            <div className="  
              bg-[#333333] w-[100%]  h-[30px]  px-[5%]
                flex  flex-row  justify-between items-center 
            ">
              <div className="flex  flex-row  justify-center items-center ">
                  <IoCallOutline />
                  <div className="w-2"/>
                  <h1> +02-01013202546  </h1>
              </div>
              <div className="flex  flex-row  justify-center items-center ">
                  <MdOutlineEmail />
                  <div className="w-2"/>
                  <h1>ha7444447@gmail.com</h1> 
              </div>
            </div>

{/*==========================================================================*/}
            
          <div className="
              px-[5%]  h-[75px]  bg-[#ff1744] 
              w-[100%] 
              flex flex-row justify-between items-center sticky top-0
            ">
            


            {/* logo section*/}

              <Link href="/">
                <Image
                  src = {logo}
                  alt="volt"
                  width= "5vw"
                  height= {55}
                />
              </Link>
            


            {/* search section*/}  
              
            <div className="flex flex-row justify-center items-stretch w-3/6  font-bold">
              
            <select name="searchCategory" id="searchCategory" className=" 
              inline-flex items-center
              py-2.5 px-4  rounded-s-xl border-none
              text-lg font-bold text-center text-[#ff1744]
              bg-[#ffeb00]  focus:outline-none 
              cursor-pointer
               
            ">
              <option value="All" className="bg-[green] h-16 py-[20px]">
                  <BsFillGridFill className=""/>
                  <p>All Category</p>
              </option>
              <option value="Mobiles">Mobiles</option>
              <option value="Tablets">Tablets</option>
              <option value="Accessories">Accessories</option>
              <option value="Labtops">Labtops</option> 
              <option value="Computers">Computers</option>
              <option value="Monitors">Monitors</option> 
            </select>
              
              <input
                type="search"
                name="Search"
                placeholder="Search For Tech Products"
                className="
                h-[inherit] w-full font-bold 
                px-[15px] text-black bg-[#f4f8f9]"
              />
                
              <button className="bg-[#ffeb00] py-[7px] px-[14px] rounded-tr-xl rounded-br-xl">
                <MdOutlineSearch className="text-[30px] text-[#ff1744] font-bold"/>
              </button>

            </div>

            
            
            {/*cart - fav - noti - user section*/}
            
            <div className="w-[12.5%] flex flex-row justify-between items-center">
                
              <button  className="
                text-white 
                hover:bg-[#ffeb00] hover:text-[#ff1744]
                rounded-full  p-[10px]
              ">
                <MdOutlineShoppingCart className="text-[30px] "  />
              </button>

              
              <button  className="
                  text-white 
                  hover:bg-[#ffeb00] hover:text-[#ff1744]
                  rounded-full  p-[10px] relative
                ">
                {  FavoritiesList &&
                  <div className="
                    bg-[#ffeb00] p-[7px] rounded-full 
                    text-[#ff1744] font-bold absolute top-0 right-0
                  " >
                    { FavoritiesList.length }
                  </div>
                }
                <FaRegHeart className="text-[28px] z-0 " />
              </button>
              
              <button className="
                text-white  
                hover:bg-[#ffeb00] hover:text-[#ff1744]
                rounded-full  p-[10px]
                ">
                <LuBell className="text-[28px] " />
              </button>

              <button className="
                text-white
                hover:bg-[#ffeb00] hover:text-[#ff1744]
                rounded-full  p-[10px]
              ">
                <FaRegUser  className="text-[24px]" />
              </button>
              
            </div>
            
          </div>

          <div className="w-[100%] h-[1px] bg-gray-400"/>

        </header>

{/*==========================================================================*/}

          {/* category robbin section*/}
        
        <div className="  
              flex  flex-row  justify-between items-center
              bg-[#ff1744]  px-[5%]
              font-semibold text-[16px]  
            ">
              
            <Link href="/">
              <div className=" 
                hover:bg-[#ffeb00] hover:text-[#ff1744]  hover:font-bold rounded-lg
                py-[5px] px-[25px]  my-[5px]
              ">
                  <p>Home</p>
              </div>
            </Link>
            
            <Link href="/allProducts">
              <div className=" 
                hover:bg-[#ffeb00] hover:text-[#ff1744]  hover:font-bold rounded-lg
                py-[5px] px-[25px]  my-[5px]
              ">
                  <p>All Products</p>
              </div>
            </Link>

            <Link href="/mobiles">
              <div className=" 
                hover:bg-[#ffeb00] hover:text-[#ff1744]  hover:font-bold rounded-lg
                py-[5px] px-[25px]  my-[5px]
              ">
                  <p>Mobiles</p>
              </div>
            </Link>

            <Link href="/tablets">
              <div className=" 
                hover:bg-[#ffeb00] hover:text-[#ff1744]  hover:font-bold rounded-lg
                py-[5px] px-[25px]  my-[5px]
              ">
                  <p>Tablets</p>
              </div>
            </Link>

            <Link href="/accessories">
              <div className=" 
                hover:bg-[#ffeb00] hover:text-[#ff1744]  hover:font-bold rounded-lg
                py-[5px] px-[25px]  my-[5px]
              ">
                  <p>Accessories</p>
              </div>
            </Link>

            <Link href="/laptops">
              <div className=" 
                hover:bg-[#ffeb00] hover:text-[#ff1744]  hover:font-bold rounded-lg
                py-[5px] px-[25px]  my-[5px]
              ">
                  <p>Laptops</p>
              </div>
            </Link>
            
            <Link href="/computers">
              <div className=" 
                hover:bg-[#ffeb00] hover:text-[#ff1744]  hover:font-bold rounded-lg
                py-[5px] px-[25px]  my-[5px]
              ">
                  <p>Computers</p>
              </div>
            </Link>
            
            <Link href="/monitors">
              <div className=" 
                hover:bg-[#ffeb00] hover:text-[#ff1744]  hover:font-bold rounded-lg
                py-[5px] px-[25px]  my-[5px]
              ">
                  <p>Monitors</p>
              </div>
            </Link>
            
          </div>

          
          <br />
          {children}

        </body>
      </html>
    );
}
