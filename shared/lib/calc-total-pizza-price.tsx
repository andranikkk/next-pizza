import { Ingredient, ProductItem } from "@prisma/client";
import { PizzaSize, PizzaType } from "../constants/pizza";

/**
 * Function for calculating total pizza price
 * @param {ProductItem[]} items - array of products
 * @param {Ingredient[]} ingredients - array of ingredients
 * @param {PizzaType} type - type of pizza
 * @param {PizzaSize} size - size of pizza
 * @param {Set<number>} selectedIngredients - selected ingredients
 */
export const calcTotalPizzaPrice = (
  items: ProductItem[],
  ingredients: Ingredient[],
  type: PizzaType,
  size: PizzaSize,
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;

  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
