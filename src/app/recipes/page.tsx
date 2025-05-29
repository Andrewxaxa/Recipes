import { IRecipe } from "@/interfaces/recipe.interface";
import { getRecipes } from "@/prisma-db";
import Recipes from "@/components/recipes/recipes";

const RecipesPage = async () => {
  const recipes: IRecipe[] = await getRecipes();
  console.log("recipes:", recipes);

  return <Recipes recipes={recipes} />;
};

export default RecipesPage;
