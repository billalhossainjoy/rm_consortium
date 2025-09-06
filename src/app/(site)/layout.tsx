import {Navigation} from "@components/navigation";
import {Footer} from "@components/footer";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Navigation />
        {children}
        <Footer />
    </>
  );
}