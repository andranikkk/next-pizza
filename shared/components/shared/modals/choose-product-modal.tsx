"use client";

import React from "react";
import { cn } from "@/shared/lib/utils";
import { useRouter } from "next/navigation";
import { IProduct } from "@/@types/prisma";

import { DialogContent, Dialog } from "../../ui/dialog";
import { ProductForm } from "../product-form";

interface Props {
  product: IProduct;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog onOpenChange={() => router.back()} open={Boolean(product)}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] min-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <ProductForm product={product} onSubmit={() => router.back()} />
      </DialogContent>
    </Dialog>
  );
};
