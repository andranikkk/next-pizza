import React from "react";

import { getCartItemDetails } from "@/shared/lib";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import {
  CheckoutItem,
  CheckoutItemSkeleton,
  WhiteBlock,
} from "@/shared/components/shared";
import { CartStateItem } from "@/shared/lib/get-cart-details";

interface Props {
  items: CartStateItem[];
  loading?: boolean;
  onClickCountButton: (
    id: number,
    type: "plus" | "minus",
    quantity: number
  ) => void;
  removeCartItem: (id: number) => void;
  className?: string;
}

export const CheckoutCart: React.FC<Props> = ({
  className,
  items,
  loading,
  onClickCountButton,
  removeCartItem,
}) => {
  return (
    <WhiteBlock title="1. Cart" className={className}>
      <div className="flex flex-col gap-5">
        {loading
          ? [...Array(4)].map((_, index) => (
              <CheckoutItemSkeleton key={index} />
            ))
          : items.map((item) => (
              <CheckoutItem
                id={item.id}
                key={item.id}
                name={item.name}
                price={item.price}
                disabled={item.disabled}
                imageUrl={item.imageUrl}
                quantity={item.quantity}
                onClickRemove={() => removeCartItem(item.id)}
                details={getCartItemDetails(
                  item.ingredients,
                  item.pizzaType as PizzaType,
                  item.pizzaSize as PizzaSize
                )}
                onClickCountButton={(type) =>
                  onClickCountButton(item.id, type, item.quantity)
                }
              />
            ))}
      </div>
    </WhiteBlock>
  );
};
