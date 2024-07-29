import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Assume these imports are correct and available
import { findProductById } from '../../State/Product/Action';
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { customersProduct } = useSelector((store) => store);
  
  const [selectedOption, setSelectedOption] = useState('powder');
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const data = { productId, jwt: localStorage.getItem('jwt') };
    dispatch(findProductById(data));
  }, [productId, dispatch]);

  useEffect(() => {
    if (customersProduct.product?.imageUrl?.length > 0) {
      setActiveImage(customersProduct.product.imageUrl[0]);
    }
  }, [customersProduct.product]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    // Update image based on option
    const newImage = customersProduct.product?.imageUrl.find(img => img.type === option);
    if (newImage) {
      setActiveImage(newImage);
    }
  };

  const getPrice = () => {
    return selectedOption === 'powder' 
      ? customersProduct.product?.powderPrice 
      : customersProduct.product?.pouchPrice;
  };

  const getDiscountedPrice = () => {
    return selectedOption === 'powder' 
      ? customersProduct.product?.powderDiscountedPrice 
      : customersProduct.product?.pouchDiscountedPrice;
  };

  const handleAddToCart = async () => {
    try {
      const token = getCookie('jwtToken');
      const response = await fetch('https://amrti-main-backend.vercel.app/api/v1/amrti/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ 
          productId,
          option: selectedOption
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      toast.success('Product added to cart successfully!');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      toast.error('Failed to add product to cart.');
    }
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  if (!customersProduct.product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-10 bg-white">
      <ToastContainer />
      <div className="pt-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg">
              <img
                src={activeImage?.url || customersProduct.product?.imageUrl[0].url}
                alt="product image"
                className="h-[550px] w-[600px] object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {customersProduct.product?.imageUrl.map((image) => (
                image.url && (
                  <div
                    key={image.url}
                    onClick={() => setActiveImage(image)}
                    className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4"
                  >
                    <img
                      src={image.url}
                      alt="product image"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                )
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <h1 className="text-lg lg:text-xl font-semibold text-gray-900" style={{ fontSize: "30px" }}>
              {customersProduct.product?.title}
            </h1>
            <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
              {customersProduct.product?.brand}
            </h1>

            {/* Option Selection */}
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-900">Select Option:</h3>
              <div className="mt-2">
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    className="form-radio"
                    name="option"
                    value="powder"
                    checked={selectedOption === 'powder'}
                    onChange={() => handleOptionChange('powder')}
                  />
                  <span className="ml-2">Powder Box</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="option"
                    value="pouch"
                    checked={selectedOption === 'pouch'}
                    onChange={() => handleOptionChange('pouch')}
                  />
                  <span className="ml-2">Pouches</span>
                </label>
              </div>
            </div>

            {/* Price */}
            <div className="mt-4 flex space-x-5 items-center text-lg lg:text-xl text-gray-900">
              <p className="opacity-50 line-through">&#8377;{getPrice()}</p>
              <p className="font-semibold">&#8377;{getDiscountedPrice()}</p>
              <p className="text-green-600 font-semibold">
                {customersProduct.product?.discountPersent}% Off
              </p>
            </div>

            {/* Icons */}
            <div className="mt-10">
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <BackHandOutlinedIcon style={{ fontSize: "50px", border: "solid black 3px", borderRadius: "50px", padding: "5px", color: "black" }} />
                  <p className="text-md font-bold tracking-widest">Handpicked Seeds</p>
                </div>
                <div className="text-center">
                  <ClearOutlinedIcon style={{ fontSize: "50px", border: "solid black 3px", borderRadius: "50px", padding: "5px", color: "black" }} />
                  <p className="text-md font-bold tracking-widest">No Added Chemicals</p>
                </div>
                <div className="text-center">
                  <SpaOutlinedIcon style={{ fontSize: "50px", border: "solid black 3px", borderRadius: "50px", padding: "5px", color: "black" }} />
                  <p className="text-md font-bold tracking-widest">100% Natural</p>
                </div>
                <div className="text-center">
                  <VolunteerActivismOutlinedIcon style={{ fontSize: "50px", border: "solid black 3px", borderRadius: "50px", padding: "5px", color: "black" }} />
                  <p className="text-md font-bold tracking-widest">Good for Heart</p>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-10">
              <Button
                onClick={handleAddToCart}
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
            </div>

            {/* Description */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <div className="mt-4">
                <p className="text-base text-gray-900">{customersProduct.product?.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <p>Highlights</p>
            </h2>
          </div>
          <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
            {customersProduct.product?.why.map((why, index) => (
              <div key={index} className="max-w-md sm:mx-auto sm:text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full sm:mx-auto sm:w-24 sm:h-24">
                  <img src={why.url} alt="" />
                </div>
                <h6 className="mb-3 text-xl font-bold leading-5">{why.heading}</h6>
                <p className="mb-3 text-md text-gray-900">{why.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ways to Enjoy Section */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h2 className="text-center mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <p>Ways to Enjoy Our {customersProduct.product?.title}</p>
          </h2>
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {customersProduct.product?.enjoy.map((enjoy, index) => (
              <div key={index} className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <img src={enjoy.url} className="object-cover w-full h-72" alt="" />
                <div className="p-5 border border-t-0 h-full">
                  <a href="/" className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
                    {enjoy.heading}
                  </a>
                  <p className="mb-2 text-gray-700">{enjoy.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;