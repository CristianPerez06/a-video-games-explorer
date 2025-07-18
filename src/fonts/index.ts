import { Inter } from "next/font/google";

const fontInter = Inter({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-default",
});

export default fontInter;
