import { Fira_Code as FontMono, Inter as FontSans, VT323 } from "next/font/google";


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontcraft = VT323({
  weight:"400",
  subsets:["latin"],
  variable:"--font-craft"
})
