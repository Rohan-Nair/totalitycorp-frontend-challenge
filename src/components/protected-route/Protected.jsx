import React from "react";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

export const Protected = ({ children }) => {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    toast("Login First");
    return <Navigate to="/login" />;
  }
};
