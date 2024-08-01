import RecipeDetailPage from "./RecipeDetail";

const recipeDetail = {
  title: "Moringa Uttapam",
  image: "https://d33hqsk72xx8w2.cloudfront.net/wp-content/uploads/dosa-moringa-scaled.jpg",
  ingredients: [
    "1/2 cup semolina (sooji)",
    "1/4 cup oats powder",
    "1/4 cup rice flour",
    "1/2 cup curd",
    "Salt, to taste",
    "1/2 tbsp lemon juice",
    "2 tsp Amrti's moringa powder",
    "1 tbsp coconut crush",
    "2 tbsp each finely chopped onion, tomato, capsicum",
    "1 chopped green chilli",
    "2 tbsp chopped green coriander",
    "1 tbsp grated cheese",
    "1 tsp oil for frying"
  ],
  instructions: [
    "Mix batter ingredients to make a dosa-like consistency. Rest for 15-20 mins.",
    "Heat a nonstick pan, pour batter, sprinkle oil, add veggies, and cover to steam.",
    "Flip, cook for 2 mins, then add cheese. Cover until melted.",
    "Serve hot with chutney."
  ]
};

const MoringaUttapam = () => {
  return (
    <RecipeDetailPage recipe={recipeDetail} />
  );
};

export default MoringaUttapam;
