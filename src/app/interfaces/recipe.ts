import { Time } from '@angular/common';

export interface Recipe {
  category: Category;
  description: RecipeStep[];
  difficulty: Difficulty;
  id: number;
  img: string;
  meal: Meal;
  name: string;
  products: ProductInRecipe;
  time: Time;
}

export interface RecipeStep {
  description: string;
  id: number;
  index: number;
}

export interface ProductInRecipe {
  count: number;
  id: number;
  unit: string;
}

export const enum Category {
  FirstСourse,
  SecondСourse,
  SaladAndSnack,
  Baking,
  Cakes,
  Desserts,
  Drinks,
}

export const enum Difficulty {
  Easy,
  Medium,
  Hard,
}

export const enum Meal {
  Breakfast,
  Lunch,
  Dinner,
  Snack,
}