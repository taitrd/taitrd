import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import siteMetadata from "@data/siteMetadata";
// import ThemeWrapper from "../components/ThemeWrapper";
import Footer from "@components/Footer";
import Header from "@components/Header";
import SectionContainer from "@components/SectionContainer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ThemeWrapper from "@/components/ThemeWrapper";
import bgStylesConfigs from "@/lib/client/bgStylesConfigs";
import { Analytics } from "@vercel/analytics/react"
import dynamic from "next/dynamic";

const MotionContainer = dynamic(() => import("@/components/motions/Container"));

const plus = Inter({
  subsets: ["vietnamese"],
  variable: "--font-var",
});
// const space_grotesk = Space_Grotesk({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-space-grotesk',
// })

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    images: [siteMetadata.socialBanner],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {flagNumber: bgFlagNumber} = await bgStylesConfigs();
  return (
    <html
      lang={siteMetadata.language}
      className={`${plus.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link
        rel="icon"
        sizes="76x76"
        href="/static/favicons/favicon.svg"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/static/favicons/apple-touch-icon.png"
      />
      {/* <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/favicon-16x16.png"
      /> */}
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/favicons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body className="">
        <Analytics/>
        <ThemeWrapper bgFlagNumber={bgFlagNumber}>
          <AnimatedBackground className="bg-slate-100 pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white"/>
          <SectionContainer>
            <MotionContainer className="max-w-7xl mx-auto relative z-10 flex h-screen flex-col justify-between font-sans">
              <Header />
              <main className="mb-auto">{children}</main>
              <Footer />
            </MotionContainer>
          </SectionContainer>
        </ThemeWrapper>
      </body>
    </html>
  );
}
