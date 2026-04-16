import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sala Investments (Pty) Ltd | Vehicle Sourcing & Export",
  description:
    "Sala Investments is a vehicle sourcing and export company based in Johannesburg, South Africa. End-to-end vehicle sourcing, inspection, export compliance, and logistics for clients across Africa.",
  keywords: [
    "Sala Investments",
    "vehicle sourcing",
    "vehicle export",
    "South Africa",
    "Johannesburg",
    "car export",
    "automotive logistics",
    "Africa vehicles",
    "Kenya vehicles",
    "Tanzania vehicles",
    "Zimbabwe vehicles",
  ],
  authors: [{ name: "Sala Investments (Pty) Ltd" }],
  openGraph: {
    title: "Sala Investments (Pty) Ltd | Driving Quality Vehicles Across Africa",
    description:
      "Vehicle sourcing, inspection, export compliance, and logistics for clients across Africa.",
    siteName: "Sala Investments (Pty) Ltd",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sala Investments (Pty) Ltd",
    description:
      "Driving Quality Vehicles Across Africa — Vehicle sourcing & export from Johannesburg, South Africa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
