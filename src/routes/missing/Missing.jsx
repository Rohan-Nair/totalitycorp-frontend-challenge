import { addDoc, collection } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../../firebase/firebase";

const Missing = () => {
  return <div>404-Not Found</div>;
};

export default Missing;
