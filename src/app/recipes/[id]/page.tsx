import { RecipeDetails } from "@/components/recipes/recipe-details";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { IRecipe } from "@/interfaces/recipe.interface";
import { getRecipe } from "@/prisma-db";

interface RecipePageProps {
  params: Promise<{ id: string }>;
}

const RecipePage: React.FC<RecipePageProps> = async ({ params }) => {
  const id = (await params).id;
  const recipe: IRecipe | null = await getRecipe(id);

  console.log("recipe", recipe);

  if (!recipe) {
    return (
      <div className="p-6 max-w-3xl mx-auto">
        <Alert variant="destructive">
          <AlertTitle>Błąd</AlertTitle>
          <AlertDescription>{"Recipe not found"}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return <RecipeDetails recipe={recipe} />;
};

export default RecipePage;
