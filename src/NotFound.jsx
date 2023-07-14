import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center">
      <div className="w-96 h-64">
        <img
          className="w-full h-full object-cover"
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1688845900~exp=1688846500~hmac=f8ecb740a68df94203a46ab0028f5a7103c1c32e828f645082127127cf176510"
        />
      </div>
      <h1 className="text-4xl text-black">
        You're landed on wrong page. Plese go to Homepage
      </h1>
      <Link to="/" className="text-4xl px-4 py-2 bg-indigo-700 rounded-md">
        HomePage
      </Link>
    </div>
  );
}

export default NotFound;
