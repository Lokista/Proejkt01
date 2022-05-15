import Product from "./Product"
import Image from "next/image"
import Currency from "react-currency-formatter"

function ProductData({ id , title , description , price, count , image }) {

    return(
        <div className=" scale-[80%] sm:scale-[100%]  w-[450px] my-7 relative bg-elementC justify-center text-center ">
            <div className="absolute top-2 right-2 text-gray-500 z-30">
                left: {count}
            </div>
            <div className="">
            <Image src={image} 
            width={600} 
            height={400}
            objectFit="cover"
           layout="responsive"
           alt="xd"
           />
            </div>

           <p className="text-2xl md:text-3xl font-bold"> {title} </p>
           <p className=" text-md md:text-xl"> {description} </p>
           <div className="font-bold text-xl">
               <Currency quantity={price } currency="GBP" >

               </Currency>
           </div>
           <button className=" h-12 rounded-xl  bg-red-500 w-44 m-4 justify-center text-xl font-semibold hover:scale-105 transition-colors duration-700 hover:bg-red-400"> Add to Basket
           </button>
        </div>
    )
}
export default ProductData