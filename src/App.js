import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/Navbar/Navigation";
import HomePage from "./customer/Pages/HomePage";
import { Height } from "@mui/icons-material";
import Footer from "./customer/components/Footer/Footer";
import ProductDetail from "./customer/Pages/ProductDetail";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Order/Order";
import { Navigate, Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";
import AdminPannel from "./Admin/AdminPannel";
import { getUser, logout } from "../src/State/Auth/Action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AdminRoutes from "./Routers/AdminRoutes";

function App() {
  const { auth, cart } = useSelector((store) => store);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, []);
     const getRoutes = () => {
       if (auth?.user?.role === "ADMIN") {
         return <AdminRoutes />;
       } else {
         return <CustomerRouters />;
       }
     };
  return (
    <div>
      <Routes>
        <Route path="/*" element={getRoutes()} />
        {/* <Route path="/admin/*" element={<AdminPannel />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
