import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "あなたの街の相続相談ナビ | 地域で探す相続に強い税理士",
    template: "%s | あなたの街の相続相談ナビ",
  },
  description:
    "相続税申告・遺産分割でお困りの方へ。あなたの地域で相続に強い税理士を見つけましょう。相続の基礎知識、税理士選びのポイント、費用相場まで詳しく解説。",
  keywords: [
    "相続",
    "相続税",
    "税理士",
    "相続相談",
    "遺産分割",
    "相続登記",
    "相続税申告",
  ],
  authors: [{ name: "あなたの街の相続相談ナビ編集部" }],
  creator: "あなたの街の相続相談ナビ",
  publisher: "あなたの街の相続相談ナビ",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "あなたの街の相続相談ナビ",
    title: "あなたの街の相続相談ナビ | 地域で探す相続に強い税理士",
    description:
      "相続税申告・遺産分割でお困りの方へ。あなたの地域で相続に強い税理士を見つけましょう。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "あなたの街の相続相談ナビ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "あなたの街の相続相談ナビ",
    description: "地域で探す相続に強い税理士紹介サイト",
    images: ["/og-image.png"],
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
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QWEZE2VFRY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QWEZE2VFRY');
          `}
        </Script>

        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
