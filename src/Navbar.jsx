import React from "react";
import { BiShoppingBag } from "react-icons/bi";

function Navbar({ productCount }) {
  return (
    <div className="py-4 w-full bg-white">
      <div class="max-w-6xl flex justify-between mx-auto items-center">
        <img
          class="h-16"
          src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png"
        />
        <div className="flex flex-col items-center justify-center">
          <BiShoppingBag className="text-5xl -m-8 text-primary-default" />
          <span className="text-xl">{productCount}</span>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
