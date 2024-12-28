import { User } from "@prisma/client";
import { axiosInstance } from "./instances";

export const getMe = async () => {
  const { data } = await axiosInstance.get<User>("/auth/me");

  return data;
};
