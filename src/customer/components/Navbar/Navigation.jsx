import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "./Logo.png";
import AuthModal from "../Auth/AuthModal";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getUser, logout } from "../../../State/Auth/Action";
import { getCart } from "../../../State/Cart/Action";
const navigation = {
  categories: [
    {
      id: "men",
      name: "Products",
      featured: [
        {
          name: "New Arrival",
          href: "#",
          imageSrc: logo,
          imageAlt: "img",
        },
        {
          name: "Bestseller",
          href: "#",
          imageSrc: logo,
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        // {
        //   id: "clothing",
        //   name: "Oils",
        //   items: [
        //     { name: "Safflower", href: "/product/65b4e0f56d5fdf8013a98d53" },
        //     { name: "Sesame", href: "/product/65b0b2ec84905519fd15883b" },
        //     { name: "Sunflower", href: "/product/65cb4006dcfb76224065c7c4" },
        //     { name: "GroundNut", href: "/product/65cb37b3dcfb76224065c17e" },
        //     { name: "Mustard", href: "/product/65cb3d21dcfb76224065c5c8" },
        //   ],
        // },
        {
          id: "kombucha",
          name: "Kombucha",
          items: [
            { name: "Pomegranate", href: "/product/65c4b7f5dcfb762240655c67" },
            { name: "Mint Mojito", href: "/product/65c4b8e2dcfb762240656117" },
            { name: "Strawberry", href: "/product/65c4b92cdcfb76224065615e" },
            { name: "Lemon", href: "/product/65c4b974dcfb7622406561ac" },
            { name: "Ginger", href: "/product/65c4a934dcfb762240654f78" },
          ],
        },
        {
          id: "spices",
          name: "Spices",
          items: [
            { name: "Turmeric", href: "/product/65e8567763429a82a0a1f804" },
          ],
        },
        {
          id: "powders",
          name: "Powders",
          items: [
            { name: "Tomato Powder", href: "/product/65e8567763429a82a0a1f804" },
            { name: "Moringa Powder", href: "/product/65e8567763429a82a0a1f804" },
            { name: "Papaya Powder", href: "/product/65e8567763429a82a0a1f804" },
            { name: "Beetroot Powder", href: "/product/65e8567763429a82a0a1f804" },
            { name: "Spinach Powder", href: "/product/65e8567763429a82a0a1f804" },
            { name: "Amla Powder", href: "/product/65e8567763429a82a0a1f804" },
          ],
        },
        // {
        //   id: "staples",
        //   name: "Staples",
        //   items: [
        //     { name: "Rajma", href: "/product/65eeff7163429a82a0a20628" },
        //     { name: "GroundNut", href: "/product/65eefa2963429a82a0a20489" },
        //   ],
        // },
        // {
        //   id: "brands",
        //   name: "Ghee",
        //   items: [
        //     { name: "Sunflower", href: "#" },
        //     { name: "GroundNut", href: "#" },
        //     { name: "Sunflower", href: "#" },
        //     { name: "GroundNut", href: "#" },
        //   ],
        // },
      ],
    },
  ],
  pages: [
    { name: "Hom", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Recipes", href: "/recipes" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const { auth, cart } = useSelector((store) => store);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const jwt = localStorage.getItem("jwt");
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const handleOpen = () => {
    setOpenAuthModal(true);
  };
  const handleClose = () => {
    setOpenAuthModal(false);
  };
  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
      dispatch(getCart(jwt));
    }
  }, [jwt]);
  const handleMyOrderClick = () => {
    handleCloseUserMenu();
    navigate("/orders");
  };
  useEffect(() => {
    if (auth.user) {
      handleClose();
    }
    if (
      auth.user?.role !== "ADMIN" &&
      (location.pathname === "/login" || location.pathname === "/register")
    ) {
      navigate(-1);
    }
  }, [auth.user]);
  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    handleCloseUserMenu();
    dispatch(logout());
  };
  const handleContactUsClick = () => {
    // Scroll to the footer section when "Contact Us" is clicked
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  };
  const [hoveredSection, setHoveredSection] = useState("Oils");

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

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div
                              key={item.name}
                              className="group relative text-sm"
                            >
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img
                                  src={item.imageSrc}
                                  alt={item.imageAlt}
                                  className="object-cover object-center"
                                />
                              </div>
                              <a
                                href={item.href}
                                className="mt-6 block font-medium text-gray-900"
                              >
                                <span
                                  className="absolute inset-0 z-10"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${category.id}-${section.id}-heading-mobile`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a
                                    href={item.href}
                                    className="-m-2 block p-2 text-gray-500"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

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
                  <div className="flow-root">
                    <a
                      onClick={handleOpen}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Sign in
                    </a>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
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
                    style={{ height: "200px", width: "auto", margin: "0" }}
                    src={logo}
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate(`${page.href}`)}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </div>
                  ))}

                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-indigo-600 text-indigo-600"
                                  : "border-transparent text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                      {category.featured.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative text-base sm:text-sm"
                                        >
                                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <img
                                              src={item.imageSrc}
                                              alt={item.imageAlt}
                                              className="object-cover object-center"
                                            />
                                          </div>
                                          <a
                                            href={item.href}
                                            className="mt-6 block font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0 z-10"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      ))}
                                    </div>
                                    <div
                                      className="row-start-1 grid grid-cols-1 gap-x-8 text-sm"
                                      style={{ height: "100px" }}
                                    >
                                      {category.sections.map((section) => (
                                        <div
                                          key={section.name}
                                          onClick={() =>
                                            setHoveredSection(section.name)
                                          }
                                          className="flex items-start" // Ensure items are aligned at the start and in a row
                                          style={{ margin: "10px" }}
                                        >
                                          <p
                                            id={`${section.name}-heading`}
                                            className={`font-xl text-gray-900 cursor-pointer ${
                                              hoveredSection === section.name
                                                ? "underline"
                                                : "" 
                                            }`}
                                            style={{
                                              fontWeight: "bold",
                                              fontSize: "25px",
                                              minWidth: "200px",
                                            }}
                                          >
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className={`ml-6 space-y-6 sm:ml-4 sm:space-y-4
                                            `}
                                            style={{
                                              display:
                                                hoveredSection === section.name
                                                  ? "block"
                                                  : "none",
                                              zIndex: "1000",
                                              position: "relative",
                                              height: "0",
                                            }}
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <Popover.Button>
                                                  <a
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                      navigate(`${item.href}`)
                                                    }
                                                    className="hover:text-gray-800"
                                                  >
                                                    {item.name}
                                                  </a>
                                                </Popover.Button>
                                              </li>
                                            ))}
                                          </ul>
                                          <br />
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}
                  <a
                    onClick={handleContactUsClick}
                    style={{ cursor: "pointer" }}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Contact Us
                  </a>
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {auth.user ? (
                    <div>
                      <Avatar
                        className="text-white"
                        // onClick={handleUserClick}
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleUserClick}
                        sx={{
                          bgcolor: "green",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {auth.user?.firstName[0].toUpperCase()}
                      </Avatar>
                      {/* <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleUserClick}
                      >
                        Dashboard
                      </Button> */}
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                        style={{ zIndex: "500" }}
                      >
                        {/* <MenuItem onClick={handleCloseUserMenu}>
                          Profile
                        </MenuItem> */}

                        <MenuItem onClick={handleMyOrderClick}>
                          My Orders
                        </MenuItem>
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

                {auth.user ? (
                  <div className="ml-4 flow-root lg:ml-6">
                    <Button
                      onClick={() => navigate("/cart")}
                      className="group -m-2 flex items-center p-2"
                    >
                      <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        {cart.cart?.totalItem}
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </Button>
                  </div>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </div>
  );
}
