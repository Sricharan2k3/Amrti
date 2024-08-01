import RecipeDetailPage from "./RecipeDetail";

const recipeDetail = {
  title: "Moringa Leaf Banana Smoothie",
  image: "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/unnamed-7.png",
  ingredients: [
    "50g dry Amrit’s moringa powder",
    "1 banana, peeled and chopped",
    "1 cup milk (dairy or plant-based)",
    "2 teaspoons honey"
  ],
  instructions: [
    "Blend moringa powder, chopped banana, milk, and honey together until smooth.",
    "Serve cold."
  ]
};

const MoringaLeafBananaSmoothie = () => {
  return (
    <RecipeDetailPage recipe={recipeDetail} />
  );
};

export default MoringaLeafBananaSmoothie;
