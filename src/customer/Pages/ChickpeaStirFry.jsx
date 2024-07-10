import React from "react";
import chickpeaStirFryImage from "./Chickpea.jpg"; // Make sure the path matches your file structure

const ChickpeaStirFry = () => {
  return (
    <div className="max-w-screen-lg mx-auto" style={{ paddingTop: "45px" }}>
      <h1 className="text-4xl font-bold text-center my-8">Chickpea Stir-Fry</h1>
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
          <li>
            2 tablespoons 
            <span style={{ fontWeight: "bold" }}>Amrti groundnut oil</span>
          </li>
          <li>2 cloves garlic, minced</li>
          <li>1 onion, thinly sliced</li>
          <li>1 bell pepper, thinly sliced</li>
          <li>1 carrot, julienned</li>
          <li>1 cup mushrooms, sliced</li>
          <li>1 can (15 ounces) chickpeas, drained and rinsed</li>
          <li>3 tablespoons soy sauce</li>
          <li>1 tablespoon rice vinegar</li>
          <li>1 teaspoon sesame oil</li>
          <li>
            1 teaspoon cornstarch mixed with 2 tablespoons water (optional, for
            thickening)
          </li>
          <li>Salt and pepper to taste</li>
          <li>Cooked rice or noodles, for serving</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Instructions:</h2>
        <ol className="list-decimal list-inside">
          <li>
            Mince the garlic, thinly slice the onion and bell pepper, julienne
            the carrot, and slice the mushrooms.
          </li>
          <li>
            Heat Amrti's Groundnut Oil in a large skillet or wok over
            medium-high heat.
          </li>
          <li>
            Add minced garlic to the hot oil and sauté for about 30 seconds
            until fragrant.
          </li>
          <li>
            Add thinly sliced onions and cook until they are translucent, about
            2-3 minutes.
          </li>
          <li>
            Add bell pepper, carrot, and mushrooms to the skillet. Stir-fry for
            about 5 minutes until the vegetables are slightly tender.
          </li>
          <li>
            Add drained and rinsed chickpeas to the skillet and stir to combine.
          </li>
          <li>
            In a small bowl, mix together soy sauce, rice vinegar, and sesame
            oil. Pour the mixture over the vegetables and chickpeas.
          </li>
          <li>
            Stir well to ensure everything is coated evenly. Cook for another
            2-3 minutes.
          </li>
          <li>
            If desired, mix cornstarch with water to create a slurry. Pour it
            into the skillet and stir well. Allow the sauce to thicken slightly,
            about 1-2 minutes.
          </li>
          <li>
            Taste the stir-fry and adjust the seasoning with salt and pepper if
            needed.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ChickpeaStirFry;
