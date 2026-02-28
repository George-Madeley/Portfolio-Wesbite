import "./globals.css";

import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";

import Footer from "~/components/layout/Footer";
import Nav from "~/components/layout/Nav";
import { roboto } from "~/style/font";
import theme from "~/style/theme";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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
    <html className={roboto.className} lang="en" suppressHydrationWarning>
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
