import { Metadata } from "next";
import fontInter from "@/fonts";
import { ToastContainer } from "@/components/shared";
import { GamesStoreProvider } from "@/providers";

import "./globals.scss";

export const metadata: Metadata = {
  title: {
    default: "Gaming Haven Z",
    template: "%s | Gaming Haven Z",
  },
  description: "Discover and explore the best video games on Gaming Haven Z.",
  keywords: [
    "gaming",
    "video games",
    "games database",
    "reviews",
    "Game Haven Z",
  ],
  metadataBase: new URL("https://aerolab-frontend-code-challenge.vercel.app/"),
  openGraph: {
    title: "Gaming Haven Z",
    description: "Discover and explore the best video games on Gaming Haven Z.",
    url: "https://aerolab-frontend-code-challenge.vercel.app/",
    siteName: "Gaming Haven Z",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontInter.variable}>
        <GamesStoreProvider>
          <ToastContainer />
          {children}
        </GamesStoreProvider>
      </body>
    </html>
  );
}
