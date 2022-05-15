import { useState , useEffect } from "react"
import Image from "next/image"
import ProductData from "./ProductData";

function Feedback({ products }) {


    return(
        <div>
            <div className=" items-center justify-center flex text-red-500  ">
            <h1 className=" text-3xl ">Our Products Here</h1> 
            </div>
            <div className="relative grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 ml-4 sm:ml-28 ">
            {products?.map(({ id , title , description , price, count , image }) => (
                <ProductData
                key={id}
                title={title}
                description={description}
                price={price}
                count={count}
                image={image}
                >
                    
                </ProductData>

            ))}

            </div>
        </div>
    )
}

export default Feedback