import RecipeDetailPage from "./RecipeDetail";

const recipeDetail = {
  title: "Moringa Lemon Water",
  image: "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/unnamed-4.png",
  ingredients: [
    "1 glass of hot water ",
    "Juice of half a lemon ",
    "1 tsp Amrti’s Moringa powder ",
    
  ],
  instructions: [
    "Add the lemon juice and Moringa powder to a mug.",
    " Pour over hot water and stir until combined. ",
    "Enjoy!"
  ]
};

const MoringaLemon = () => {
  return (
    <RecipeDetailPage recipe={recipeDetail} />
  );
};

export default MoringaLemon;
