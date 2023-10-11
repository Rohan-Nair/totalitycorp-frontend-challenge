import React from "react";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="content lg:block flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
