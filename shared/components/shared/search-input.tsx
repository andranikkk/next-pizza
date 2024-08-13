"use client";

import { useClickAway, useDebounce } from "react-use";
import { Api } from "@/shared/services/api-client";
import React, { useRef, useState } from "react";
import { Product } from "@prisma/client";
import { cn } from "@/shared/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const ref = useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(
    async () => {
      try {
        const response = await Api.products.search(searchQuery);
        setProducts(response);
      } catch (error) {
        console.log("Failed to search products", error);
      }
    },
    235,
    [searchQuery]
  );

  const onClickItem = () => {
    setFocused(false);
    setSearchQuery("");
    setProducts([]);
  };

  return (
    <>
      {focused && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
      )}
      <div
        ref={ref}
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5" />
        <input
          type="text"
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          placeholder="Find pizza..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {products.length > 0 && (
          <div
            className={cn(
              "absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
              focused && "visible opacity-100 top-12"
            )}
          >
            {products.map((product) => {
              return (
                <Link
                  onClick={onClickItem}
                  key={product.id}
                  className="px-3 py-2 hover:bg-primary/10 flex items-center gap-3"
                  href={`/product/${product.id}`}
                >
                  <img
                    className="rounded-sm"
                    src={product.imageUrl}
                    width={32}
                    height={32}
                    alt={product.name}
                  />
                  <span>{product.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
