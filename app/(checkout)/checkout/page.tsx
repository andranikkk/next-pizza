"use client";

import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import {
  Container,
  Title,
  CheckoutSidebar,
  CheckoutCart,
  CheckoutPersonalForm,
  CheckoutAddressForm,
} from "@/shared/components/shared";
import { useCart } from "@/shared/hooks";
import { checkoutFormSchema, CheckoutFormValues } from "@/shared/constants";
import { createOrder } from "@/app/actions";
import { Api } from "@/shared/services/api-client";

const CheckoutPage = () => {
  const { data: session } = useSession();
  const [submitting, setSubmitting] = React.useState(false);
  const { updateItemQuantity, removeCartItem, items, totalAmount, loading } =
    useCart();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      firstName: session?.user.name || "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  useEffect(() => {
    async function fetchUserInfo() {
      const data = await Api.auth.getMe();
      const [firstName, lastName] = data?.fullName.split(" ");

      form.setValue("firstName", firstName);
      form.setValue("lastName", lastName);
      form.setValue("email", data?.email);
    }

    if (session) {
      fetchUserInfo();
    }
  }, []);

  const onClickCountButton = (
    id: number,
    type: "plus" | "minus",
    quantity: number
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  const onSubmit = async (data: CheckoutFormValues) => {
    try {
      setSubmitting(true);
      const url = await createOrder(data);

      toast.error("An order was created! 📝 Continuing to pay... ", {
        icon: "✅",
      });

      if (url) {
        location.href = url;
      }
    } catch (error) {
      console.log(error);
      setSubmitting(false);
      toast.error("Could not create order", {
        icon: "❌",
      });
    }
  };

  return (
    <Container className="mt-10">
      <Title
        text="Placing an order"
        className="font-extrabold text-[36px] mb-8"
      />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                items={items}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
                loading={loading}
              />

              <CheckoutPersonalForm
                className={loading ? "opacity-40 pointer-events-none" : ""}
              />

              <CheckoutAddressForm
                className={loading ? "opacity-40 pointer-events-none" : ""}
              />
            </div>

            <div className="w-[450px]">
              <CheckoutSidebar
                totalAmount={totalAmount}
                loading={loading || submitting}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
};

export default CheckoutPage;
