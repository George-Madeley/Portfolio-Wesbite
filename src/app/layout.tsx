import "./globals.css";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";

import CopyButton from "~/components/CopyButton";
import Footer from "~/components/layout/Footer";
import Nav from "~/components/layout/Nav";
import SocialLinks from "~/components/SocialLinks";
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
  const contactInfo = [
    {
      icon: <EmailIcon />,
      text: "george.madeley@outlook.com",
      id: "email",
    },
    { icon: <PhoneIcon />, text: "+44 7830 979199", id: "phone" },
  ];
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
            <Footer
              sections={[
                {
                  title: "Jobs",
                  gridProps: { size: { xs: 12, sm: 6 } },
                  items: [
                    {
                      title: "Atlantic Technology Ltd",
                      link: "https://www.atlantictechnology.co.uk/",
                    },
                    {
                      title: "Biodevices Without Borders",
                      link: "https://bathbiodevices.com/",
                    },
                    {
                      title: "British Telecommunications",
                      link: "https://www.bt.com/",
                    },
                  ],
                },
                {
                  title: "Projects",
                  gridProps: { size: { xs: 12, sm: 6 } },
                  items: [
                    {
                      title: "EE40140-Magnetic-Induction-Tomography",
                      link: "/projects/EE40140-Magnetic-Induction-Tomography?owner=George-Madeley",
                    },
                    {
                      title: "GameDevTV-Unity3D-RealmRush",
                      link: "/projects/GameDevTV-Unity3D-RealmRush?owner=George-Madeley",
                    },
                    {
                      title: "Biodevices App",
                      link: "/projects/App?owner=Bath-Biodevices-Without-Borders",
                    },
                  ],
                },
              ]}
              socials={<SocialLinks />}
              title="George Madeley"
              usefulLinks={contactInfo.map((info) => (
                <Grid alignItems="center" container gap={1} key={info.id}>
                  <Grid size="auto">
                    <CopyButton
                      color="inherit"
                      label={info.id}
                      size="small"
                      text={info.text}
                    />
                  </Grid>
                  <Grid size="grow">
                    <Typography
                      color="textSecondary"
                      noWrap
                      textOverflow="ellipsis"
                    >
                      {info.text}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            />
          </ThemeProvider>
        </AppRouterCacheProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
