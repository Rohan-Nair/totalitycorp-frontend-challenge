import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoLogoVercel } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidLogIn, BiSolidLogOut } from "react-icons/bi";
import { AppContext } from "../../context/AppContextProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function Navbar() {
  const { visible } = useContext(AppContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    localStorage.clear(user);
  };
  return (
    visible && (
      <div className="flex w-[110vw] lg:w-screen justify-center shadow shadow-accent">
        <div className="font-mont sticky top-0 w-full lg:max-w-7xl z-50 h-14 px-10 text-lg overflow-hidden flex items-center">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="flex items-center font-bold gap-2 flex-grow "
          >
            <IoLogoVercel />
            Totality
          </div>
          <ul className=" flex gap-5 ">
            {user && (
              <NavLink onClick={logout} className={"text-black"} to={"/login"}>
                <BiSolidLogOut size={"1.4em"} />
              </NavLink>
            )}
            {!user && (
              <NavLink className={"text-black"} to={"/login"}>
                <BiSolidLogIn size={"1.4em"} />
              </NavLink>
            )}
            <NavLink className={"text-black"} to={"/cart"}>
              <FaShoppingCart size={"1.4em"} />
            </NavLink>
          </ul>
        </div>
      </div>
    )
  );
}
