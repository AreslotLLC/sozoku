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
    default: "遺品整理ガイド.jp | あらゆるモノの処分方法データベース",
    template: "%s | 遺品整理ガイド.jp",
  },
  description:
    "遺品整理・不用品処分でお困りの方へ。家具、家電、貴重品、車両など、あらゆる品目の処分方法を専門家監修のもと詳しく解説しています。",
  keywords: [
    "遺品整理",
    "処分方法",
    "遺品処分",
    "家具処分",
    "家電処分",
    "不用品回収",
    "粗大ごみ",
  ],
  authors: [{ name: "遺品整理ガイド.jp編集部" }],
  creator: "遺品整理ガイド.jp",
  publisher: "遺品整理ガイド.jp",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "遺品整理ガイド.jp",
    title: "遺品整理ガイド.jp | あらゆるモノの処分方法データベース",
    description:
      "遺品整理・不用品処分でお困りの方へ。家具、家電、貴重品、車両など、あらゆる品目の処分方法を詳しく解説。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "遺品整理ガイド.jp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "遺品整理ガイド.jp",
    description: "あらゆるモノの処分方法データベース",
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
