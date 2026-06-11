import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "江口純一｜業務改善・自動化支援",
  description:
    "業務改善・データ活用・自動化ツール開発のポートフォリオ。手作業を減らし、現場が自然に回る仕組みをつくります。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${notoSansJP.className} min-h-full bg-[#F7FAFC] text-on-surface antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
