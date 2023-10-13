import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { auth, db } from "../../../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AppContext } from "../../../context/AppContextProvider";
import { LogIn } from "@geist-ui/icons";
import toast from "react-hot-toast";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { Spinner } from "@geist-ui/core";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const context = useContext(AppContext);
  const { loading, setLoading } = context;

  const signup = async () => {
    if (name === "" || email === "" || password === "") {
      toast.error("All fields are required");
    } else {
      setLoading(true);
      try {
        const users = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        localStorage.setItem("user", JSON.stringify(users));
        const user = {
          name: name,
          uid: users.user.uid,
          email: users.user.email,
          time: Timestamp.now(),
        };
        const userRef = collection(db, "users");
        await addDoc(userRef, user);
        toast.success("Signed Up");
        setName("");
        setEmail("");
        setPassword("");
        setLoading(false);
        navigate("/");
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col items-center font-mont font-extrabold">
          Loading
          <Spinner className="text-5xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed w-full font-mont">
      <div className="flex justify-center items-center h-screen relative">
        <div className="absolute -z-10 rotate-45 blur-3xl h-96 w-96 rounded-full opacity-60  bg-accent"></div>
        <div className="bg-transparent border px-10 py-10 rounded-md mx-4 md:w-2/4 lg:w-1/4 w-full shadow-2xl shadow-accent ">
          <div className="text-black text-center text-3xl mb-5 ">Signup</div>
          <div className="flex">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="bg-transparent border-black border mb-4 px-2 py-2 w-full rounded-md text-black placeholder:text-black outline-none "
              placeholder="Name"
            />
          </div>
          <div className=" flex">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-black border mb-4 px-2 py-2 w-full rounded-md text-black placeholder:text-black outline-none "
              placeholder="Email"
            />
          </div>
          <div className="flex">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" bg-transparent border-black border  mb-4 px-2 py-2 w-full rounded-md text-black placeholder:text-black outline-none"
              placeholder="Password"
            />
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={signup}
              className=" bg-transparent border border-black shadow-lg shadow-accent w-full flex justify-center items-center gap-1 text-black font-bold  px-2 py-2 rounded-md"
            >
              Sign Up <LogIn size={20} />
            </button>
          </div>
          <div>
            <h2 className="text-black text-lg text-center">
              Don't have an account?{" "}
              <Link
                className="underline hover:underline text-black font-bold"
                to={"/login"}
              >
                Login now
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
