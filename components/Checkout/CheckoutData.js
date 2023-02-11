import React from "react";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../../Redux/BasketSlice";
import Link from "next/link";

function CheckoutData({ id, title, description, price, count, image }) {
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
    console.log(id);
  };

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      description,
      price,
      count,
      image,
    };
    dispatch(addToBasket(product));
  };

  return (
    <div className=" relative grid md:grid-cols-4  rounded-xl md:space-x-20 xl:space-x-32 scale-100 md:scale-90 justify-items-center sm:justify-items-start border-2 p-5 bg-zinc-700">
      <div className="w-auto">
      <Link href={`/Product/${id}`} passHref>
        <Image
          className="w-36 h-36 cursor-pointer hover:scale-105 "
          src={image}
          width={250}
          height={250}
          layout="fixed"
          alt="xd"
        />
        </Link>
      </div>
      <div className="col-span-2">
        <Link className="" href={`/Product/${id}`} passHref>
        <p className="text-2xl md:text-3xl font-bold cursor-pointer transition-colors hover:text-red-500 duration-700"> {title} </p>
        </Link>
        <p className=" text-md md:text-xl"> {description} </p>
        <p className="font-bold">
          <Currency quantity={price} currency="usd"></Currency>
        </p>
      </div>
      <div className="flex flex-col">
        <button
          onClick={addItemToBasket}
          className=" h-auto rounded-xl bg-red-500 p-2 
       text-xl font-semibold hover:scale-105 transition-colors 
       duration-700 hover:bg-red-400 my-auto"
        >
          Add one more
        </button>

        <button
          onClick={removeItemFromBasket}
          className=" h-auto rounded-xl bg-red-500 p-2  
       text-xl font-semibold hover:scale-105 transition-colors 
       duration-700 hover:bg-red-400 my-auto"
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutData;
