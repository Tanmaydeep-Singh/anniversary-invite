import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sukhwant Singh & Harjeet Kaur — 25 Years Together",

  description:
    "A quarter of a century. A thousand little moments. One beautiful journey. Join us as we celebrate 25 years together on 21 October 2026.",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    title: "Sukhwant Singh & Harjeet Kaur — 25 Years Together",

    description:
      "A quarter of a century. A thousand little moments. One beautiful journey.",

    url: "https://aquartercentury.vercel.app",

    siteName: "Sukhwant Singh & Harjeet Kaur — 25 Years Together",

    images: [
      {
        url: "https://aquartercentury.vercel.app/share/anniversary-25.jpg",
        width: 1200,
        height: 630,
        alt: "Sukhwant Singh & Harjeet Kaur — 25 Years Together",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Sukhwant Singh & Harjeet Kaur — 25 Years Together",

    description:
      "A quarter of a century. A thousand little moments. One beautiful journey.",

    images: [
      "https://aquartercentury.vercel.app/share/anniversary-25.jpg",
    ],
  },
};

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cormorant.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}