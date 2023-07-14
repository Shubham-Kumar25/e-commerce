import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  HiArrowNarrowLeft,
  HiArrowSmLeft,
  HiArrowSmRight,
} from "react-icons/hi";
import { getProductData } from "./api";
import Loading from "./Loading";
import NotFound from "./NotFound";

function ProductDetail({ onAddToCart }) {
  const params = useParams();
  const id = +params.id;

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const p = getProductData(id);
      p.then(function (products) {
        setProduct(products);
        setLoading(false);
      });

      p.catch(function (error) {
        setLoading(false);
      });
    },
    [id]
  );

  function handleCountChange(event) {
    setCount(+event.target.value);
  }

  function handleButtonClick() {
    onAddToCart(id, count);
  }

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className=" flex max-w-6xl flex-col mx-auto overflow-hidden bg-white mx-3 my-5">
      <div className="flex space-around items-center">
        <Link to="/" className="text-2xl mx-4 my-2 self-start">
          <HiArrowNarrowLeft />
          Back
        </Link>
        <div className="flex">
          <div className="mx-5 my-3 w-1/2 h-full">
            <img
              className="w-full h-full object-cover"
              src={product.thumbnail}
            />
          </div>

          <div className="mx-4 my-3">
            <div className="text-3xl font-bold basis-0">{product.title}</div>
            <div className="text-gray-700 text-base basis-0">
              Brand: {product.brand}
            </div>
            <div className="text-gray-700 text-2xl basis-0">
              Rs. {product.price}
            </div>
            <div className="basis-0 text-black">{product.description}</div>
            <input
              value={count}
              onChange={handleCountChange}
              className="w-12 mt-5 basis-0 border border-primary-default rounded-md"
              type="number"
            />
            <button
              onClick={handleButtonClick}
              className="bg-primary-default mt-5 basis-0 text-white font-bold rounded-lg ml-4 px-8 py-2"
            >
              ADD TO CART
            </button>
            <div className="text-indigo-700 text-base basis-0">
              Rating: {product.rating}
            </div>
            <div className="text-gray-700 text-base basis-0">
              Stock Left: {product.stock}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-2xl">
          <div>
            {id > 1 && (
              <Link to={"/products/" + (id - 1)}>
                <HiArrowSmLeft /> Previous
              </Link>
            )}{" "}
          </div>
        </div>
        <div className="text-2xl">
          <Link to={"/products/" + (id + 1)}>
            <HiArrowSmRight /> Next
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
