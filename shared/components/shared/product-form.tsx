"use client";

import React from "react";
import toast from "react-hot-toast";
import { IProduct } from "@/@types/prisma";

import { useCartStore } from "@/shared/store";
import { ChooseProductForm } from "./choose-product-form";
import { ChoosePizzaForm } from "./choose-pizza-form";

interface Props {
  product: IProduct;
  onSubmit?: VoidFunction;
}

export const ProductForm: React.FC<Props> = ({
  product,
  onSubmit: _onSubmit,
}) => {
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);

  const firstItem = product.items[0];
  const isPizzaForm = Boolean(product.items[0].pizzaType);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      if (isPizzaForm && productItemId && ingredients) {
        await addCartItem({ productItemId, ingredients });
      } else {
        await addCartItem({
          productItemId: firstItem.id,
        });
      }

      toast.success("Added to cart");
      _onSubmit?.();
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
        // onClickAdd={() => router.push(`/order/${product.id}`)}
      />
    );
  } else {
    return (
      <ChooseProductForm
        imageUrl={product.imageUrl}
        name={product.name}
        price={firstItem.price}
        onSubmit={onSubmit}
        loading={loading}
        // onClickAdd={() => router.push(`/order/${product.id}`)}
      />
    );
  }
};
