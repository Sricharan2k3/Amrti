import RecipeDetailPage from "./RecipeDetail";

const recipeDetail = {
  title: "Moringa Leaf Almond Smoothie",
  image: "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/unnamed-6.png",
  ingredients: [
    "50 grams dry moringa leaves or Amrit’s moringa powder",
    "250 ml soya milk",
    "10 soaked almonds",
    "10 ml honey"
  ],
  instructions: [
    "Soak the moringa leaves in water for 15 minutes.",
    "Blend all ingredients well in an electric blender.",
    "Serve cold."
  ]
};

const MoringaLeafAlmondSmoothie = () => {
  return (
    <RecipeDetailPage recipe={recipeDetail} />
  );
};

export default MoringaLeafAlmondSmoothie;
