import { useState, useEffect } from "react";
import Image from "next/image";
import ProductData from "./ProductData";
import { data } from "autoprefixer";

function Feedback({ products }) {
  return (
    <div className="relative items-center justify-center text-center bg-elementC rounded-xl sm:m-6 md:sm-8 lg:sm-12">
      <div className="relative grid grid-flow-row-dense lg:grid-cols-2 2xl:grid-cols-3">
        {products?.map(({ id, title, description, price, count, image }) => (
          <ProductData
            id={id}
            key={id}
            title={title}
            description={description}
            price={price}
            count={count}
            image={image}
          ></ProductData>
        ))}
      </div>
    </div>
  );
}

export default Feedback;
