import React from "react";
import CartItem from "./CartItem";
import { Badge, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { cart } = useSelector((store) => store);

  // useEffect(() => {
  //   dispatch(getCart(jwt));
  // }, [jwt]);
  useEffect(() => {
    dispatch(getCart(jwt));
  }, [jwt, cart.cartItems]);
  return (
    <div className="">
      {cart.cartItems.length > 0 && (
        <div className="lg:grid grid-cols-3 1g:px-16 relative mt-20">
          <div className="col-span-2 mt-5">
            {cart.cartItems.map((item) => (
              <>
                <CartItem item={item} showButton={true} />
              </>
            ))}
          </div>
          <div className="px-5 sticky top-20 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p
                className="uppercase font-bold opacity-80 pt-4"
                style={{ textAlign: "center" }}
              >
                Price details
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-10 px-2">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price ({cart.cart?.totalItem} item)</span>
                  <span>₹{cart.cart.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-700">
                    -₹{cart.cart?.discounte}
                  </span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <div className="flex justify-between pt-3 text-black font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-700">
                    ₹{cart.cart?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
              <Button
                variant="contained"
                className="mt-5 w-full"
                href="/checkout?step=2"
                sx={{ px: "2.5rem", py: ". 7rem", bgcolor: "#9155fd" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
