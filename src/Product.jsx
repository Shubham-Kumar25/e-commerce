import React from "react";
import { Link } from "react-router-dom";

function Product({ photo, category, title, price, id }) {
  return (
    <div className="max-w-xs">
      <div className="w-full aspect-square">
        <img className="w-full h-full object-cover" src={photo} />
      </div>
      <div className="text-xl text-gray-500">{category}</div>
      <div className=" text-xl">{title}</div>
      <div className=" text-xl">Rs. {price}</div>
      <Link to={"/products/" + id} className="text-xs text-indigo-700">
        View Detail
      </Link>
    </div>
  );
}
export default Product;
