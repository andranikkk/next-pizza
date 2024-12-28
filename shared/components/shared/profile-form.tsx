"use client";

import React from "react";
import toast from "react-hot-toast";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

import { Container } from "./container";
import { Title } from "./title";
import { FormInput } from "./form";
import { Button } from "../ui";
import {
  formRegisterSchema,
  TFormRegisterValues,
} from "./modals/auth-modal/login-forms/schemas";
import { updateUserInfo } from "@/app/actions";

interface Props {
  data: User;
}

export const ProfileForm: React.FC<Props> = ({ data }) => {
  const form = useForm({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      fullName: data.fullName,
      email: data.email,
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await updateUserInfo({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      toast.error("Updated successfully 📝", {
        icon: "✅",
      });
    } catch (error) {
      return toast.error("Error while updating data", {
        icon: "❌",
      });
    }
  };

  const onClickSignOut = () => {
    signOut({
      callbackUrl: "/",
    });
  };

  return (
    <Container className="my-10">
      <Title text={`Profile | #${data.id}`} size="md" className="font-bold" />

      <FormProvider {...form}>
        <form
          className="flex flex-col gap-5 w-96 mt-10"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormInput name="email" label="Email" required />
          <FormInput name="fullName" label="Full name" required />

          <FormInput
            type="password"
            name="password"
            label="New password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm new password"
            required
          />

          <Button
            disabled={form.formState.isSubmitting}
            className="text-base mt-10"
            type="submit"
          >
            Save
          </Button>

          <Button
            onClick={onClickSignOut}
            variant="secondary"
            disabled={form.formState.isSubmitting}
            className="text-base"
            type="button"
          >
            Log out
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};
