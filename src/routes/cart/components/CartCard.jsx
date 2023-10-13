import { Trash2 } from "@geist-ui/icons";
import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContextProvider";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../../../firebase/firebase";
import toast from "react-hot-toast";

const CartCard = ({ prodID, imgSrc, name, desc, price, quantity }) => {
  const deleteHandler = async () => {
    const checkColRef = collection(
      db,
      `carts/User_${auth?.currentUser?.uid}/cart`
    );
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
    const Useruid = JSON.parse(localStorage.getItem("user")).user.uid;
    const docRef = doc(db, `carts/User_${Useruid}/cart/${prodID}`);
    let currentQuant = 0;
    await getDoc(docRef).then((thisdocument) => {
      currentQuant = thisdocument.data().quantity;
    });
    if (currentQuant === 1) {
      await deleteDoc(docRef);
      toast("Deleted item");
    } else if (currentQuant > 1) {
      updateDoc(docRef, {
        quantity: currentQuant - 1,
      });
    } else {
      console.log(currentQuant);
      toast.error("an error occured");
    }
  };

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
          <div
            onClick={deleteHandler}
            className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6"
          >
            <Trash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
