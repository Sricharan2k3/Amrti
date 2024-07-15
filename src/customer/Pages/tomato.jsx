import React from "react";
import chickpeaStirFryImage from "./Chickpea.jpg"; // Make sure the path matches your file structure

const Tomato = () => {
  return (
    <div className="max-w-screen-lg mx-auto" style={{ paddingTop: "45px" }}>
      <h1 className="text-4xl font-bold text-center my-8">Tomato Powder Popcorn
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
       
          <li>1/4 cup popcorn kernels</li>
          <li>2 tablespoons olive oil or butter</li>
          <li>1 tablespoon Amrti’s tomato powder</li>
          <li>1 teaspoon garlic powder</li>
          <li>Salt to taste</li>

        </ul>


        <h2 className="text-2xl font-semibold mb-4">Instructions:</h2>
        <ol className="list-decimal list-inside">
          <li>
          Heat oil in a large pot over medium-high heat.
          </li>
          <li>
          Add popcorn kernels and cover with a lid.
          </li>
          <li>
          Shake the pot occasionally until the popping slows down.
          </li>
          <li>
          Remove from heat and transfer popcorn to a large bowl.
          </li>
          Sprinkle with Amrti’s tomato powder, garlic powder, and salt. Toss to coat evenly.
        </ol>
      </div>
    </div>
  );
};

export default Tomato;
