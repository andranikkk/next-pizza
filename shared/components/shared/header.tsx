"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import { cn } from "@/shared/lib/utils";
import { useSearchParams, useRouter } from "next/navigation";

import { Container } from "./container";
import { SearchInput } from "./search-input";
import { CartButton } from "./cart-button";
import { ProfileButton } from "./profile-button";
import { AuthModal } from "./modals";

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
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();

  useEffect(() => {
    let toastMessage = "";

    if (searchParams.has("verified")) {
      toastMessage = "Successfully verified your email!";
    }

    if (toastMessage) {
      setTimeout(() => {
        router.replace("/");
        toast.success(toastMessage, {
          icon: "✅",
          duration: 3000,
        });
      }, 1000);
    }
  }, []);

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
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
          />

          <ProfileButton onClickSignIn={() => setOpenAuthModal(true)} />

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
