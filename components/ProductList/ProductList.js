import React from "react";
import ProductView from "./ProductView";

function ProductList({ products, track }) {
  return (
    <div>
      <div>
        {products?.map(({ id, title, description, price, count, image }) => (
          <ProductView
            track={track}
            id={id}
            key={id}
            title={title}
            description={description}
            price={price}
            count={count}
            image={image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
