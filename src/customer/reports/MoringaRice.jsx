import RecipeDetailPage from "./RecipeDetail";

const recipeDetail = {
  title: "Moringa Leaf Chutney Rice",
  image: "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/unnamed-9.png",
  ingredients: [
    "100g Amrti’s moringa powder",
    "50ml coconut oil",
    "10g roasted chana dal",
    "10g ginger",
    "20g shallots",
    "10g curry leaves",
    "5g dry red chilli",
    "20g grated coconut",
    "100g basmati rice",
    "2g mustard seeds",
    "Salt and black pepper to taste"
  ],
  instructions: [
    "Boil rice and let it cool.",
    "Grind Amrti’s moringa powder, shallots, ginger, grated coconut, half the curry leaves, and salt into a paste.",
    "Heat coconut oil in a pan. Add mustard seeds, red chilli, and remaining curry leaves, and let them crackle.",
    "Add the ground chutney paste and sauté well.",
    "Mix in the boiled rice and season with salt and black pepper."
  ]
};

const MoringaChutneyRice = () => {
  return (
    <RecipeDetailPage recipe={recipeDetail} />
  );
};

export default MoringaChutneyRice;
