import React from "react";
import chickpeaStirFryImage from "./Chickpea.jpg"; // Make sure the path matches your file structure

const Papayapowder = () => {
  return (
    <div className="max-w-screen-lg mx-auto" style={{ paddingTop: "45px" }}>
      <h1 className="text-4xl font-bold text-center my-8">Papaya Powder Overnight Oats
      </h1>
      <div className="w-full">
        <img
          src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/Papaya-Powder-in.png"
          alt="Chickpea Stir-Fry"
          className="w-full object-cover h-64 md:h-96"
        />
      </div>
      <div className="px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Ingredients:</h2>
        <ul className="list-disc list-inside mb-8">
       
          <li>1/2 cup rolled oats</li>
          <li>1 tablespoon Amrti’s papaya powder</li>
          <li>1 tablespoon chia seeds (optional)</li>
          <li>1 cup milk or plant-based milk</li>
          <li>1 tablespoon honey or maple syrup</li>
          <li>Fresh fruit and nuts for topping</li>
        
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Instructions:</h2>
        <ol className="list-decimal list-inside">
          <li>
          In a jar or bowl, combine rolled oats, Amrti’s papaya powder, chia seeds, milk, and honey.
          </li>
          <li>
          Stir well and cover.
          </li>
          <li>
          Refrigerate overnight or for at least 4 hours.
          </li>
          <li>
          In the morning, top with fresh fruit and nuts before serving.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Papayapowder;
