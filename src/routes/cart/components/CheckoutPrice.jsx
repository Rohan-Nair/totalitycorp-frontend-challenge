import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/AppContextProvider";
import { Spinner } from "@geist-ui/core";

const CheckoutPrice = ({ cartList }) => {
  const { loading } = useContext(AppContext);
  if (loading) {
    return <Spinner />;
  }
  const [total, setTotal] = useState(0);
  const calcTotal = () => {
    let tempTotal = 0;

    cartList.forEach((item) => {
      tempTotal += item.price * item.quantity;
    });
    setTotal(tempTotal);
  };
  useEffect(() => {
    calcTotal();
  }, [cartList]);

  return (
    <>
      <div className="flex justify-between mb-3">
        <p className="text-lg font-bold font-mont">Total</p>
        <div>
          <p className="mb-1 text-lg font-bold font-mont">₹{total}</p>
        </div>
      </div>
    </>
  );
};

export default CheckoutPrice;
