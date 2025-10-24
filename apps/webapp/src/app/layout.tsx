import "@fontsource-variable/merriweather";
import "@fontsource-variable/outfit";
import type { Metadata, Viewport } from "next";

import "./index.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#f8f7f3",
};

export const metadata: Metadata = {
  title: "webapp",
  description: "webapp",
  keywords: ["webapp"],
  applicationName: "webapp",

  icons: {
    icon: [
      { url: "/favicon/favicon.ico", rel: "icon" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      {
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },

  openGraph: {
    type: "website",
    url: "https://www.webapp.com",
    title: "webapp",
    description: "webapp",
    images: [
      {
        url: "https://www.webapp.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "webapp",
      },
    ],
    siteName: "webapp",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    site: "@webapp",
    creator: "@webapp-creator",
    title: "webapp",
    description: "webapp",
    images: ["https://www.webapp.com/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <noscript>
          <div className="bg-base-200 fixed inset-0 z-50 flex items-center justify-center">
            Rushil recommends JavaScript :)
          </div>
        </noscript>
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}
