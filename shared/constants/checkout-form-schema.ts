import { z } from "zod";

export const checkoutFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name field is required!" }),
  lastName: z.string().min(2, { message: "Last name field is required!" }),
  email: z.string().email({ message: "Email field is required!" }),
  phone: z.string().min(10, { message: "Phone field is required!" }),
  address: z.string().min(5, { message: "Address field is required!" }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
