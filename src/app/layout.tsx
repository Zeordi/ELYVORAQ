import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer, GlobalCTA } from "@/components/Footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ELYVORAQ — Engineering Digital Possibilities",
    template: "%s | ELYVORAQ",
  },
  description:
    "ELYVORAQ is an Ethiopia-based software engineering and digital innovation company building software, digital products, AI solutions and digital experiences for businesses and organizations locally and internationally.",
  keywords: [
    "Elyvoraq",
    "ELYVORAQ",
    "software engineering",
    "digital innovation",
    "AI",
    "digital products",
    "web experience",
    "brand and creative",
    "Ethiopia",
    "Addis Ababa",
    "software company Ethiopia",
  ],
  authors: [{ name: "Elyvoraq Technologies" }],
  creator: "Elyvoraq Technologies",
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL("https://elyvoraq.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elyvoraq.com",
    siteName: "ELYVORAQ",
    title: "ELYVORAQ — Engineering Digital Possibilities",
    description:
      "Ethiopia-based software engineering and digital innovation company building software, digital products, AI solutions and digital experiences for businesses and organizations locally and internationally.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELYVORAQ — Engineering Digital Possibilities",
    description:
      "Elyvoraq Technologies is a software engineering and digital innovation company based in Ethiopia.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${jetbrains.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <GlobalCTA />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
