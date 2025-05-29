"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { IRecipe } from "@/interfaces/recipe.interface";
import { redirect } from "next/navigation";

interface RecipeCardProps {
  recipe: IRecipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const handleClick = () => {
    redirect(`/recipes/${recipe.id}`);
  };

  return (
    <Card
      onClick={handleClick}
      className="w-full max-w-md shadow-md cursor-pointer transition hover:shadow-lg"
    >
      <img
        src="https://via.placeholder.com/400x200?text=Recipe+Image"
        alt="Recipe"
        className="w-full h-48 object-cover rounded-t-md"
      />
      <CardHeader>
        <CardTitle>{recipe.title}</CardTitle>
        <CardDescription>{recipe.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
