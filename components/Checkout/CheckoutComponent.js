import React, { useEffect, useState } from "react";
import { selectItems } from "../../Redux/BasketSlice";
import CheckoutData from "./CheckoutData";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";
import CheckoutTrans from "./CheckoutTrans";


function CheckoutComponent() {
  const items = useSelector(selectItems);

  const [isAdded, setIsAdded] = useState(false);
  
  useEffect(() => {
    console.log(items.length);
    if (items.length >= 1) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [items.length]);
  return (
    <div className=" text-center">
      <h1 className=" text-3xl font-bold text-red-500 tracking-wider">
        Your Busket
      </h1>
      <div className="flex flex-col lg:flex-row p-5">
        <div className=" ">
          {items.map((item, i) => (
            <CheckoutData
              key={i}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              count={item.count}
              image={item.image}
            ></CheckoutData>
          ))}
        </div>
        {isAdded ? <CheckoutTrans></CheckoutTrans> : null}
      </div>
    </div>
  );
}

export default CheckoutComponent;
