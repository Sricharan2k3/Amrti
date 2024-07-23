import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import amrti from "./amrti.png";
import AuthModal from "../Auth/AuthModal";

const navigation = {
  categories: [
    {
      id: "products",
      name: "Products",
      featured: [
        {
          name: "New Arrival",
          href: "#",
          imageSrc: "path-to-new-arrival-image",
          imageAlt: "New Arrival",
        },
        {
          name: "Bestseller",
          href: "#",
          imageSrc: "path-to-bestseller-image",
          imageAlt: "Bestseller",
        },
      ],
      sections: [
        {
          id: "powders",
          name: "Powders",
          items: [
            { name: "Turmeric Powder", href: "/product/65b4e0f56d5fdf8013a98d53" },
            { name: "Moringa Powder", href: "/product/65b0b2ec84905519fd15883b" },
            { name: "Papaya Powder", href: "/product/65cb37b3dcfb76224065c17e" },
            { name: "Beetroot Powder", href: "/product/65cb4006dcfb76224065c7c4" },
            { name: "Spinach Powder", href: "/product/65cb3d21dcfb76224065c5c8" },
            { name: "Amla Powder", href: "/product/6694bf76da8c2b2bddf64753" },
            { name: "Tomato Powder", href: "/product/6694c2ccda8c2b2bddf64754" },
          ],
        },
        {
          id: "kombucha",
          name: "Kombucha",
          items: [
            { name: "Pomegranate", href: "/product/65c4b7f5dcfb762240655c67" },
            { name: "Mint Mojito", href: "/product/65c4b8e2dcfb762240656117" },
            { name: "Strawberry", href: "/product/65c4b92cdcfb76224065615e" },
            { name: "Lemon", href: "/product/65c4b974dcfb7622406561ac" },
            { name: "Ginger", href: "/product/6690f8f78f02fac15bb60ce7" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Recipes", href: "/recipes" },
    { name: "Products", href: "/products" }
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = getCookie("jwtToken");
    if (token) {
      setIsLoggedIn(true);
      const decodedToken = decodeJWT(token);
      setUserRole(decodedToken.role);
      setUserName(decodedToken.name || "User");
      // fetchCartItemCount(token);
    }
  }, []);

  const handleOpen = () => setOpenAuthModal(true);
  const handleClose = () => setOpenAuthModal(false);
  const handleUserClick = (event) => setAnchorEl(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorEl(null);

  const handleLogout = () => {
    handleCloseUserMenu();
    document.cookie = "jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    setUserRole(null);
    setUserName("");
    setCartItemCount(0);
    navigate("/");
  };

  const handleMyOrderClick = () => {
    handleCloseUserMenu();
    navigate("/orders");
  };

  const handleContactUsClick = () => {
    const footer = document.getElementById("footer");
    if (footer) footer.scrollIntoView({ behavior: "smooth" });
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const decodeJWT = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      console.error("Error decoding JWT", e);
      return {};
    }
  };

  const token = getCookie('jwtToken');
  

  useEffect(() => {
    async function fetchCart() {
    
      if (!token) {
        console.error("No token found")
        return
      }

      try {
        const response = await fetch("https://amrti-main-backend.vercel.app/api/v1/amrti/cart/getCart", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        if (!response.ok) {
          throw new Error("Failed to fetch cart data")
        }
        const data = await response.json()
        console.log(data)
        setCartItemCount(data.data.cart.totalItem)
      
        // Assuming totalPrice is in cents
      } catch (error) {
        console.error("Error fetching cart:", error)
      }
    }

    fetchCart()
  }, [])

  return (
    <div style={{ backgroundColor: "#f9f1e1" }}>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {isLoggedIn ? (
                    <div className="flow-root">
                      <a
                        onClick={handleLogout}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Logout
                      </a>
                    </div>
                  ) : (
                    <div className="flow-root">
                      <a
                        onClick={handleOpen}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Sign in
                      </a>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <img
                    className="logo"
                    style={{ height: "80px", width: "auto", margin: "0" }}
                    src={amrti}
                    alt="Amrti Logo"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                  <a
                    onClick={handleContactUsClick}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer"
                  >
                    Contact Us
                  </a>
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {isLoggedIn ? (
                    <div>
                      <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        sx={{
                          bgcolor: "green",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {userName[0].toUpperCase()}
                      </Avatar>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        {userRole === "ADMIN" && (
                          <MenuItem onClick={() => navigate("/admin")}>
                            Admin Dashboard
                          </MenuItem>
                        )}
                        <MenuItem onClick={handleMyOrderClick}>My Orders</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Button
                      onClick={handleOpen}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Sign in
                    </Button>
                  )}
                </div>

                {/* Cart */}
                {isLoggedIn && (
                  <div className="ml-4 flow-root lg:ml-6">
                    <a href="/cart" className="group -m-2 flex items-center p-2">
                      <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        {cartItemCount}
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Auth Modal */}
      {openAuthModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            {/* Your authentication modal content */}
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
       <AuthModal handleClose={handleClose} open={openAuthModal} />
                {/* Add your sign-in form here */}
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}