import React, { useContext, useState } from "react";
import Layout from "../../components/layout/Layout";
import { Trash2 } from "@geist-ui/icons";
import { Modal } from "@geist-ui/core";

function Cart() {
  const [modalState, setModalState] = useState(false);
  const closeHandler = () => {
    setModalState(false);
  };
  return (
    <Layout>
      <div className="h-screen bg-white mt-5 font-mont">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          <div className="rounded-lg md:w-2/3 ">
            <div className="justify-between mb-6 rounded-lg border  shadow-accent shadow-lg bg-white p-6  sm:flex  sm:justify-start">
              <img
                src="https://dummyimage.com/400x400"
                alt="product-image"
                className="w-full rounded-lg sm:w-40 object-center object-cover"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-black">Name</h2>
                  <h2 className="text-sm  text-black">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quia, quos asperiores? Laborum quibusdam repudiandae
                    sapiente? Error odio nulla dolores quibusdam.
                  </h2>
                  <p className="mt-1  text-md font-bold font-mont text-black">
                    ₹100
                  </p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <Trash2 />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-accent shadow-lg md:mt-0 md:w-1/3 font-mont">
            <div className="mb-2 flex justify-between border-b-black border-b">
              <p className="text-black font-semibold font-mont">Subtotal</p>
              <p className="text-black font-semibold font-mont">₹100</p>
            </div>
            <div className="flex justify-between mb-3">
              <p className="text-lg font-bold font-mont">Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold font-mont">₹200</p>
              </div>
            </div>
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
                        <form className="space-y-4 md:space-y-6" action="#">
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
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
