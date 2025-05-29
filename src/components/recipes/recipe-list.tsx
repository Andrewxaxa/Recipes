import { IRecipe } from "@/interfaces/recipe.interface";
import { RecipeCard } from "./recipe-card";
import { Container } from "../ui/container";

interface RecipeListProps {
  recipes: IRecipe[];
}

export const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </Container>
  );
};
