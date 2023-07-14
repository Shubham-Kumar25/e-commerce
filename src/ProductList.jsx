import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="md:grid grid-cols-3 gap-2 space-y-2 md:space-y-0">
      {products.map(function (item) {
        return (
          <Product
            key={item.title}
            photo={item.thumbnail}
            category={item.category}
            title={item.title}
            rating={item.rating}
            price={item.price}
            id={item.id}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
