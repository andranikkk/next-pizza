import { ArrowRight, Package, Percent, Truck } from "lucide-react";

import { CheckoutItemDetails } from "./checkout-item-details";
import { WhiteBlock } from "./white-block";
import { Button, Skeleton } from "../ui";
import { cn } from "@/shared/lib/utils";

interface Props {
  totalAmount: number;
  loading?: boolean;
  className?: string;
}

const VAT = 15;
const DELIVERY_PRICE = 250;

export const CheckoutSidebar: React.FC<Props> = ({
  totalAmount,
  className,
  loading,
}) => {
  const vatPrice = (totalAmount * VAT) / 100;
  const deliveryPrice = totalAmount > 0 ? DELIVERY_PRICE : 0;
  const totalPrice = totalAmount + vatPrice + deliveryPrice;

  return (
    <WhiteBlock className={cn("p-6 sticky top-4", className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xl">You will pay:</span>
        {loading ? (
          <Skeleton className="h-11 w-48" />
        ) : (
          <span className="text-[32px] h-11 font-extrabold">
            {totalPrice} $
          </span>
        )}
      </div>

      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package className="mr-2 to-gray-300" size={18} />
            Your product&apos;s price:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-16 rounded-[6px]" />
          ) : (
            `${totalAmount}`
          )
        }
      />

      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent className="mr-2 to-gray-300" size={18} />
            Taxes:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-16 rounded-[6px]" />
          ) : (
            `${vatPrice}`
          )
        }
      />

      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck className="mr-2 to-gray-300" size={18} />
            Delivery:
          </div>
        }
        value={
          loading ? (
            <Skeleton className="h-6 w-16 rounded-[6px]" />
          ) : (
            `${deliveryPrice}`
          )
        }
      />

      <Button
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
        type="submit"
        loading={loading}
      >
        Go to payment
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};
