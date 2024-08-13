"use client";

import { cn } from "@/shared/lib/utils";
import { useCategoryStore } from "@/shared/store/category";
import { Category } from "@prisma/client";
import React from "react";

interface Props {
  items: Category[];
  className?: string;
}

export const Categories: React.FC<Props> = ({ className, items }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-2 rounded-2xl", className)}
    >
      {items.map(({ name, id }, index) => {
        return (
          <a
            href={`/#${name}`}
            key={index}
            className={cn(
              "flex items-center font-semibold rounded-2xl py-1.5 px-5",
              categoryActiveId === id &&
                "bg-white shadow-md shadow-gray-200 text-primary"
            )}
          >
            <button>{name}</button>
          </a>
        );
      })}
    </div>
  );
};
