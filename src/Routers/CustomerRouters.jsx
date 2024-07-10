import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/Pages/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navbar/Navigation";

import ProductDetail from "../customer/Pages/ProductDetail";
import Order from "../customer/components/Order/Order";
import Footer from "../customer/components/Footer/Footer";
import Checkout from "../customer/components/Checkout/Checkout";
import { About } from "../customer/Pages/About";
import { Faq } from "../customer/Pages/FAQ";
import TnC from "../customer/Pages/TnC";
import Privacy from "../customer/Pages/Privacy";
import AdminPannel from "../Admin/AdminPannel";
import { Recipes } from "../customer/Pages/Recipes";
import SeasameNoodle from "../customer/Pages/SeasameNoodle";
import AchaariPaneerTikka from "../customer/Pages/AchaariPaneerTikka";
import CrispyVegetableTempura from "../customer/Pages/CrispyVegetableTempura";
import ChickpeaStirFry from "../customer/Pages/ChickpeaStirFry";
import Saag from "../customer/Pages/Saag";
import Salad from "../customer/Pages/Salad";
import Return from "../customer/Pages/Return";
import Shipping from "../customer/Pages/Shipping";
import ReportForm from "../customer/Pages/ReportForm";
import Report from "../customer/Pages/Report";

const CustomerRouters = () => {
  return (
    <div>
      
      <div className="nav">
        <Navigation />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/TnC" element={<TnC />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<HomePage />}></Route>
          <Route path="/register" element={<HomePage />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/product/:productId" element={<ProductDetail />}></Route>
          <Route path="/reports/:reportId" element={<Report />}></Route>
          <Route path="/orders" element={<Order />}></Route>
          <Route path="/recipes" element={<Recipes />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          
          <Route
            path="/recipes/seasmeNoodles"
            element={<SeasameNoodle />}
          ></Route>
          <Route
            path="/recipes/paneerTikka"
            element={<AchaariPaneerTikka />}
          ></Route>
          <Route
            path="/recipes/tempura"
            element={<CrispyVegetableTempura />}
          ></Route>
          <Route path="/recipes/chickpea" element={<ChickpeaStirFry />}></Route>
          <Route path="/recipes/saag" element={<Saag />}></Route>

          <Route path="/recipes/salad" element={<Salad />}></Route>
          <Route path="/return" element={<Return />}></Route>
          <Route path="/shipping" element={<Shipping />}></Route>
          <Route path="/form" element={<ReportForm />}></Route>
        </Routes>
        <div></div>

        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
