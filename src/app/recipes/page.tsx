import { IRecipe } from "@/interfaces/recipe.interface";
import { getRecipes } from "@/prisma-db";
import { RecipeList } from "@/components/recipes/recipe-list";

const RecipesPage = async () => {
  const recipes: IRecipe[] = await getRecipes();
  console.log("recipes:", recipes);

  // throw new Error("Test error");

  return <RecipeList recipes={recipes} />;
};

export default RecipesPage;
