"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui";
import { CircleUser, User } from "lucide-react";
import { useSession, signIn } from "next-auth/react";

interface Props {
  onClickSignIn?: () => void;
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({
  className,
  onClickSignIn,
}) => {
  const { data: session } = useSession();

  return (
    <div className={className}>
      {session ? (
        <Link href="/profile">
          <Button variant="secondary" className="flex items-center gap-2">
            <CircleUser size={18} />
          </Button>
        </Link>
      ) : (
        <Button
          onClick={onClickSignIn}
          variant="secondary"
          className="flex items-center gap-1"
        >
          <User size={16} /> Sign in
        </Button>
      )}
    </div>
  );
};
