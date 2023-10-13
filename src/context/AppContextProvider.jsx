import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { createContext, useState } from "react";
import { auth, db } from "../firebase/firebase";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [visible, setVisible] = useState(true);
  const [buttonText, setButtonText] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allProds, setAllProds] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [search, setSearch] = useState("");

  const getProductInfo = async (id) => {
    setLoading(true);
    try {
      const docRef = doc(db, "products", id);
      const data = await getDoc(docRef);
      setLoading(false);
      return data.data();
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const getAllProds = async () => {
    setLoading(true);
    try {
      let qry = query(collection(db, "products"));
      const data = onSnapshot(qry, (snapshot) => {
        let productsArray = [];
        snapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setAllProds(productsArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getCartItems = async (Useruid) => {
    setLoading(true);
    try {
      const qry = query(collection(db, `carts/User_${Useruid}/cart`));
      const data = onSnapshot(qry, (snapshot) => {
        let cartListFetching = [];
        snapshot.forEach((eachCartItem) => {
          cartListFetching.push({
            ...eachCartItem.data(),
            id: eachCartItem.id,
          });
        });
        setCartList(cartListFetching);
        setLoading(false);
      });
      return () => data;
      // const cartRef = collection(
      //   db,
      //   `carts/User_${auth?.currentUser?.uid}/cart`
      // );
      // const cartListFetching = [];
      // const snapshot = await getDocs(cartRef);
      // snapshot.docs.forEach((eachCartItem) => {
      //   cartListFetching.push({
      //     ...eachCartItem.data(),
      //     id: eachCartItem.id,
      //   });
      //   console.log(cartListFetching);
      // });
      // setLoading(false);
      // return cartListFetching;
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    visible,
    setVisible,
    buttonText,
    setButtonText,
    loading,
    setLoading,
    allProds,
    setAllProds,
    getAllProds,
    getProductInfo,
    getCartItems,
    cartList,
    setCartList,
    search,
    setSearch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
