import React from "react";
import chickpeaStirFryImage from "./Chickpea.jpg"; // Make sure the path matches your file structure

const MooringaSoothie = () => {
  return (
    <div className="max-w-screen-lg mx-auto" style={{ paddingTop: "45px" }}>
      <h1 className="text-4xl font-bold text-center my-8">Moringa Smoothie
      </h1>
      <div className="w-full">
        <img
          src="https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/moringa-smoothie-in.png"
          alt="Chickpea Stir-Fry"
          className="w-full object-cover h-64 md:h-96"
        />
      </div>
      <div className="px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Ingredients:</h2>
        <ul className="list-disc list-inside mb-8">
       
          <li>1 banana</li>
          <li>1 cup spinach</li>
          <li>1 cup almond milk (or any milk of your choice)</li>
          <li>1 tablespoon Amrti’s moringa powder</li>
          <li>1 tablespoon honey or maple syrup (optional)</li>
          <li>Ice cubes</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Instructions:</h2>
        <ol className="list-decimal list-inside">
          <li>
          Combine all ingredients in a blender.
          </li>
          <li>
          Blend until smooth.
          </li>
          <li>
          Pour into a glass and enjoy!
          </li>
        </ol>
      </div>
    </div>
  );
};

export default MooringaSoothie;
