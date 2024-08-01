import RecipeDetailPage from "./RecipeDetail";

const recipeDetail = {
  title: "Moringa Tea",
  image: "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/tea-moringa-scaled.jpg",
  ingredients: [
    "Amrit’s Moringa Powder",
    "Lemon",
    "Honey"
  ],
  instructions: [
    "Heat water until warm (not boiling).",
    "Add Amrit’s moringa powder and steep for desired strength.",
    "Strain tea, add lemon slices, and sweeten with honey to taste."
  ]
};

const MoringaNormal = () => {
  return (
    <RecipeDetailPage recipe={recipeDetail} />
  );
};

export default MoringaNormal;
