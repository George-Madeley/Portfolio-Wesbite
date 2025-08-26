import type { Metadata } from "next";
import "./globals.css";

import Footer from "~/components/Footer";
import Nav from "~/components/Nav";
import theme from "~/style/theme";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ThemeProvider } from "@mui/material/styles";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" defaultMode="dark" />
        <AppRouterCacheProvider>
          <ThemeProvider
            defaultMode="dark"
            disableTransitionOnChange
            theme={theme}
          >
            <CssBaseline />
            <Nav />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
