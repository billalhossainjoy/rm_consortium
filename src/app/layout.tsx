import type {Metadata} from "next";
import React, {Suspense} from "react";
import {RefineContext} from "./_refine_context";
import "./globals.css"
import {Toaster} from "react-hot-toast";

export const metadata: Metadata = {
  title: "Consortium",
  description: "Generated",
  icons: {
    icon: "/icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <RefineContext>{children}</RefineContext>
        </Suspense>

      <div>
          <Toaster />
      </div>
      </body>
    </html>
  );
}
