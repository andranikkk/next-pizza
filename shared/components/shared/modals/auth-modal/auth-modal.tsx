"use client";

import { Button } from "@/shared/components/ui";
import { DialogContent, Dialog } from "@/shared/components/ui/dialog";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { LoginForm } from "./login-forms/login";
import { RegisterForm } from "./login-forms/register";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<Props> = ({ onClose, open }) => {
  const [type, setType] = useState<"login" | "register">("login");

  const onSwitchType = () => {
    setType(type === "login" ? "register" : "login");
  };
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-[450px] bg-white p-10">
        {type === "login" ? (
          <LoginForm onClose={handleClose} />
        ) : (
          <RegisterForm onClose={handleClose} />
        )}

        <hr />
        <div className="flex gap-4">
          <Button
            variant={"secondary"}
            onClick={() =>
              signIn("github", { callbackUrl: "/", redirect: true })
            }
            type="button"
            className="gap-2 h-12 p-2 flex-1"
          >
            <img
              src="/assets/images/github.png"
              alt="Github logo"
              className="w-7 h-7"
            />
            Github
          </Button>

          <Button
            variant={"secondary"}
            onClick={() =>
              signIn("google", { callbackUrl: "/", redirect: true })
            }
            type="button"
            className="gap-2 h-12 p-2 flex-1"
          >
            <img
              src="/assets/images/google.webp"
              alt="Google logo"
              className="w-6 h-6"
            />
            Google
          </Button>
        </div>

        <Button
          className="h-12"
          type="button"
          onClick={onSwitchType}
          variant="outline"
        >
          {type !== "login" ? "Login" : "Register"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
