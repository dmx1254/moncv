import type { Metadata } from "next";
import { Geist, Geist_Mono, Courier_Prime } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "MAMADOU SY - Développeur Full Stack",
  description:
    "Portfolio de Mamadou SY, développeur web fullstack spécialisé en React, Next.js, et technologies modernes",
  icons: {
    icon: "/msy.jpeg",
    shortcut: "/msy.jpeg",
    apple: "/msy.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [
    "développeur web",
    "full stack",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "intelligence artificielle",
    "développement mobile",
    "développement web",
    "développement fullstack",
    "React native",
    "Tailwind CSS",
    "ios",
    "Android",
    "Integration API",
    "Integration IA",
    "Automatisation",
    "Développement d'applications",
    "Développement de sites web",
    "Développement d'applications mobiles",
    "Développement d'applications web",
    "Développement d'applications fullstack",
    "Développement d'applications mobile",
    "Développement d'applications web",

    "ios Dakar, Senegal",
    "Android Dakar, Senegal",
    "Integration API Dakar, Senegal",
    "Integration IA Dakar, Senegal",
    "Automatisation Dakar, Senegal",
    "Développement d'applications Dakar, Senegal",
    "Développement de sites web Dakar, Senegal",
    "Développement d'applications mobiles Dakar, Senegal",
    "Développement d'applications web Dakar, Senegal",
    "Développement d'applications fullstack Dakar, Senegal",
    "Développement d'applications mobile Dakar, Senegal",
    "Développement d'applications web Dakar, Senegal",
  ],
  authors: [{ name: "Mamadou SY" }],
  creator: "Mamadou SY",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://mamadousy.dev",
    title: "MAMADOU SY - Développeur Full Stack et Mobile",
    description:
      "Portfolio de Mamadou SY, développeur web fullstack spécialisé en React, Next.js, et technologies modernes",
    siteName: "Portfolio de Mamadou SY",
    images: [
      {
        url: "/msy.jpeg",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAMADOU SY - Développeur Full Stack et Mobile",
    description:
      "Portfolio de Mamadou SY, développeur web fullstack spécialisé en React, Next.js, et technologies modernes",
    creator: "@mamadou_sy",
    images: [
      {
        url: "/msy.jpeg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${courierPrime.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
