import { Metadata } from "next";
import fontInter from "@/fonts";
import { ToastContainer } from "@/components/shared";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Gaming Haven Z",
  description: "Gaming Haven Z",
  metadataBase: new URL("https://gaminghavenz.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontInter.variable}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
