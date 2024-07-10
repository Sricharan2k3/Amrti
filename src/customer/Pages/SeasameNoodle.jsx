import React from 'react'
import noodlesImage from './Sesame noodles.jpg'
const SeasameNoodle = () => {
  return (
    <div className="max-w-screen-lg mx-auto" style={{ paddingTop: "45px" }}>
      <h1 className="text-4xl font-bold text-center my-8">
        Sesame & Peanut Noodles
      </h1>
      <div className="w-full">
        <img
          src={noodlesImage}
          alt="Sesame & Peanut Noodles"
          className="w-full object-cover h-64 md:h-96"
        />
      </div>
      <div className="px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Ingredients:</h2>
        <ul className="list-disc list-inside mb-8">
          <li>
            8 ounces (about 225g) of noodles (such as spaghetti or linguine)
          </li>
          <li>1/4 cup (60ml) of soy sauce</li>
          <li>
            2 tablespoons (30ml) of <span style={{fontWeight:"bold"}}>Amrti sesame oil</span>{" "}
          </li>
          <li>2 tablespoons (30ml) of rice vinegar</li>
          <li>2 tablespoons (30g) of peanut butter</li>
          <li>1 tablespoon (15ml) of honey or maple syrup</li>
          <li>2 cloves of garlic, minced</li>
          <li>1 teaspoon of grated fresh ginger</li>
          <li>1 tablespoon (15ml) of vegetable oil</li>
          <li>1/4 cup (35g) of peanuts, chopped (for garnish)</li>
          <li>2 green onions, thinly sliced (for garnish)</li>
          <li>1 tablespoon (15g) of sesame seeds (for garnish)</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Instructions:</h2>
        <ol className="list-decimal list-inside">
          <li>Bring a large pot of water to a boil.</li>
          <li>
            Add the noodles and cook according to package instructions until al
            dente.
          </li>
          <li>
            Drain the noodles and rinse them under cold water to stop the
            cooking process. Set aside.
          </li>
          <li>
            In a small bowl, whisk together soy sauce, sesame oil, rice vinegar,
            peanut butter, honey (or maple syrup), minced garlic, and grated
            ginger until well combined.
          </li>
          <li>
            In a large mixing bowl, toss the cooked and cooled noodles with the
            prepared sauce until evenly coated.
          </li>
          <li>
            Drizzle vegetable oil over the noodles and toss again to prevent
            sticking.
          </li>
          <li>
            Garnish the sesame and peanut noodles with chopped peanuts, sliced
            green onions, and sesame seeds.
          </li>
        </ol>
      </div>
      <div style={{ height: "200px" }}></div>
    </div>
  );
}

export default SeasameNoodle
