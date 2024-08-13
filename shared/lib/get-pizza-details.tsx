import { Ingredient, ProductItem } from "@prisma/client";
import { mapPizzaType, PizzaSize, PizzaType } from "../constants/pizza";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";

type Props = {};

export const getPizzaDetails = (
  items: ProductItem[],
  ingredients: Ingredient[],
  type: PizzaType,
  size: PizzaSize,
  selectedIngredients: Set<number>
) => {
  const textDetails = `${size}sm, ${mapPizzaType[type]} dough, tasty and crispy, with ${selectedIngredients.size} ingredients`;
  const totalPrice = calcTotalPizzaPrice(
    items,
    ingredients,
    type,
    size,
    selectedIngredients
  );

  return { textDetails, totalPrice };
};
