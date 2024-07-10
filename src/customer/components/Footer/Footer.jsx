import React, { useState } from "react";
const Footer = () => {
   const [activeCategory, setActiveCategory] = useState("Oils");

  const categories = {
    Oils: [
      { name: "Safflower", link: "/product/65b4e0f56d5fdf8013a98d53" },
      { name: "Sesame", link: "/product/65b0b2ec84905519fd15883b" },
      { name: "Sunflower", link: "/product/65cb4006dcfb76224065c7c4" },
      { name: "GroundNut", link: "/product/65cb37b3dcfb76224065c17e" },
      { name: "Mustard", link: "/product/65cb3d21dcfb76224065c5c8" },
    ],
    Kombucha: [
      { name: "Pomegranate", link: "/product/65c4b7f5dcfb762240655c67" },
      { name: "Mint Mojito", link: "/product/65c4b8e2dcfb762240656117" },
      { name: "Strawberry", link: "/product/65c4b92cdcfb76224065615e" },
      { name: "Lemon", link: "/product/65c4b974dcfb7622406561ac" },
      { name: "Ginger", link: "/product/65c4a934dcfb762240654f78" },
    ],
    Spices: [{ name: "Turmeric", link: "/product/65e8567763429a82a0a1f804" }],
    Staples: [
      { name: "Rajma", link: "/product/65eeff7163429a82a0a20628" },
      { name: "GroundNut", link: "/product/65eefa2963429a82a0a20489" },
    ],
  };
  return (
    <div id="footer">
      <footer class="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        <div class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
          <div class="mr-12 hidden lg:block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div class="flex justify-center">
            <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>

            <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Products
              </h6>
              {Object.keys(categories).map((category) => (
                <p key={category} className="mb-4">
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`text-neutral-600 dark:text-neutral-200 ${
                      activeCategory === category ? "font-bold" : ""
                    }`}
                  >
                    {category}
                  </button>
                </p>
              ))}
            </div>

            {activeCategory && (
              <div>
                <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  {activeCategory}
                </h6>
                {categories[activeCategory].map((subcategory) => (
                  <p key={subcategory.name} className="mb-4">
                    <a
                      href={subcategory.link}
                      className="text-neutral-600 dark:text-neutral-200"
                    >
                      {subcategory.name}
                    </a>
                  </p>
                ))}
              </div>
            )}

            {/* Other sections can be added here */}
            <div class="">
              <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Useful links
              </h6>
              {/* <p class="mb-4">
                <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                  About Us
                </a>
              </p> */}
              <p class="mb-4">
                <a
                  href="/privacy"
                  class="text-neutral-600 dark:text-neutral-200"
                >
                  Privacy Policy
                </a>
              </p>
              <p class="mb-4">
                <a
                  href="/shipping"
                  class="text-neutral-600 dark:text-neutral-200"
                >
                  Shipping Policy
                </a>
              </p>
              <p class="mb-4">
                <a
                  href="/return"
                  class="text-neutral-600 dark:text-neutral-200"
                >
                  Returns & Refund Policy
                </a>
              </p>

              <p class="mb-4">
                <a href="/TnC" class="text-neutral-600 dark:text-neutral-200">
                  Terms and Conditions
                </a>
              </p>
              <p>
                <a href="/faq" class="text-neutral-600 dark:text-neutral-200">
                  FAQs
                </a>
              </p>
            </div>
            <div>
              <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p class="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="mr-3 h-5 w-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                Plot no 27, Nandi Hills, Road no 51, Jubliee Hills, Hyderabad,
                500033
              </p>
              <p class="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="mr-3 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                contact@amrti.com
              </p>
              <p class="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="mr-3 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                +91 73867 27007
              </p>
            </div>
          </div>
        </div>

        <div class="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
          <span>© 2024 Copyright: </span>
          <a class="font-semibold text-neutral-600 dark:text-neutral-400">
            Agros link Pvt. All Rights Reserved.
          </a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;