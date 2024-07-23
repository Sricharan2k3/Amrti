import RecipeDetailPage from "./RecipeDetail";

const recipeDetail = {
  title: "Moringa Iced Tea",
  image: "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/unnamed-5.png",
  ingredients: [
    "Amrit’s Moringa powder",
    "Warm water",
    "Lemon slices",
    "Ginger",
    "Honey"
  ],
  instructions: [
    "Mix Amrit’s moringa powder with warm water and let it steep for flavour.",
    "Add lemon slices and ginger halfway through steeping.",
    "Sweeten with honey.",
    "Pour over ice cubes and garnish with a lemon slice and mint leaves.",
    "Enjoy it!"
  ]
};

const MoringaIce= () => {
  return (
    <RecipeDetailPage recipe={recipeDetail} />
  );
};

export default MoringaIce;
