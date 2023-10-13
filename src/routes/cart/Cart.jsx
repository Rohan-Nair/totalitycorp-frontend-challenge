import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { Modal, Spinner } from "@geist-ui/core";

import CartCard from "./components/CartCard";
import { AppContext } from "../../context/AppContextProvider";
import CheckoutPrice from "./components/CheckoutPrice";

import cartbanner from "../../../public/assets/cartpagebanner/cartpagesale.png";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(false);
  const { getCartItems, cartList, loading } = useContext(AppContext);
  const closeHandler = () => {
    setModalState(false);
  };

  useEffect(() => {
    const Useruid = JSON.parse(localStorage.getItem("user")).user.uid;
    getCartItems(Useruid);
  }, []);

  return (
    <Layout>
      <div className="h-screen bg-white mt-5 font-mont">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 scroll-">
          <div>
            {loading ? (
              <div>
                <Spinner />
              </div>
            ) : cartList.length === 0 ? (
              <div>
                <p>No Items added yet</p>
              </div>
            ) : (
              <div>
                {cartList.map((eachitem) => (
                  <CartCard
                    key={eachitem.id}
                    prodID={eachitem.id}
                    imgSrc={eachitem.imgSource}
                    desc={eachitem.desc}
                    name={eachitem.name}
                    price={eachitem.price}
                    quantity={eachitem.quantity}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col md:w-1/3">
            <div className="mt-6 h-fit rounded-lg border bg-white p-6 shadow-accent shadow-lg md:mt-0  font-mont">
              <CheckoutPrice cartList={cartList} />
              {/* <Modal  /> */}
              <button
                type="button"
                className="w-full  bg-transparent py-2 text-center rounded-lg text-black border-black border hover:bg-accent hover:bg-opacity-30 font-bold "
                onClick={() => {
                  setModalState(true);
                }}
              >
                Buy Now
              </button>
              <Modal visible={modalState} onClose={closeHandler}>
                <Modal.Title>Shipping Details</Modal.Title>
                <Modal.Content className="p-0">
                  <section>
                    <div className="flex flex-col items-center justify-center py-0 mx-auto  lg:py-0">
                      <div className="w-full  rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-0 space-y-4 md:space-y-6 sm:p-8">
                          <form className="space-y-4 md:space-y-6">
                            <div>
                              <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-bold font-mont text-gray-900"
                              >
                                Enter Full Name
                              </label>
                              <input
                                type="name"
                                name="name"
                                id="name"
                                className=" border outline-0 border-black text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-transparent"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-bold font-mont text-gray-900"
                              >
                                Enter Full Address
                              </label>
                              <input
                                type="text"
                                name="address"
                                id="address"
                                className=" border outline-0 border-black text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-transparent"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="pincode"
                                className="block mb-2 text-sm font-bold font-mont text-gray-900"
                              >
                                Enter Pincode
                              </label>
                              <input
                                type="text"
                                name="pincode"
                                id="pincode"
                                className=" border outline-0 border-black text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-transparent"
                                required
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="mobileNumber"
                                className="block mb-2 text-sm font-bold font-mont text-gray-900"
                              >
                                Enter Mobile Number
                              </label>
                              <input
                                type="text"
                                name="mobileNumber"
                                id="mobileNumber"
                                className=" border outline-0 border-black text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-transparent"
                                required
                              />
                            </div>
                          </form>
                          <button
                            onClick={closeHandler}
                            className="shadow-accent shadow-lg w-full  bg-transparent py-2 text-center rounded-lg text-black border-black border hover:bg-accent hover:bg-opacity-30 font-bold font-mont"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </Modal.Content>
              </Modal>
            </div>
            <div onClick={() => navigate("/")} className="cursor-pointer mt-5">
              <img className="md:block hidden" src={cartbanner} alt="" />
              <button className="font-mont w-full  bg-transparent py-2 text-center rounded-lg text-black border-black border hover:bg-accent hover:bg-opacity-30 font-bold ">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
