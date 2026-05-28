import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meditate Canada 2027",
  description:
    "A cross-Canada Sahaja Yoga realization tour — Summer 2027. Four routes across the West Coast, Prairies, Great Lakes, and Maritimes, culminating at International Krishna Puja in Canajoharie.",
  openGraph: {
    title: "Meditate Canada 2027",
    description:
      "Join us for a cross-Canada realization tour — Summer 2027. Jai Shri Mataji.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
