import { Trash2 } from "@geist-ui/icons";
import React from "react";

const CartCard = ({ imgSrc, name, desc, price, quantity }) => {
  return (
    <div className="rounded-lg md:w-2/3 ml-6">
      <div className="justify-between  mb-6 rounded-lg border  shadow-accent shadow-lg bg-white p-3  sm:flex  sm:justify-start">
        <img
          src={imgSrc}
          alt="product-image"
          className="w-full rounded-lg sm:w-40 object-center object-cover"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-black">{name}</h2>
            <h2 className="text-sm  text-black">{desc}</h2>
            <div>
              <p className="mt-1  text-md font-bold font-mont text-black">
                ₹{price}
              </p>
              <p>Qty. {quantity}</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <Trash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
