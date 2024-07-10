import React from "react";
import tempuraImage from "./Tempura.jpg"; // Update the import path and image file name as necessary

const CrispyVegetableTempura = () => {
  return (
    <div className="max-w-screen-lg mx-auto" style={{ paddingTop: "45px" }}>
      <h1 className="text-4xl font-bold text-center my-8">
        Crispy Vegetable Tempura
      </h1>
      <div className="w-full">
        <img
          src={tempuraImage}
          alt="Crispy Vegetable Tempura"
          className="w-full object-cover h-64 md:h-96"
        />
      </div>
      <div className="px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Ingredients:</h2>
        <p className="font-semibold">For the tempura batter:</p>
        <ul className="list-disc list-inside mb-4">
          <li>1 cup (125g) all-purpose flour</li>
          <li>1 tablespoon cornstarch</li>
          <li>1 cup (240ml) ice-cold sparkling water</li>
          <li>1/2 teaspoon salt</li>
          <li>1/4 teaspoon baking powder</li>
        </ul>
        <p className="font-semibold">
          For the vegetables (choose any combination you like):
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>1 small sweet potato, thinly sliced</li>
          <li>1 small zucchini, thinly sliced</li>
          <li>1 small eggplant, thinly sliced</li>
          <li>1 red bell pepper, thinly sliced</li>
          <li>1 yellow bell pepper, thinly sliced</li>
          <li>Any other vegetables of your choice</li>
        </ul>
        <p className="font-semibold">For frying:</p>
        <ul className="list-disc list-inside mb-8">
          <li>
            <span style={{ fontWeight: "bold" }}>Amrti's Sunflower Oil</span>
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Instructions:</h2>
        <ol className="list-decimal list-inside">
          <li>
            Wash and dry the vegetables thoroughly. Cut them into thin slices or
            bite-sized pieces. Ensure they are uniform in size for even cooking.
          </li>
          <li>
            In a large mixing bowl, whisk together all-purpose flour,
            cornstarch, salt, and baking powder. Gradually pour in the ice-cold
            sparkling water while stirring gently. Mix until the batter is
            smooth, but do not overmix. It's okay if there are lumps.
          </li>
          <li>
            In a deep fryer or large pot, heat Amrti's Sunflower Oil to 350°F
            (180°C). Make sure there is enough oil to fully submerge the
            vegetables.
          </li>
          <li>
            Dip the sliced vegetables into the tempura batter, ensuring they are
            fully coated. Carefully place the battered vegetables into the hot
            oil, a few at a time, making sure not to overcrowd the pot. Fry in
            batches if necessary.
          </li>
          <li>
            Fry the vegetables for 2-3 minutes, or until they are golden brown
            and crispy. Use a slotted spoon or tongs to remove the fried
            vegetables from the oil and transfer them to a plate lined with
            paper towels to drain excess oil.
          </li>
          <li>Serve the crispy vegetable tempura immediately while hot.</li>
        </ol>
      </div>
    </div>
  );
};

export default CrispyVegetableTempura;
