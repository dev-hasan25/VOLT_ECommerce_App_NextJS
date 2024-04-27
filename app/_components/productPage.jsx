import Image from 'next/image'
import React from 'react'

const ProductCard = (props) => {
    return (
        <div  className= 'bg-purple-700  w-1/5  h-4/5  border-2  border-solid border-blue-800  text-ellipsis  overflow-hidden  whitespace-nowrap  '>
            <Image
                src={props.imageSrc}
                alt={"product Image"}
                width={0}
                height={0}
                style={{ width: '50px', height: 'auto' }}  
            />
            <h6>{props.category}</h6>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
  )
}

export default ProductCard