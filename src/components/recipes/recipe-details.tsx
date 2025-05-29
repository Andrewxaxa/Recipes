import { IRecipe } from "@/interfaces/recipe.interface";

interface RecipeDetailsProps {
  recipe: IRecipe;
}

export const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
  return (
    <main className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <p className="text-muted-foreground">{recipe.description}</p>

      <img
        src="https://via.placeholder.com/800x400?text=Recipe+Image"
        alt="Recipe"
        className="w-full h-64 object-cover rounded-md"
      />

      <section>
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal pl-5 space-y-2 text-base text-muted-foreground">
          {recipe.instructions.map((step) => (
            <li key={step.id}>{step.text}</li>
          ))}
        </ol>
      </section>
    </main>
  );
};
