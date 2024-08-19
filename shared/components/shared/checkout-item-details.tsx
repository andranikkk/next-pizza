import { cn } from "@/shared/lib/utils";
import React from "react";

interface Props {
  value?: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
}

export const CheckoutItemDetails: React.FC<Props> = ({
  className,
  value,
  title,
}) => {
  return (
    <div className={cn("flex flex-row my-4", className)}>
      <span className="flex flex-1 text-lg to-neutral-500">
        {title}
        <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
      </span>

      <span className="font-bold flex flex-row gap-2 text-lg">{value} $</span>
    </div>
  );
};
