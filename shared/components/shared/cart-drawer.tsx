"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui";
import { CartDrawerItem } from "./cart-drawer-item";
import { getCartItemDetails } from "@/shared/lib";
import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { Title } from "./title";
import { cn } from "@/shared/lib/utils";
import { useCart } from "../../hooks/use-cart";

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [redirecting, setRedirecting] = React.useState(false);
  const { updateItemQuantity, removeCartItem, items, totalAmount } = useCart();

  const spellCheck = items.length > 1 ? "are" : "is";
  const countCheck = items.length <= 1 ? "item" : "items";

  const onClickCountButton = (
    id: number,
    type: "plus" | "minus",
    quantity: number
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <div
          className={cn(
            "flex flex-col h-full",
            !totalAmount && "justify-center"
          )}
        >
          {totalAmount > 0 && (
            <SheetHeader>
              <SheetTitle>
                There {spellCheck}{" "}
                <span className="font-bold">
                  {items.length} {countCheck}
                </span>{" "}
                in cart
              </SheetTitle>
            </SheetHeader>
          )}

          {!totalAmount && (
            <div className="flex flex-col items-center justify-center w72 mx-auto">
              <Image
                src="/assets/images/empty-box.png"
                alt="Empty cart"
                width={120}
                height={120}
              />
              <Title
                size="sm"
                text="Your cart is empty"
                className="text-center font-bold my-2"
              />
              <p className="text-center to-neutral-500 mb-5">
                Start adding items to make an order
              </p>

              <SheetClose>
                <Button className=" w-56 h-12 text-base" size="lg">
                  <ArrowLeft className="w-5 mr-2" />
                  Back
                </Button>
              </SheetClose>
            </div>
          )}

          {totalAmount > 0 && (
            <>
              <div className="-mx-6 mt-5 overflow-auto flex-1">
                {items.map((item) => (
                  <div className="mb-2" key={item.id}>
                    <CartDrawerItem
                      details={getCartItemDetails(
                        item.ingredients,
                        item.pizzaType as PizzaType,
                        item.pizzaSize as PizzaSize
                      )}
                      id={item.id}
                      imageUrl={item.imageUrl}
                      name={item.name}
                      price={item.price}
                      disabled={item.disabled}
                      quantity={item.quantity}
                      onClickCountButton={(type) =>
                        onClickCountButton(item.id, type, item.quantity)
                      }
                      onClickRemove={() => removeCartItem(item.id)}
                    />
                  </div>
                ))}
              </div>

              <SheetFooter className="-mx-6 bg-white p-8">
                <div className="w-full">
                  <div className="flex mb-4">
                    <span className="flex flex-1 text-lg text-neutral-500">
                      Total
                      <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                    </span>

                    <span className="font-bold text-lg">{totalAmount} $</span>
                  </div>

                  <Link href="/checkout">
                    <Button
                      loading={redirecting}
                      onClick={() => setRedirecting(true)}
                      className="w-full h-12 text-base"
                      type="submit"
                    >
                      Place order
                      <ArrowRight className="ml-2 w-5" />
                    </Button>
                  </Link>
                </div>
              </SheetFooter>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
