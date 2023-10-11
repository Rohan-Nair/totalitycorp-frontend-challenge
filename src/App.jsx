import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Cart from "./routes/cart/Cart";
import Missing from "./routes/missing/Missing";
import { AppContextProvider } from "./context/AppContextProvider";
import Login from "./routes/auth/login/Login";
import Signup from "./routes/auth/signup/Signup";
import { Toaster } from "react-hot-toast";
import ProductInfo from "./routes/products/ProductInfo";
import { Protected } from "./components/protected-route/Protected";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route
            path="/cart"
            element={
              <Protected>
                <Cart />
              </Protected>
            }
          />
          <Route path="*" element={<Missing />} />
        </Routes>
      </Router>
      <Toaster />
    </AppContextProvider>
  );
}

export default App;
