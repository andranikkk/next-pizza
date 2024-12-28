import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(1, { message: "Password name field is required!" });

export const formLoginSchema = z.object({
  email: z.string().email({ message: "Email field is required!" }),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      fullName: z.string().min(2, { message: "Name field is required!" }),
      // lastName: z.string().min(2, { message: "Last name field is required!" }),
      confirmPassword: passwordSchema,
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords are not the same!",
    path: ["confirmPassword"],
  });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
