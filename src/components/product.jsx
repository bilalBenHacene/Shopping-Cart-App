import React from "react";
import Star from "./star";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, removeFromCart } from "../store/slices/cart-slice";

const Product = ({ data }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addtoCart(data));
  };
  const handleRmoveFromCart = () => {
    dispatch(removeFromCart(data.id));
  };
  return (
    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white ">
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <img
          className="object-contain w-full object-center"
          src={data?.image}
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {data?.category}
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl w-full tracking-tight text-slate-900 truncate">
            {data?.title}
          </h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${data?.price}
            </span>
          </p>
          <div className="flex items-center">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {data?.rating?.rate}
            </span>
          </div>
        </div>
        <button
          onClick={
            cart.some((item) => item.id == data.id)
              ? handleRmoveFromCart
              : handleAddToCart
          }
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {cart.some((item) => item.id == data.id) ? "Remove" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default Product;
