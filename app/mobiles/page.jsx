import React from 'react'
import Product from '@/src/components/product'



const Mobiles = async () => {
  
  
  const mobilesApi = await fetch(
      'https://fakestoreapi.com/products/category/electronics',
      { cache: "no-store" })
    .then(res => res.json())
  

  return (
    <div className="
      flex flex-row flex-wrap gap-[1%] justify-start px-[7.5%]
    ">
      <Product products = {JSON.stringify(mobilesApi)} />
    </div>
  )
}

export default Mobiles