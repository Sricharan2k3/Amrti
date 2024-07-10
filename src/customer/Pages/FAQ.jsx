import { useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      style={{ paddingTop: "100px" }}
    >
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="flex flex-col mb-16 sm:text-center">
          <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
        <div class="space-y-4">
          <Item title="What makes sesame oil unique compared to other cooking oils?">
            Sesame oil stands out for its rich nutty flavor and high antioxidant
            content, particularly sesamol. Its distinctive taste makes it a
            preferred choice in various cuisines, while its antioxidants offer
            potential health benefits.
          </Item>

          <Item title="Is groundnut oil suitable for high-heat cooking?">
            Yes, groundnut oil's high smoke point makes it ideal for
            high-temperature cooking methods like frying and sautéing without
            compromising its nutritional properties.
          </Item>

          <Item title="What are the health benefits associated with using safflower oil?">
            Safflower oil's high linoleic acid content is linked to potential
            heart health benefits, aiding in managing cholesterol levels. Its
            versatility and neutral taste also make it an excellent choice for
            various culinary applications.
          </Item>

          <Item title="What are the shipping options available for your oils?">
            We offer various shipping options based on your location. During the
            checkout process, you will be presented with available delivery
            choices, each with estimated delivery times.
          </Item>

          <Item title="How long does it take for orders to be processed and shipped?">
            Once an order is placed and confirmed, we aim to process and
            dispatch it within 4 business days. Estimated delivery times will be
            provided along with the order confirmation.
          </Item>

          <Item title="Can I cancel or modify my order after it has been placed?">
            Once an order is confirmed, changes or cancellations may be possible
            within a specific timeframe. Please reach out to our customer
            service team immediately for assistance.
          </Item>
        </div>
      </div>
    </div>
  );
};
