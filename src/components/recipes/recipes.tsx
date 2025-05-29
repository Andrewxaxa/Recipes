"use client";

import { IRecipe } from "@/interfaces/recipe.interface";
import { Button } from "../ui/button";
import { toast } from "sonner";

interface RecipesProps {
  recipes: IRecipe[];
}

const Recipes: React.FC<RecipesProps> = ({ recipes }) => {
  const handleClick = () => {
    toast.success("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
    });
  };

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
      <Button onClick={handleClick}>Show Toast</Button>
    </>
  );
};

export default Recipes;
