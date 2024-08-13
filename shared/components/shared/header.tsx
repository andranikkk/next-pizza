import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/shared/lib/utils";
import { User } from "lucide-react";

import { Button } from "../ui";
import { Container } from "./container";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";

interface Props {
  className?: string;
  hasCart?: boolean;
  hasSearch?: boolean;
}

export const Header: React.FC<Props> = ({
  className,
  hasSearch = true,
  hasCart = true,
}) => {
  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href={"/"}>
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <h1 className="text-sm text-gray-400 leading-3">
                Unmatched deliciousness
              </h1>
            </div>
          </div>
        </Link>

        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}

        <div className="flex items-center gap-3">
          <Button variant="secondary" className="flex items-center gap-1">
            <User size={16} /> Sign in
          </Button>

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
