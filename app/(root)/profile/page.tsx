import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "@/prisma/prisma-client";
import { getUserSession } from "@/shared/lib/get-user-session";

import { ProfileForm } from "@/shared/components/shared";

export default async function ProfilePage() {
  const session = await getUserSession();

  if (!session) {
    return redirect("/not-authorized");
  }

  const user = await prisma.user.findFirst({
    where: {
      id: Number(session?.id),
    },
  });

  if (!user) {
    redirect("/not-authorized");
  }

  return <ProfileForm data={user} />;
}
