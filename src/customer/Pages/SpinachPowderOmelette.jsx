import React from "react";
import chickpeaStirFryImage from "./Chickpea.jpg"; // Make sure the path matches your file structure

const SpinachPowder = () => {
  return (
    <div className="max-w-screen-lg mx-auto" style={{ paddingTop: "45px" }}>
      <h1 className="text-4xl font-bold text-center my-8">Spinach Powder Omelette
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
       
          <li>3 eggs</li>
          <li>1 tablespoon Amrti’s spinach powder</li>
          <li>2 tablespoons milk (optional)</li>
          <li>Salt and pepper to taste</li>
          <li>1/4 cup shredded cheese (optional)</li>
          <li>1/4 cup diced vegetables (e.g., bell peppers, onions, tomatoes)</li>
        </ul>


        <h2 className="text-2xl font-semibold mb-4">Instructions:</h2>
        <ol className="list-decimal list-inside">
          <li>
          In a bowl, whisk together eggs, Amrti’s spinach powder, milk, salt, and pepper.
          </li>
          <li>
          Heat a non-stick pan over medium heat and lightly grease it.
          </li>
          <li>
          Pour the egg mixture into the pan.
          </li>
          <li>
          Add cheese and diced vegetables if desired.
          </li>
          Cook until the eggs are set, then fold the omelette in half and serve.
        </ol>
      </div>
    </div>
  );
};

export default SpinachPowder;
