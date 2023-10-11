import { collection, onSnapshot, query } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../firebase/firebase";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [visible, setVisible] = useState(true);
  const [buttonText, setButtonText] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allProds, setAllProds] = useState([]);

  const getAllProds = async () => {
    setLoading(true);
    try {
      const qry = query(collection(db, "products"));
      const data = onSnapshot(qry, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
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
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
