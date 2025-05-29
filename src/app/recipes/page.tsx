import { IRecipe } from "@/interfaces/recipe.interface";
import { getRecipes } from "@/prisma-db";

const Recipes = async () => {
  const recipes: IRecipe[] = await getRecipes();
  console.log("recipes:", recipes);

  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <div>id: {recipe.id}</div>
          <div>title: {recipe.title}</div>
          <div>description: {recipe.description}</div>
          <div>
            instructions:
            {recipe.instructions.map((instruction) => (
              <span key={instruction.id}>{instruction.text}</span>
            ))}
          </div>
          <div>-----------------------------------------------</div>
        </div>
      ))}
    </>
  );
};

export default Recipes;
