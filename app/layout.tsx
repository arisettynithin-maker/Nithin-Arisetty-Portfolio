import type { Metadata } from "next";
import type { ReactNode } from "react";

import { RegionProvider } from "@/components/providers/region-provider";
import { SiteBackground } from "@/components/ui/site-background";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nithin Arisetty | Data Analyst | AI & Analytics",
  description:
    "Premium personal portfolio for Nithin Arisetty, a data analytics professional focused on SQL, Python, BI, scalable data systems, and AI-powered analytics applications."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <RegionProvider>
          <SiteBackground />
          {children}
        </RegionProvider>
      </body>
    </html>
  );
}
