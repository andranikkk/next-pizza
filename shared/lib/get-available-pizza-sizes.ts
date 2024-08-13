import { pizzaSizes, PizzaType } from "@/shared/constants/pizza";
import { ProductItem } from "@prisma/client";
import { Variant } from "../components/shared/group-variants";

export const getAvailablePizzaSizes = (
  type: PizzaType,
  items: ProductItem[]
): Variant[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);
  const availablePizzaSizes = pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));

  return availablePizzaSizes;
};
