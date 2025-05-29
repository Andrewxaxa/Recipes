import { PrismaClient } from "@/generated/prisma";
import {
  IAddRecipePayload,
  IUpdateRecipePayload,
} from "@/interfaces/recipe.interface";

const prisma = new PrismaClient();

const seed = async () => {
  const count = await prisma.recipe.count();
  if (count > 0) return;

  // Recipe 1: Scrambled Eggs
  await prisma.recipe.create({
    data: {
      title: "Scrambled Eggs",
      description: "A quick and easy scrambled eggs recipe for breakfast.",
      instructions: {
        create: [
          { step: 1, text: "Crack the eggs into a bowl." },
          { step: 2, text: "Whisk the eggs until smooth." },
          { step: 3, text: "Heat butter in a pan over medium heat." },
          {
            step: 4,
            text: "Pour the eggs into the pan and stir gently until set.",
          },
        ],
      },
    },
  });

  // Recipe 2: Pancakes
  await prisma.recipe.create({
    data: {
      title: "Classic Pancakes",
      description: "Fluffy, golden pancakes perfect for a weekend breakfast.",
      instructions: {
        create: [
          {
            step: 1,
            text: "Mix milk, eggs, flour, and a pinch of salt in a bowl.",
          },
          {
            step: 2,
            text: "Heat a pan over medium heat and add a little oil.",
          },
          {
            step: 3,
            text: "Pour some batter into the pan and cook until bubbles form on the surface.",
          },
          { step: 4, text: "Flip and cook until golden on both sides." },
        ],
      },
    },
  });

  // Recipe 3: Grilled Cheese Sandwich
  await prisma.recipe.create({
    data: {
      title: "Grilled Cheese Sandwich",
      description: "A crispy, melty classic sandwich.",
      instructions: {
        create: [
          { step: 1, text: "Butter one side of each bread slice." },
          {
            step: 2,
            text: "Place cheese between two slices, buttered sides facing out.",
          },
          {
            step: 3,
            text: "Grill in a skillet over medium heat until golden brown on both sides.",
          },
        ],
      },
    },
  });

  console.log("✅ Data seeded");
};

seed()
  .catch((e) => {
    console.error("❌ Error seeding data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export const getRecipes = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.recipe.findMany({
    include: {
      instructions: true,
    },
  });
};

export const getRecipe = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.recipe.findUnique({
    where: { id },
  });
};

export const addRecipe = async (payload: IAddRecipePayload) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const { title, description, instructions } = payload;
  return prisma.recipe.create({
    data: {
      title,
      description,
      instructions: { create: instructions },
    },
  });
};

export const updateRecipe = async (payload: IUpdateRecipePayload) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const { id, title, description, instructions } = payload;
  return prisma.recipe.update({
    where: { id },
    data: {
      title,
      description,
      instructions: { set: instructions },
    },
  });
};

export const deleteRecipe = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return prisma.recipe.delete({
    where: { id },
  });
};
