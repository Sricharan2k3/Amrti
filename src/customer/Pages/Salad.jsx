import React from "react";
import gardenSaladImage from "./salad.jpg";

const Salad = () => {
  return (
    <div className="max-w-screen-lg mx-auto" style={{ paddingTop: "45px" }}>
      <h1 className="text-4xl font-bold text-center my-8">Garden Salad</h1>
      <div className="w-full">
        <img
          src={gardenSaladImage}
          alt="Garden Salad"
          className="w-full object-cover h-64 md:h-96"
        />
      </div>
      <div className="px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Ingredients:</h2>
        <ul className="list-disc list-inside mb-8">
          <li>4 cups mixed salad greens (lettuce, spinach, arugula, etc.)</li>
          <li>1 cup cherry tomatoes, halved</li>
          <li>1 cucumber, sliced</li>
          <li>1 bell pepper, sliced</li>
          <li>1/4 red onion, thinly sliced</li>
          <li>
            Optional: sliced carrots, radishes, or any other favorite vegetables
          </li>
          <h3 className="text-xl font-semibold mb-2">For the dressing:</h3>
          <li>
            3 tablespoons{" "}
            <span style={{ fontWeight: "bold" }}>Amrti's Safflower Oil</span>
          </li>
          <li>2 tablespoons balsamic vinegar or apple cider vinegar</li>
          <li>1 teaspoon Dijon mustard</li>
          <li>1 teaspoon honey or maple syrup</li>
          <li>Salt and pepper to taste</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Instructions:</h2>
        <ol className="list-decimal list-inside">
          <li>Wash and dry all the salad greens and vegetables.</li>
          <li>
            Tear or chop the salad greens into bite-sized pieces and place in a
            large salad bowl.
          </li>
          <li>
            Add the cherry tomatoes, cucumber, bell pepper, red onion, and any
            other vegetables to the bowl.
          </li>
          <li>
            In a small bowl, whisk together the safflower oil, vinegar, Dijon
            mustard, honey (or maple syrup), salt, and pepper until well
            combined.
          </li>
          <li>
            Pour the dressing over the salad and toss gently until evenly
            coated.
          </li>
          <li>
            Divide the salad among plates or bowls and serve, optionally
            garnished with more pepper or fresh herbs.
          </li>
        </ol>
      </div>
      <div style={{ height: "200px" }}></div>
    </div>
  );
};

export default Salad;
