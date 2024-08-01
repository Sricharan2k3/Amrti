import RecipeDetailPage from "./RecipeDetail";

const recipeDetail = {
  title: "Moringa Avocado Toast",
  image: "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/unnamed-8.png",
  ingredients: [
    "2 slices of bread (your choice), toasted",
    "1/2 avocado",
    "1/2-1 teaspoon Amrti’s moringa powder",
    "Squeeze of lemon juice",
    "Pinch of salt",
    "Pinch of black pepper",
    "Pinch of chilli flakes (optional)",
    "1 teaspoon nutritional yeast (optional)"
  ],
  instructions: [
    "In a bowl, mash the avocado with Amrti’s moringa powder, lemon juice, salt, and pepper.",
    "Spread the avocado mixture evenly on the toasted bread slices.",
    "Sprinkle with chilli flakes and nutritional yeast, if desired.",
    "Enjoy your nutritious and flavorful Moringa Avocado Toast!"
  ]
};

const MoringaAvocadoToast = () => {
  return (
    <RecipeDetailPage recipe={recipeDetail} />
  );
};

export default MoringaAvocadoToast;
