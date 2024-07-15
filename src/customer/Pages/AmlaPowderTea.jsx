import React from "react";
import chickpeaStirFryImage from "./Chickpea.jpg"; // Make sure the path matches your file structure

const AmlaPowder = () => {
  return (
    <div className="max-w-screen-lg mx-auto" style={{ paddingTop: "45px" }}>
      <h1 className="text-4xl font-bold text-center my-8">Amla Powder
      </h1>
      <div className="w-full">
        <img
          src={chickpeaStirFryImage}
          alt="Chickpea Stir-Fry"
          className="w-full object-cover h-64 md:h-96"
        />
      </div>
      <div className="px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Ingredients:</h2>
        <ul className="list-disc list-inside mb-8">
       
          <li>1 cup hot water</li>
          <li>1 teaspoon Amrti’s amla powder</li>
          <li>1 teaspoon honey (optional)</li>
          <li>1/2 teaspoon grated ginger (optional)</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Instructions:</h2>
        <ol className="list-decimal list-inside">
          <li>
          Boil water and pour into a cup.
          </li>
          <li>
          Stir in Amrti’s amla powder, honey, and grated ginger.
          </li>
          <li>
          Let it steep for a few minutes before drinking.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default AmlaPowder;
