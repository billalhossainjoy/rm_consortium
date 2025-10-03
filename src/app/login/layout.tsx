import authOptions from "@app/api/auth/[...nextauth]/options";
import {getServerSession} from "next-auth/next";
import {redirect} from "next/navigation";
import React from "react";
import {Session} from "next-auth";

export default async function LoginLayout({
  children,
}: React.PropsWithChildren) {
  const data = await getData();

  if (data.session?.user) {
    return redirect("/");
  }

  return <>{children}</>;
}

async function getData() {
  const session: Session | null = await getServerSession(authOptions);

  return {
    session,
  };
}
