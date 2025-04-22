import type { Metadata } from "next";
import "./globals.css";

import { Gabarito, Josefin_Sans } from "next/font/google";
import { Footer, Nav } from "~/components";
import { ThemeContextProvider } from "~/context";

const fontHeading = Gabarito({
  variable: "--font-heading",
  subsets: ["latin"],
});

const fontBody = Josefin_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio of George Madeley",
  icons: ["/favicon.ico"],
  authors: [
    {
      name: "George Madeley",
      url: "https://george-madeley-portfolio.co.uk/",
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://george-madeley-portfolio.co.uk/",
    images: [
      {
        url: "%PUBLIC_URL%/thumbnail.png",
      },
    ],
    siteName: "The Portfolio of George Madeley",
    title: "The Portfolio of George Madeley",
    description:
      "Full Stack Developer | Machine Learning Engineer | Game Developer. Masters of Computer Systems Engineering student at the University of Bath.",
  },
  creator: "George Madeley",
  keywords: [
    "portfolio",
    "resume",
    "cv",
    "george",
    "madeley",
    "programming",
    "software",
    "development",
    "web",
    "design",
    "development",
    "designer",
  ],
  manifest: "/manifest.json",
  description:
    "Full Stack Developer | Machine Learning Engineer | Game Developer. Masters of Computer Systems Engineering student at the University of Bath.",
  metadataBase: new URL("https://george-madeley-portfolio.co.uk"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontHeading.variable} ${fontBody.variable}`}>
        <ThemeContextProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <div className="gradient-container">
            <canvas className="gradient" id="gradient"></canvas>
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
