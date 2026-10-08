import type { Metadata } from "next";
import type { ReactNode } from "react";

// ブラウザのタブに出すタイトルと、検索結果などに出す説明文。
export const metadata: Metadata = {
  title: "クイズモンスター",
  description: "3択クイズに答えてモンスターをたおそう",
};

// すべての画面に共通する外枠。
// 画面の文字は日本語なので、読み上げや自動翻訳のために lang="ja" を指定する。
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
