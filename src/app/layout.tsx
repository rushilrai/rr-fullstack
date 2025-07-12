import type { Metadata } from "next";

import "./globals.css";
import { ConvexClientProvider } from "../modules/common/ConvexClientProvider";

export const metadata: Metadata = {
  title: "RR-Fullstack",
  description: "Highly opinionated fullstack template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
