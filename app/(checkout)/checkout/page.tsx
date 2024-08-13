import React from "react";
import { ArrowRight, Package, Percent, Truck } from "lucide-react";

import {
  CheckoutItemDetails,
  CheckoutItem,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Button, Input, Textarea } from "@/shared/components/ui";

const CheckoutPage = () => {
  return (
    <Container className="mt-10">
      <Title
        text="Placing an order"
        className="font-extrabold text-[36px] mb-8"
      />

      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Cart">
            <div className="flex flex-col gap-5">
              <CheckoutItem
                id={1}
                name="name"
                imageUrl="/assets/ingredients/2.png"
                price={0}
                quantity={0}
                details="detail"
              />
              <CheckoutItem
                id={1}
                name="name"
                imageUrl="/assets/ingredients/2.png"
                price={0}
                quantity={0}
                details="detail"
              />
            </div>
          </WhiteBlock>

          <WhiteBlock title="2. Personal information">
            <div className="grid grid-cols-2 gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="Name"
              />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Last name"
              />
              <Input name="email" className="text-base" placeholder="Email" />
              <Input name="phone" className="text-base" placeholder="Phone" />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Delivery address">
            <div className="flex flex-col gap-5">
              <Input
                name="address"
                className="text-base"
                placeholder="Address"
              />
              <Textarea
                className="text-base"
                placeholder="Comments for the courier"
                rows={5}
              />
            </div>
          </WhiteBlock>
        </div>

        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">You will pay:</span>
              <span className="text-[32px] font-extrabold">3246 $</span>
            </div>

            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Package className="mr-2 to-gray-300" size={18} />
                  Your product&apos;s price:
                </div>
              }
              value="3000"
            />

            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Percent className="mr-2 to-gray-300" size={18} />
                  Taxes:
                </div>
              }
              value="170"
            />

            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Truck className="mr-2 to-gray-300" size={18} />
                  Delivery:
                </div>
              }
              value="146"
            />

            <Button
              className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
              type="submit"
            >
              Go to payment
              <ArrowRight className="w-5 ml-2" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutPage;
