import React from "react";

import { useNavigate } from "react-router-dom";
import oil from "./oil.jpg"
const ProductCarouselCard
 = ({ product }) => {
  const navigate = useNavigate();

  return (
    <>
      <a href={"/product/" + product?._id} style={{padding: "5px"}}>
        <div
          // onClick={() => navigate(`/product/${product?._id}/#`)}
          className="cursor-pointer flex flex-col items-center text-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] my-3 mx-3 h-[25rem] py-5 "
        >
          <div className="h-[13rem] mx-2 my-2">
            <img
              className="object-cover object-top w-full h-full"
              src={product?.imageUrl[0]?.url}
              alt={product?.title}
            />
          </div>

          <div className="px-4  py-2">
            <h3 className="text-lg font-bold text-gray-900">
              {product?.title}
            </h3>
            <p className="mt-2 text-sm text-gray-500">{product?.brand}</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default ProductCarouselCard
;
