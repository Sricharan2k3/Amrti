import React from "react";
import chickpeaStirFryImage from "./Chickpea.jpg"; // Make sure the path matches your file structure

const BeetRootPowder = () => {
  return (
    <div className="max-w-screen-lg mx-auto" style={{ paddingTop: "45px" }}>
      <h1 className="text-4xl font-bold text-center my-8">BeetRootPowder
      </h1>
      <div className="w-full">
        <img
          src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/Beetroot-Powder-Latte-in.png"
          alt="Chickpea Stir-Fry"
          className="w-full object-cover h-64 md:h-96"
        />
      </div>
      <div className="px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Ingredients:</h2>
        <ul className="list-disc list-inside mb-8">
       
          <li>1 cup milk (or plant-based milk)</li>
          <li>1 teaspoon Amrti’s beetroot powder</li>
          <li>1 teaspoon honey or maple syrup</li>
          <li>1/2 teaspoon vanilla extract</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Instructions:</h2>
        <ol className="list-decimal list-inside">
          <li>
          Heat the milk in a small saucepan over medium heat.
          </li>
          <li>
          Whisk in the Amrti’s beetroot powder, honey, and vanilla extract until well combined.
          </li>
          <li>
          Pour into a mug and enjoy warm.

          </li>
        </ol>
      </div>
    </div>
  );
};

export default BeetRootPowder;
