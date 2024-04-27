import "../public/globals.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png"
import { FaRegHeart, FaRegUser} from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlineEmail, MdOutlineSearch } from "react-icons/md";
import { LuBell } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { BsFillGridFill } from "react-icons/bs";




export const metadata = {
  title: "VOLT",
  description: "Fastest Shopping App In Egypt",
};


export default function RootLayout({ children }) {
  return (
      
      <html lang= "en" >
        <body className=" font-mono  bg-[#f6f6f7] text-white" >

          <header className="sticky top-0 z-40 ">

            <div className="
              bg-[#333333] w-[100vw]  h-[30px] px-[7.5vw]
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
              px-[7.5vw] h-[75px]  bg-[#f61d3e] 
              flex flex-row justify-between items-center sticky top-0
            ">
              <Link href="/">
                <Image
                  src = {logo}
                  alt="volt"
                  width= "5vw"
                  height= {55}
                />
              </Link>
            
          {/* search section*/}  
            
          <div className="flex flex-row justify-center items-stretch w-3/6  ">
              
            <select name="searchCategory" id="searchCategory" className=" 
              inline-flex items-center
              py-2.5 px-4  rounded-s-xl border-none
              text-lg font-medium text-center text-[#f61d3e]
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
                h-[inherit] w-full
                px-[15px] text-black bg-[#f4f8f9]"
              />
                
              <button className="bg-[#ffeb00] py-[7px] px-[14px] rounded-tr-xl rounded-br-xl">
                <MdOutlineSearch className="text-[30px] text-[#f61d3e] font-bold"/>
              </button>

            </div>

            
            {/*cart - fav - noti - user section*/}
            
            <div className="w-[12.5vw] flex flex-row justify-between items-center">
                
              <button  className="
                text-white 
                hover:bg-[#ffeb00] hover:text-[#f61d3e]
                rounded-full  p-[10px]
              ">
                <MdOutlineShoppingCart className="text-[30px] "  />
              </button>

              <button  className="
                  text-white 
                  hover:bg-[#ffeb00] hover:text-[#f61d3e]
                  rounded-full  p-[10px]
                ">
                  <FaRegHeart className="text-[28px] "  />
              </button>
              
              <button className="
                text-white  
                hover:bg-[#ffeb00] hover:text-[#f61d3e]
                rounded-full  p-[10px]
                ">
                <LuBell className="text-[28px] " />
              </button>

              <button className="
                text-white
                hover:bg-[#ffeb00] hover:text-[#f61d3e]
                rounded-full  p-[10px]
              ">
                <FaRegUser  className="text-[24px]" />
              </button>
              
              </div>
            
            </div>
          <div className="w-[100vw] h-[1px] bg-gray-400"/>

        </header>

{/*==========================================================================*/}

          {/* category robbin section*/}
        
          <div className="
              flex  flex-row  justify-between items-center
              bg-[#f61d3e]  px-[7.5vw] 
              font-mono font-semibold text-[20px]  
            ">
              
            <div className=" 
              hover:bg-[#ffeb00] hover:text-[#f61d3e]  hover:font-bold rounded-lg
              py-[5px] px-[40px]  my-[7px]
            ">
              <Link href="/">
                <p>Home</p>
              </Link>
            </div>

            <div className=" 
              hover:bg-[#ffeb00] hover:text-[#f61d3e]  hover:font-bold rounded-lg
              py-[5px] px-[40px]  my-[7px]
            ">
              <Link href="/mobiles">
                <p>Mobiles</p>
              </Link>
            </div>
            

            <div className=" 
              hover:bg-[#ffeb00] hover:text-[#f61d3e]  hover:font-bold rounded-lg
              py-[5px] px-[40px]  my-[7px]
            ">
              <Link href="/tablets">
                <p>Tablets</p>
              </Link>
            </div>
            

            <div className=" 
              hover:bg-[#ffeb00] hover:text-[#f61d3e]  hover:font-bold rounded-lg
              py-[5px] px-[40px]  my-[7px]
            ">
              <Link href="/accessories">
                <p>Accessories</p>
              </Link>
            </div>
            

            <div className=" 
              hover:bg-[#ffeb00] hover:text-[#f61d3e]  hover:font-bold rounded-lg
              py-[5px] px-[40px]  my-[7px]
            ">
              <Link href="/laptops">
                <p>Laptops</p>
              </Link>
            </div>
            

            <div className=" 
              hover:bg-[#ffeb00] hover:text-[#f61d3e]  hover:font-bold rounded-lg
              py-[5px] px-[40px]  my-[7px]
            ">
              <Link href="/computers">
                <p>Computers</p>
              </Link>
            </div>
            

            <div className=" 
              hover:bg-[#ffeb00] hover:text-[#f61d3e]  hover:font-bold rounded-lg
              py-[5px] px-[40px]  my-[7px]
            ">
              <Link href="/monitors">
                <p>Monitors</p>
              </Link>
            </div>
            

          </div>

          
          <br />
          {children}

        </body>
      </html>
    );
}
