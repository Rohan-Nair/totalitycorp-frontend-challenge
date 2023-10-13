import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { Star } from "@geist-ui/icons";
import { AppContext } from "../../context/AppContextProvider";
import { Spinner } from "@geist-ui/core";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProductInfo() {
  const { getProductInfo, loading } = useContext(AppContext);
  const [currentProductIddocRef, setCurrentProductIddocRef] = useState("");
  const [productData, setProductData] = useState({});
  const navigate = useNavigate();

  // add to cart
  const addtoCart = async (productData, prodID) => {
    if (!localStorage.getItem("user")) {
      toast.error("Login first");
      navigate("/login");
      return;
    }
    const Useruid = JSON.parse(localStorage.getItem("user")).user.uid;

    const checkColRef = collection(db, `carts/User_${Useruid}/cart`);
    const qry = query(checkColRef, where("id", "==", `${prodID}`));

    let queryDocs = [];
    const func = async () => {
      await new Promise((resolve, reject) => {
        onSnapshot(qry, (snapshot) => {
          snapshot.docs.forEach((eachdoc) => {
            queryDocs.push({ ...eachdoc.data(), id: prodID });
          });
          resolve();
        });
      });
    };
    await func();
    if (queryDocs.length > 0) {
      const docRef = doc(db, `carts/User_${Useruid}/cart/${prodID}`);
      let currentQuant = 0;
      await getDoc(docRef).then((doc) => (currentQuant = doc.data().quantity));
      updateDoc(doc(db, `carts/User_${Useruid}/cart/${prodID}`), {
        quantity: currentQuant + 1,
      });
      toast.success("Updated cart");
    } else {
      try {
        productData = { ...productData, quantity: 1 };
        await setDoc(doc(db, `carts/User_${Useruid}/cart/${prodID}`), {
          id: prodID,
          ...productData,
        });
        toast.success("Added to Cart");
        return;
      } catch (err) {
        toast.error("Something went wrong");
        console.log(err);
      }
    }
  };

  const run = async () => {
    const locationis = window.location.href.split("/");
    const currentProdId = locationis[locationis.length - 1];
    setCurrentProductIddocRef(currentProdId);
    const data = await getProductInfo(currentProdId);
    setProductData({ quantity: 0, ...data });
  };
  useEffect(() => {
    run();
  }, []);
  const { desc, rating, price, name, imgSource } = productData;

  if (loading) {
    return (
      <Layout>
        <div className="flex h-screen justify-center items-center">
          <div className="flex flex-col items-center font-mont font-extrabold">
            Loading
            <Spinner className="text-5xl" />
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex justify-center relative">
        <div className="h-96 blur-2xl top-0 right-0 aspect-square rounded-full bg-accent bg-opacity-[0.15] absolute"></div>
        <div className="h-96 blur-2xl bottom-0 left-0 aspect-square rounded-full bg-accent bg-opacity-[0.15]  absolute"></div>
        <section className="text-white bg-black font-mont overflow-hidden border border-black shadow-2xl shadow-accent rounded-md mt-5 mx-4 max-w-7xl">
          <div className="px-5 py-10 mx-auto">
            <div className="mx-auto flex justify-around items-center flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/3 w-full h-96 object-contain object-center z-40"
                src={imgSource}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-2 lg:mt-0">
                <div className="flex items-center justify-between border-b">
                  <h1 className="text-white text-3xl font-bold mb-0">{name}</h1>
                  <p className="flex text-3xl font-bold items-center">
                    <Star />
                    {rating}
                  </p>
                </div>
                <p className="leading-relaxed border-b mb-5 pb-5 text-xl">
                  {desc}
                </p>

                <div className="flex">
                  <span className="title-font font-bold text-2xl text-accent">
                    ₹{price}
                  </span>
                  <button
                    onClick={() =>
                      addtoCart(productData, currentProductIddocRef)
                    }
                    className="ml-auto font-sans border-white border rounded-md px-3 py-1 text-xl z-40"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default ProductInfo;
