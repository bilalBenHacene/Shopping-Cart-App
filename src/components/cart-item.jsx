import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";

const Item = ({ cartItem }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItem.id));
  };
  return (
    <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
      <div className="md:w-4/12 2xl:w-1/4 w-full">
        <img
          src={cartItem?.image}
          alt="Black Leather Purse"
          className="h-full object-center object-cover md:block hidden"
        />
        <img
          src={cartItem?.image}
          alt="Black Leather Purse"
          className="md:hidden w-full h-full object-center object-cover"
        />
      </div>
      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
          RF{cartItem?.id}
        </p>
        <div className="flex items-center justify-between w-full">
          <p className="text-xs font-bold leading-none text-gray-800">
            {cartItem?.title}
          </p>
          <input
            type="number"
            min={1}
            defaultValue={1}
            className="w-20 border p-2"
          />
        </div>
        <p className="text-xs leading-3 text-gray-600 pt-2">
          Height: 10 inches
        </p>
        <p className="text-xs leading-3 text-gray-600 py-4">Color: Black</p>
        <p className="w-96 text-xs leading-3 text-gray-600">
          Composition: 100% calf leather
        </p>
        <div className="flex items-center justify-between pt-5">
          <div className="flex itemms-center">
            <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
              Add to favorites
            </p>
            <button
              onClick={handleRemoveFromCart}
              className="text-xs leading-3 underline outline-none text-red-500 pl-5 cursor-pointer"
            >
              Remove
            </button>
          </div>
          <p className="text-base font-black leading-none text-gray-800">
            {cartItem?.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
