import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../Redux/BasketSlice";
import Link from "next/link";

function ProductData({ id, title, description, price, count, image }) {
  const dispatch = useDispatch();

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
  // prevent src errror from next/image
  if (!image) {
    return;
  }

  return (
    <div className=" relative flex flex-col m-5 bg-zinc-700 rounded-xl ">
      <div className="absolute top-2 right-2 text-gray-500 z-30">
        left: {count}
      </div>
      <div className="">
        <Image
          src={image}
          width={300}
          height={200}
          objectFit="cover"
          layout="responsive"
          alt="xd"
        />
      </div>
      <Link href={`/Product/${id}`} passHref>
        <p className="text-2xl md:text-3xl font-bold cursor-pointer transition-colors hover:text-red-500 duration-700 ">
          {" "}
          {title}{" "}
        </p>
      </Link>
      <p className=" text-md md:text-xl break-words"> {description} </p>
      <div className="font-bold text-xl">
        <Currency quantity={price} currency="usd"></Currency>
      </div>
      <button
        onClick={addItemToBasket}
        className="h-12 rounded-xl bg-red-500 m-4 text-xl font-semibold hover:scale-105 transition-colors duration-700 hover:bg-red-400"
      >
        Add to Basket
      </button>
    </div>
  );
}
export default ProductData;
