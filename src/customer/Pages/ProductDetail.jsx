/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { Button } from "@mui/material";
import oil from "./oil.jpg"
import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findProductById } from "../../State/Product/Action";
import { useNavigate, useParams } from "react-router-dom";
import { addItemToCart } from "../../State/Cart/Action";
import Compare from "./Compare";
import Kombucha from "./Kombucha";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: oil,
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: oil,
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: oil,
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: oil,
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
"Explore the goodness of our safflower oil in your daily routine. Crafted with care and quality in mind, its the perfect choice for health-conscious individuals and culinary enthusiasts alike",
  highlights: [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ],
  details:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eveniet aliquid, expedita praesentium quaerat perspiciatis et ab voluptatem cumque dolores eaque quisquam dolor dolorem nobis sequi ut vero libero culpa porro! Pariatur.",
};
const reviews = { href: "#", average: 4, totalCount: 117 };


export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const [activeImage, setActiveImage] = useState(null);

  const { customersProduct, review } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
   useEffect(() => {
     const data = { productId: productId, jwt };
     dispatch(findProductById(data));
   }, [productId]);
  const handleSetActiveImage = (image) => {
    setActiveImage(image);
  };
   const handleSubmit = () => {
     const data = { productId, size: selectedSize.name };
     dispatch(addItemToCart({ data, jwt }));
     navigate("/cart"); 
   };
       const a=customersProduct.product?.category?.name;

  return (
    <div className="mt-10 bg-white">
      <div className="pt-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center ">
            <div className=" overflow-hidden rounded-lg">
              <img src={
                  activeImage?.url || customersProduct.product?.imageUrl[0].url
                }
                alt={"product image"}
                className="h-[550px] w-[600px] object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {customersProduct.product?.imageUrl.map((image) =>
                image.url && image.url != "" ? (
                  <div
                    onClick={() => handleSetActiveImage(image)}
                    className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
                  >
                    <img
                      src={image.url}
                      alt="product image"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ) : null
              )}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 ">
              <h1
                className="text-lg lg:text-xl font-semibold text-gray-900"
                style={{ fontSize: "30px" }}
              >
                {customersProduct.product?.title}
              </h1>
              <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                {customersProduct.product?.brand}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>

              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="opacity-50 line-through">
                &#8377;{customersProduct.product?.price}
                </p>
                <p className="font-semibold">
                &#8377;{customersProduct.product?.discountedPrice}
                </p>
                <p className="text-green-600 font-semibold">
                  {" "}
                  {customersProduct.product?.discountPersent}% Off
                </p>
              </div>
              {/* Icons */}
              <div className="mt-10">
                <div class="grid grid-cols-4 row-gap-8">
                  <div class="text-center md:border-r">
                    <BackHandOutlinedIcon
                      style={{
                        fontSize: "50px",
                        border: "solid black 3px",
                        borderRadius: "50px",
                        padding: "5px",
                        color: "black",
                      }}
                    />
                    <p class="text-md font-bold tracking-widest">
                      Handpicked Seeds
                    </p>
                  </div>
                  <div class="text-center md:border-r">
                    <ClearOutlinedIcon
                      style={{
                        fontSize: "50px",
                        border: "solid black 3px",
                        borderRadius: "50px",
                        padding: "5px",
                        color: "black",
                      }}
                    />
                    <p class="text-md font-bold tracking-widest">
                      No Added Chemicals
                    </p>
                  </div>
                  <div class="text-center md:border-r">
                    <SpaOutlinedIcon
                      style={{
                        fontSize: "50px",
                        border: "solid black 3px",
                        borderRadius: "50px",
                        padding: "5px",
                        color: "black",
                      }}
                    />
                    <p class="text-md font-bold tracking-widest">
                      100% Natural
                    </p>
                  </div>
                  <div class="text-center md:border-r">
                    <VolunteerActivismOutlinedIcon
                      style={{
                        fontSize: "50px",
                        border: "solid black 3px",
                        borderRadius: "50px",
                        padding: "5px",
                        color: "black",
                      }}
                    />
                    <p class="text-md font-bold tracking-widest">
                      Good for Heart
                    </p>
                  </div>
                </div>
              </div>
              <form className="mt-10">
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  sx={{
                    px: "2rem",
                    py: "0.5rem",
                    bgcolor: "#9155fd",
                    borderRadius: "25px",
                  }}
                >
                  Add To Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {customersProduct.product?.description}
                  </p>
                </div>
              </div>

              {/* <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        {a == "350ml" ? (
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="  mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block"></span>
                <p> Highlights</p>
              </h2>
            </div>
            <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
              {customersProduct.product?.why.map((why) => (
                <div className="max-w-md sm:mx-auto sm:text-center">
                  <div
                    className="flex items-center justify-center w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24"
                    style={{}}
                  >
                    <img src={why.url} alt="" />
                  </div>
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    {why.heading}
                  </h6>
                  <p className="mb-3 text-md text-gray-900">{why.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="  mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block"></span>
                <p> Why Choose Our {customersProduct.product?.title}?</p>
              </h2>
            </div>
            <div className="grid gap-8 row-gap-10 lg:grid-cols-3">
              {customersProduct.product?.why.map((why) => (
                <div className="max-w-md sm:mx-auto sm:text-center">
                  <div
                    className="flex items-center justify-center w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24"
                    style={{}}
                  >
                    <img src={why.url} alt="" />
                  </div>
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    {why.heading}
                  </h6>
                  <p className="mb-3 text-md text-gray-900">{why.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h2 className=" text-center mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            {a == "350ml" ? (
              <></>
            ) : a == "500g" ? (
              <p> Highlights</p>
            ) : (
              <p> Ways to Enjoy Our {customersProduct.product?.title}</p>
            )}
          </h2>
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {customersProduct.product?.enjoy.map((enjoy) => (
              <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <img
                  src={enjoy.url}
                  className="object-cover w-full h-72"
                  alt=""
                />
                <div className="p-5 border border-t-0 h-full">
                  <a
                    href="/"
                    aria-label="Category"
                    title="Visit the East"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    {enjoy.heading}
                  </a>
                  <p className="mb-2 text-gray-700">{enjoy.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {a == "350ml" ? <Kombucha /> : a == "500g" ? <></> : <Compare />}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
