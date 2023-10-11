import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { auth } from "../../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AppContext } from "../../../context/AppContextProvider";
import { Loading, Spinner } from "@geist-ui/core";
import { LogIn } from "@geist-ui/icons";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const context = useContext(AppContext);
  const { loading, setLoading } = context;

  const signin = async () => {
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(result));
      toast.success("Logged In", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
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
          <div className="text-black text-center text-3xl mb-5">Login</div>
          <div className="w-full flex">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-black border mb-4 px-2 py-2 w-full rounded-md text-black placeholder:text-black outline-none "
              placeholder="Email"
              required
            />
          </div>
          <div className="flex">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" bg-transparent border-black border  mb-4 px-2 py-2 w-full rounded-md text-black placeholder:text-black outline-none"
              placeholder="Password"
              required
            />
          </div>
          <div className=" flex justify-center mb-3">
            <button
              onClick={signin}
              className=" bg-transparent border border-black shadow-lg shadow-accent w-full flex justify-center items-center gap-1 text-black font-bold  px-2 py-2 rounded-md"
            >
              Login <LogIn size={20} />
            </button>
          </div>
          <div>
            <h2 className="text-black text-lg text-center">
              Don't have an account?{" "}
              <Link
                className="underline hover:underline text-black font-bold"
                to={"/signup"}
              >
                Signup now
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
