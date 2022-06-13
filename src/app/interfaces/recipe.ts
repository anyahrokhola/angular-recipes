import { Time } from "@angular/common";

export interface Recipe {
    id: number,
    img: string,
    name: string,
    category: Category,
    meal: Meal,
    products: ProductInRecipe,
    time: Time,
    difficulty: string,
    description: string,
}

export interface ProductInRecipe {
    id: number,
    count: number,
    unit: string,
}

export const enum Category {
    firstСourse,
    secondСourse,
    saladAndSnack,
    baking,
    cakes,
    desserts,
    drinks,
}

export const enum Meal{
    breakfast,
    lunch,
    dinner,
    snack
}